/**
 * DESIGN SYSTEM TYPOGRAPHY
 * 
 * Type scale with perfect fourth ratio (1.333) for harmony.
 * Includes responsive line heights and letter spacing.
 * 
 * Usage:
 * import { typography } from './typography'
 * { ...typography.heading.large }
 */
 export const typography = {
    display: {
      large: {
        fontSize: 48,
        lineHeight: 56,
        fontWeight: '800' as const,
        letterSpacing: -0.5,
      },
      medium: {
        fontSize: 36,
        lineHeight: 44,
        fontWeight: '700' as const,
      }
    },
    
    // Headings
    heading: {
      large: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: '700' as const,
      },
      medium: {
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '600' as const,
      },
      small: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600' as const,
      }
    },
    
    // Body text
    body: {
      large: {
        fontSize: 18,
        lineHeight: 28,  
        fontWeight: '400' as const,
      },
      medium: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400' as const,
      },
      small: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400' as const,
      }
    },
    
    // Functional text
    utility: {
      button: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600' as const,
        textTransform: 'uppercase' as const,
        letterSpacing: 0.5,
      },
      label: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500' as const,
        textTransform: 'uppercase' as const,
        letterSpacing: 0.4,
      },
      caption: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400' as const,
      }
    },
    
    // Special cases
    overrides: {
      input: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400' as const,
      }
    }
  };