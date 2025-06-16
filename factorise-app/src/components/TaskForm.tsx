import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTasks } from '../context/TaskContext';
import { styles } from '../styles/inputStyles';
import { colors } from '../styles/colors';

/**
 * Task form component with validation and submission handling
 * Uses context for state management instead of prop drilling
 */
export const TaskForm = () => {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles form submission with validation
   * - Validates title presence
   * - Dispatches ADD_TASK action
   * - Resets form on success
   */
  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    dispatch({ 
      type: 'ADD_TASK', 
      payload: { title, description } 
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setError('');
  };

  const isFormValid = !!title.trim();

  return (
    <View style={styles.container}>
      {/* Title Input with icon */}
      <View style={styles.inputWrapper}>
        <Ionicons 
          name="create-outline" 
          size={20} 
          color={colors.text.primary} 
          style={styles.icon} 
        />
        <TextInput
          placeholder="Task title"
          placeholderTextColor={colors.text.disabled}
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          accessibilityLabel="Task title input"
        />
      </View>

      {/* Description Input with icon */}
      <View style={styles.inputWrapper}>
        <Ionicons 
          name="document-text-outline" 
          size={20} 
          color={colors.text.primary}
          style={styles.icon} 
        />
        <TextInput
          placeholder="Optional description"
          placeholderTextColor={colors.text.disabled}
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          accessibilityLabel="Task description input"
        />
      </View>

      {/* Validation Error Message */}
      {error && (
        <Text style={styles.error} accessibilityRole="alert">
          {error}
        </Text>
      )}

      {/* Submit Button with conditional styling */}
      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isFormValid}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};