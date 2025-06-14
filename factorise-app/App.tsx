import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TaskForm } from './src/components/TaskForm';
import { colors } from './src/styles/colors';
import { spacing } from './src/styles/spacing';
import { typography } from './src/styles/typography';

export default function App() {
  const [tasks, setTasks] = useState<{ title: string; description?: string }[]>([]);

  const handleAddTask = (task: { title: string; description?: string }) => {
    setTasks(prev => [...prev, task]);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        backgroundColor: colors.primary.light,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ ...typography.heading.large, color: colors.background.pure }}>Task Manager</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: colors.background.light, padding: spacing.md }}>
        {/* Task Input Form */}
        <TaskForm onAddTask={handleAddTask} />
        <ScrollView style={{ marginTop: spacing.lg }}>
          {tasks.map((task, idx) => (
            <View key={idx} style={{ marginBottom: spacing.md }}>
              <Text style={typography.heading.small}>{task.title}</Text>
              {task.description && <Text style={typography.body.small}>{task.description}</Text>}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
