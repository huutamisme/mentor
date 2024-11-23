import { FC } from 'react';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    margin: number;
}

const NextArrow: FC<ArrowProps> = ({ className, style, onClick, margin }) => (
    <div
        className={`${className} bg-black rounded-full shadow-lg`}
        style={{
            ...style,
            position: 'absolute',
            right: margin,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
        }}
        onClick={onClick}
    />
);

const PrevArrow: FC<ArrowProps> = ({ className, style, onClick, margin }) => (
    <div
        className={`${className} bg-black rounded-full shadow-lg`}
        style={{
            ...style,
            position: 'absolute',
            left: margin,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
        }}
        onClick={onClick}
    />
);

export { NextArrow, PrevArrow };
