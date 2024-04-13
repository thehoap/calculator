import StringUtils from '@/helpers/string';

interface IProps {
    onClick(): void;
    disabled?: boolean;
}

export const Redo = ({ onClick, disabled }: IProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='3'
            stroke='currentColor'
            className={StringUtils.classNames('undo-redo', disabled ? 'disabled' : undefined)}
            onClick={onClick}
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3' />
        </svg>
    );
};
