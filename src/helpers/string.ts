const classNames = (...classes: (string | undefined)[]): string => {
    return classes.join(' ');
};

const StringUtils = { classNames };

export default StringUtils;
