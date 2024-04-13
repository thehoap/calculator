import StringUtils from '@/helpers/string';

interface IProps {
    onClick(): void;
    disabled?: boolean;
}

export const Undo = ({ onClick, disabled }: IProps) => {
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
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3' />
        </svg>
    );
};
