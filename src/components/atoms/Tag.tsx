import React from 'react';
import { colors, spacing, typography } from '../../tokens';

export interface TagProps {
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'success' | 'warning';
};

const variantStyles = {
    default: { bg: colors.neutral.grey200, text: colors.neutral.grey700 },
    primary: { bg: colors.primaryLight, text: colors.primary },
    success: { bg: '#d4edda', text: colors.success },
    warning: { bg: '#fff3cd', text: '#856404' }
};

export function Tag({ children, variant = 'default' }: TagProps) {
    const { bg, text } = variantStyles[variant];

    const style: React.CSSProperties = {
        display: 'inline-block',
        padding: `${spacing.xs} ${spacing.sm}`,
        backgroundColor: bg,
        color: text,
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.medium,
        borderRadius: '4px'
    }

    return <span style={style}>{children}</span>;
}