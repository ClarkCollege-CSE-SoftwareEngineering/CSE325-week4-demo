import React from 'react';
import { colors, typography } from '../../tokens';

export interface TimestampProps {
    date: Date,
    format?: 'relative' | 'absolute'
}

function formatRelative(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
}

export function Timestamp({ date, format = 'relative' }: TimestampProps) {
    const style: React.CSSProperties = {
        color: colors.neutral.grey500,
        fontSize: typography.fontSize.sm,
    };

    const displayText = format === 'relative' ? formatRelative(date) : date.toLocaleDateString();

    return (
    <time dateTime={date.toISOString()} style={style}>
        {displayText}
    </time>
    );
}