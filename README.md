# BuildShare

Welcome to BuildShare, the premier social media platform for tech and productivity enthusiasts. Whether you're passionate about custom PC builds, gaming setups, work environments, keyboard constructions, or streaming setups, BuildShare is your go-to destination. This project is built on the solid foundations of React, TypeScript, and Vite, offering a fast, efficient, and engaging user experience.

Leveraging Appwrite as our backend-as-a-service, we ensure secure and scalable cloud services for authentication, database, storage, and more, making it easier for users to share and manage their content securely. With the integration of React Query, now part of the TanStack suite, we provide a seamless data fetching, caching, and state management experience, ensuring that our users have up-to-the-minute access to the latest tech and productivity setups.

Featuring hot module replacement (HMR) for seamless development and a robust ESLint setup for maintaining code quality, BuildShare is dedicated to fostering a community where individuals can share, explore, and draw inspiration from each other's tech and productivity setups. Join us in building and sharing the future of tech and productivity spaces.

## Tech Stack

- **React.js**: The core framework for building the user interface.
- **Appwrite**: Backend-as-a-Service for authentication, database, storage, and more.
- **React Query**: For efficient server state management in React applications.
- **TypeScript**: For static type checking.
- **Shadcn**: A UI component library for React.
- **Tailwind CSS**: For utility-first CSS styling.

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```sh
git clone https://github.com/freddykhant/buildshare_app.git
cd buildshare_app
```

### Installation

Install the project dependencies using npm:

```sh
npm install
```

### Set Up Environmental Variables

Create a new file named `.env` in the root of your project and add the following content:

```sh
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/ "Appwrite")

### Running the Project

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000)
