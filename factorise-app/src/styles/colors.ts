/**
 * DESIGN SYSTEM COLOR PALETTE
 * 
 * Semantic color system for consistent UI theming.
 * Organized by: Primary, Background, Text, States, and Neutrals.
 * 
 * Usage: 
 * import { colors } from './colors'
 * { color: colors.primary.dark }
 */
 export const colors = {
    // Primary brand colors
    primary: {
      light: '#3F72AF',    // Light primary (header)
      dark: '#112D4E',     // Dark primary (text)
      muted: '#DBE2EF',    // Muted primary (borders)
    },
    
    // Background colors
    background: {
      light: '#F9F7F7',    // Light background
      pure: '#FFFFFF',     // Pure white
    },
    
    // System state colors
    state: {
      error: '#E63946',    // Error/alert red
      warning: '#FFBE0B',  // Warning yellow
      success: '#4BB543',  // Success green
      info: '#3F72AF',     // Info blue (matches primary)
    },
    
    // Text colors
    text: {
      primary: '#112D4E',  // Main text
      secondary: '#3F72AF',// Secondary text
      disabled: '#A8A8A8', // Disabled state
    },
    
    // Borders/dividers
    border: {
      light: '#DBE2EF',    // Light borders
      dark: '#3F72AF',     // Dark borders
    },
  };