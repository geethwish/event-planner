# Event Planner App

Welcome to the Event Planner App, an Expo-based project designed to help users plan and manage events efficiently. This project leverages various technologies including React Native, Firebase, Redux, and more.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Used Technologies](#tech-stack)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Firebase Configuration](#firebase-configuration)
- [Authentication](#authentication)
- [Profile Management](#profile-management)
- [Testing](#testing)
- [Linting](#linting)
- [Learn More](#learn-more)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:

   ```bash
   git clonehttps://github.com/geethwish/event-planner.git
   cd event-planner
   ```

   ### Running the App

   2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

   3. Start the development server:

   ```bash
   expo start
   ```

   ## Project Structure

   The project structure is as follows:

   ```
   /event-planner
   ├── assets
   ├── components
   ├── config
   ├── app
   ├── constants
   ├── hooks
   ├── store
   ├── utils
   ```

## Tech stack

- React Native
- Expo
- Javascript
- Typescript
- Tailwind CSS - Styling FrameWork
- Native Wind - Styling Framework
- Firebase - Authentication and Database
- Axios - Api request handler
- Redux Toolkit - Global state management tool
- Formik - form validator

## Scripts

- `npm start` or `yarn start`: Start the development server.
- `npm run android` or `yarn android`: Run the app on an Android emulator.
- `npm run ios` or `yarn ios`: Run the app on an iOS simulator.
- `npm test` or `yarn test`: Run tests.
- `npm run lint` or `yarn lint`: Run linter.

## Environment Variables

Create a `.env` file in the root directory and add your environment variables:

```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_API_URL=your.api.com
```

## Firebase Configuration

Ensure you have a Firebase project set up and replace the placeholders in the `.env` file with your actual Firebase configuration.

## Authentication

The app uses Firebase Authentication for user management. Ensure you have enabled the required authentication methods in your Firebase console.

## Profile Management

Users can update their profile information within the app. The profile data is stored in Firebase Firestore.

## Testing

To run tests, use the following command:

```bash
npm test
# or
yarn test
```

## Linting

To run the linter, use the following command:

```bash
npm run lint
# or
yarn lint
```

## Learn More

To learn more about Expo and React Native, check out the following resources:

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Firebase React Native Documentation](https://rnfirebase.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/)

## Developed By : Geeth Wishkamal
