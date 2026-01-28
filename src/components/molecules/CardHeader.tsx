import React from 'react';
import { Avatar, Tag } from '../atoms';
import { spacing, typography, colors } from '../../tokens';

export interface CardHeaderProps {
    avatarSrc: string;
    name: string;
    role?: string;
    tag?: string;
    tagVariant?: 'default' | 'primary' | 'success' | 'warning';
}

export function CardHeader({
    avatarSrc,
    name,
    role,
    tag,
    tagVariant = 'default'
}: CardHeaderProps) {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.md,
    };

    const infoStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs
    };

    const nameStyle: React.CSSProperties = {
        margin: 0,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
        color: colors.neutral.grey900,
    };

    const roleStyle: React.CSSProperties = {
        margin: 0,
        fontSize: typography.fontSize.sm,
        color: colors.neutral.grey500,
    };

    return (
        <div style={containerStyle}>
            <Avatar src={avatarSrc} alt={`${name}'s avatar`} size="lg" />
            <div style={infoStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                    <h3 style={nameStyle}>{name}</h3>
                    {tag && <Tag variant={tagVariant}>{tag}</Tag>}
                </div>
                {role && <p style={roleStyle}>{role}</p>}
            </div>
        </div>
    );
}