import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', 
    borderRadius: 999,          
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  icon: {
    marginRight: spacing.sm,
  },
  label: {
    color: colors.text.secondary,
    marginRight: spacing.sm,
    ...typography.utility.label,
  },
  input: {
    flex: 1,
    ...typography.overrides.input,
  },
  error: {
    color: colors.state.error,
    ...typography.body.small,
  },
  button: {
    backgroundColor: colors.primary.dark,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.primary.muted,
  },
  buttonText: {
    color: colors.background.pure,
    ...typography.utility.button,
  },
});
