import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

/**
 * TaskList component displays a list of tasks.
 * It uses FlatList for efficient rendering of large lists.
 */
export const TaskList = () => {
  const { tasks } = useTasks(); // Access tasks from context

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id} // Unique key for each item
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No tasks yet</Text> 
      }
      contentContainerStyle={styles.container} 
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xxl, 
  },
  taskItem: {
    backgroundColor: colors.background.pure, 
    padding: spacing.md, 
    marginBottom: spacing.sm,
    borderRadius: 8, 
    borderLeftWidth: 4, 
    borderLeftColor: colors.primary.light, 
  },
  title: {
    ...typography.body.medium, 
    fontWeight: '600', 
  },
  description: {
    ...typography.body.small, 
    color: colors.text.secondary, 
    marginTop: spacing.xs, 
  },
  emptyText: {
    ...typography.body.medium, 
    color: colors.text.disabled,
    textAlign: 'center', 
    marginTop: spacing.lg, 
  },
});
