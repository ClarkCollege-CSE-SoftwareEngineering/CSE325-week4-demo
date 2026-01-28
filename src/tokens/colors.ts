export const colors = {
    primary: '#0066cc',
    primaryLight: '#e6f0fa',
    primaryDark: '#004d99',

    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',

    neutral: {
        white: '#ffffff',
        grey100: '#f8f9fa',
        grey200: '#e9ecef',
        grey300: '#dee2e6',
        grey500: '#6c757d',
        grey700: '#495057',
        grey900: '#212529',
        black: '#000000',
    },
} as const;

export type ColorToken = typeof colors;