import React from 'react';
import { CardHeader, CardMeta } from '../molecules';
import { spacing, colors } from '../../tokens';

export interface ProfileCardProps {
    avatarSrc: string;
    name: string;
    role?: string;
    tag?: string;
    tagVariant?: 'default' | 'primary' | 'success' | 'warning';
    location?: string;
    joinDate?: Date;
    postCount?: number;
    bio?: string;
}

export function ProfileCard({
    avatarSrc,
    name,
    role,
    tag,
    tagVariant,
    location,
    joinDate,
    postCount,
    bio,
}: ProfileCardProps) {
    const cardStyle: React.CSSProperties = {
        padding: spacing.lg,
        backgroundColor: colors.neutral.white,
        border: `1px solid ${colors.neutral.grey200}`,
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
    };

    const bioStyle: React.CSSProperties = {
        marginTop: spacing.md,
        paddingTop: spacing.md,
        borderTop: `1px solid ${colors.neutral.grey200}`,
        color: colors.neutral.grey700,
        lineHeight: 1.5,
    };

    return (
    <article style={cardStyle}>
        <CardHeader avatarSrc={avatarSrc} name={name} role={role} tag={tag} tagVariant={tagVariant} />
        
        <div style={{ marginTop: spacing.md }}>
            <CardMeta location={location} joinDate={joinDate} postCount={postCount} />
        </div>

        {bio && <p style={bioStyle}>{bio}</p>}
    </article>
    );
}