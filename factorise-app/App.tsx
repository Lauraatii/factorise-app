import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/styles/colors';
import { spacing } from './src/styles/spacing';
import { typography } from './src/styles/typography';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task Manager</Text>
      </View>
      <View style={styles.body}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  headerTitle: {
    ...typography.heading.large,
    color: colors.background.pure,
  },
  body: {
    flex: 2,
    backgroundColor: colors.background.light,
    padding: spacing.screen.horizontal,
  },
});