import React from 'react';
import { colors, spacing } from '../../tokens';

export interface AvatarProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg';
};

const sizeMap = {
    sm: '32px',
    md: '48px',
    lg: '64px',
};

export function Avatar({ src, alt, size = 'md' }: AvatarProps) {
    const dimension = sizeMap[size];

    const style: React.CSSProperties = {
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        objectFit: 'cover',
        border: `2px solid ${colors.neutral.grey200}`,
    }

    return <img src={src} alt={alt} style={style} />;
}