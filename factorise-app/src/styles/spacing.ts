/**
 * DESIGN SYSTEM SPACING SCALE
 * 
 * 8-point grid system for consistent vertical rhythm.
 * Multiples of 8 with exceptions for small increments.
 * 
 * Usage:
 * import { spacing } from './spacing'
 * { padding: spacing.md }
 */
 export const spacing = {
    nano: 2,    // 2px - micro spacing (e.g., focus rings)
    micro: 4,   // 4px - tiny spacing (between icons and text)
    xs: 8,      // 8px - small spacing (list items)
    sm: 12,     // 12px - medium-small (card paddings)
    md: 16,     // 16px - base unit (section padding)
    lg: 24,     // 24px - large spacing (between sections)
    xl: 32,     // 32px - extra large (major separation)
    xxl: 48,    // 48px - huge spacing (hero sections)
    
    // spacers for full-width elements
    screen: {
      horizontal: 16,      // Screen side padding
      vertical: 24,        // Screen top/bottom padding
    },
  };