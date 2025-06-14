## Git Workflow Log

### Branch: feature/layout-and-style

Created design system
- colors.ts for semantic palette
- spacing.ts using 8pt grid
- typography.ts with type scale

Implemented base layout in App.tsx
- Header: 1/3 screen with brand color and title
- Body: 2/3 screen with padding

### Commands:
- git checkout -b feature/layout-and-style
- git add .
- git commit -m "Added base color palette and spacing system and typography"
- git commit -m Implemented app layout and body with design systems
- git checkout main
- git merge feature/layout-and-style
- git push origin main

### Branch: feature/task-form

Built TaskForm with these features:
- Task title (required)
- Optional description
- Form validation with error messages
- Disabled button unless valid
- Auto-clear after submit
- Styled inputs with icon and label (based on image)

### Commands:
- git checkout -b feature/task-form
- git add .
- git commit -m "Implement TaskForm with validation and styling"
- git checkout main
- git merge feature/task-form
- git push origin main


