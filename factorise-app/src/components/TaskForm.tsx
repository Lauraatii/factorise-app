import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';
import { styles } from '../styles/inputStyles';

/**
 * Props for TaskForm component
 */
type TaskFormProps = {
  onAddTask: (task: { title: string; description?: string }) => void;
};

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    // Form state management
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    /**
   * Form submission with validation
   */
  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    // Pass task to parent and reset form
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
    setError('');
  };

  const isFormValid = !!title.trim();

  return (
    <View style={styles.container}>
      {/* Title Input */}
      <View style={styles.inputWrapper}>
        <Ionicons name="create-outline" size={20} color="black" style={styles.icon} />
        <TextInput
          placeholder="Task title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
      </View>

      {/* Description Input */}
      <View style={styles.inputWrapper}>
        <Ionicons name="document-text-outline" size={20} color="black" style={styles.icon} />
        <TextInput
          placeholder="Optional description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
      </View>

      {/* Error */}
      {error && <Text style={styles.error}>{error}</Text>}

      {/* Submit Button */}
      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};
