
```md
# Task Manager Mobile App

A React Native task management application built with TypeScript, implementing modern development practices and a comprehensive design system.

## Features

### Core Requirements
- **Task Creation**: Add tasks with required titles and optional descriptions.
- **Form Validation**: User-friendly error messages for invalid inputs.
- **Submit Button**: Disabled until the form is valid to prevent incomplete submissions.
- **Auto-Clear Form**: Automatically clears the form after successful submission.
- **Optimized Task Display**: Tasks are displayed in a scrollable list for easy access.
- **Responsive Layout**: Header occupies 1/3 of the screen, while the body takes up 2/3.
- **Keyboard-Aware Scrolling**: Ensures inputs are not obscured by the keyboard.

### Bonus Features
- **Task Sorting**: Sort tasks by newest or oldest.
- **Global State Management**: Utilizes React Context for efficient state management across components.
- **Comprehensive Design System**: Consistent use of colors, spacing, and typography throughout the app.
- **Accessibility Support**: Designed with accessibility in mind to ensure usability for all users.
- **Responsive Design**: Adapts to various screen sizes for a seamless user experience.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Check Node Version**:
   Ensure you have Node.js version 18 or higher. You can check your current version with:
   ```bash
   node -v
   ```
   If your version is older than 18, use the following command to switch:
   ```bash
   nvm use 18
   ```

3. **Install Dependencies**:
   Install the required packages using npm:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   Launch the Expo development server:
   ```bash
   npx expo start
   ```

## Usage

- Open the app in an iOS or Android simulator or on a physical device using Expo Go.
- Use the form at the top to add new tasks.
- Sort tasks using the provided buttons.
- Scroll through the list of tasks, which will adjust based on the screen size.


## License

This project is open source and available under the [MIT License](LICENSE).

```

