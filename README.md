# BuildShare

Welcome to BuildShare, the premier social media platform for tech and productivity enthusiasts. Whether you're passionate about custom PC builds, gaming setups, work environments, keyboard constructions, or streaming setups, BuildShare is your go-to destination. This project is built on the solid foundations of React, TypeScript, and Vite, offering a fast, efficient, and engaging user experience.

Leveraging Appwrite as our backend-as-a-service, we ensure secure and scalable cloud services for authentication, database, storage, and more, making it easier for users to share and manage their content securely. With the integration of React Query, now part of the TanStack suite, we provide a seamless data fetching, caching, and state management experience, ensuring that our users have up-to-the-minute access to the latest tech and productivity setups.

Featuring hot module replacement (HMR) for seamless development and a robust ESLint setup for maintaining code quality, BuildShare is dedicated to fostering a community where individuals can share, explore, and draw inspiration from each other's tech and productivity setups. Join us in building and sharing the future of tech and productivity spaces.

## Features

- **React 18**: Utilize the latest React features, including hooks and concurrent mode.
- **TypeScript**: Benefit from static type checking with TypeScript in development.
- **Vite**: Experience blazing-fast builds and updates with Vite's HMR.
- **Tailwind CSS**: Style your app with utility-first CSS for rapid UI development.
- **Appwrite Integration**: Secure and scalable backend services with Appwrite for authentication, database, storage, and more.
- **React Query**: Efficient server state management in React applications.
- **Responsive Design**: Built-in responsive design with Tailwind CSS for a great mobile and desktop experience.

## Getting Started

To get started with BuildShare, follow these steps:

1. **Clone the repository**

```sh
git clone https://github.com/freddykhant/buildshare_app.git
cd buildshare
```

## Install Dependencies

```sh
npm install
```

## Set up environment variables

Copy the .env.local.example file to .env.local and update the variables to match your Appwrite project settings.

## Run the development server

`npm run dev`: Scripts

`npm run dev`: Start the development server with hot module replacement.

`npm run build`: Build the application for production.

`npm run lint`: Lint the project files.

`npm run preview`: Preview the production build.

### Expanding ESLint Configuration

For production applications, consider enhancing the ESLint configuration for type-aware linting. Update the `.eslintrc.cjs` file as follows:

Use `plugin:@typescript-eslint/recommended-type-checked` for stricter type checks.

Add `shplugin:react/recommended and plugin:react-hooks/recommended` for React specific linting.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This README provides a comprehensive overview of the BuildShare project, including its features, setup instructions, available scripts, and contribution guidelines. It's tailored to replace the current README.md in your workspace, offering a more project-specific introduction and guide.
