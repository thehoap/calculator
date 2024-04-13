import { useState } from 'react';

type UseStateReturnType<T> = {
    present: T;
    past: T[];
    future: T[];
    undo(): void;
    redo(): void;
    updatePresent(newPresent: T): void;
};

function useUndoRedo<T>(initialPresent: T): UseStateReturnType<T> {
    const [past, setPast] = useState<T[]>([]);
    const [present, setPresent] = useState<T>(initialPresent);
    const [future, setFuture] = useState<T[]>([]);

    const undo = (): void => {
        if (past.length === 0) {
            return;
        }

        const newPast = [...past];
        const newPresent = newPast.pop() as T;

        setPast(newPast);
        setPresent(newPresent);
        setFuture([present, ...future]);
    };

    const redo = (): void => {
        if (future.length === 0) {
            return;
        }

        const newFuture = [...future];
        const newPresent = newFuture.shift() as T;

        setPast([...past, present]);
        setPresent(newPresent);
        setFuture(newFuture);
    };

    const updatePresent = (newPresent: T): void => {
        setPast([...past, present]);
        setPresent(newPresent);
        setFuture([]);
    };

    return { present, past, future, undo, redo, updatePresent };
}

export default useUndoRedo;
