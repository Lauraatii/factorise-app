import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

/**
 * TaskSort component allows users to sort tasks by newest or oldest.
 * It dispatches actions to the context to update the task list.
 */
export const TaskSort = () => {
  const { dispatch } = useTasks(); // Access dispatch function from context

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort by:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'SORT_TASKS', payload: 'newest' })} // Sort by newest
      >
        <Text style={styles.buttonText}>Newest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'SORT_TASKS', payload: 'oldest' })} // Sort by oldest
      >
        <Text style={styles.buttonText}>Oldest</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: spacing.md, 
  },
  label: {
    ...typography.body.medium, 
    color: colors.text.secondary, 
    marginRight: spacing.sm, 
  },
  button: {
    paddingHorizontal: spacing.md, 
    paddingVertical: spacing.xs, 
    borderRadius: 16, 
    backgroundColor: colors.primary.muted, 
    marginRight: spacing.xs, 
  },
  buttonText: {
    ...typography.utility.label, 
    color: colors.primary.dark, 
  },
});
