import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { TaskProvider } from './src/context/TaskContext';
import { TaskForm } from './src/components/TaskForm';
import { TaskList } from './src/components/TaskList';
import { TaskSort } from './src/components/TaskSort';
import { colors } from './src/styles/colors';
import { spacing } from './src/styles/spacing';
import { typography } from './src/styles/typography';

/**
 * Main application component wrapped with TaskProvider for global state management
 * KeyboardAvoidingView ensures inputs are not covered by the keyboard
 * Touchables around inputs dismiss keyboard on tap outside without breaking FlatList scrolling
 */
export default function App() {
  return (
    <TaskProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Task Manager</Text>
          </View>

          <View style={styles.body}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View>
                <View style={styles.taskFormWrapper}>
                  <TaskForm />
                </View>
                <TaskSort />
              </View>
            </TouchableWithoutFeedback>

            {/* TaskList FlatList manages its own scroll */}
            <TaskList />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    height: '33%',
    minHeight: 150, 
    backgroundColor: colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  title: {
    ...typography.heading.large,
    color: colors.background.pure,
  },
  body: {
    flex: 2,
    paddingHorizontal: spacing.screen.horizontal,
  },
  taskFormWrapper: {
    marginTop: spacing.lg, 
  },
});