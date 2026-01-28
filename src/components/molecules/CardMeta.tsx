import React from 'react';
import { Timestamp } from '../atoms';
import { spacing, typography, colors } from '../../tokens';

export interface CardMetaProps {
    location?: string;
    joinDate?: Date;
    postCount?: number;
}

export function CardMeta({ location, joinDate, postCount }: CardMetaProps) {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacing.md,
        fontSize: typography.fontSize.sm,
        color: colors.neutral.grey500,
    };

    const itemStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: spacing.xs,
    };

    return (
        <div style={containerStyle}>
            {location && (
                <span style={itemStyle}>
                    ■ {location}
                </span>
            )}
            {joinDate && (
                <span style={itemStyle}>
                    ■ Joined <Timestamp date={joinDate} format='absolute' />
                </span>
            )}
            {postCount !== undefined && (
                <span style={itemStyle}>
                    ■ {postCount} posts
                </span>
            )}
        </div>
    );
}