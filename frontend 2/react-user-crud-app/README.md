# React User CRUD App

This project is a React application that interacts with a CRUD API to manage user data. It provides a clean and modern interface for displaying user information, allowing users to view, delete, and access detailed information about each user.

## Features

- Fetch and display user information in a responsive table layout.
- Modal for viewing detailed user information.
- Ability to delete users from the list (client-side only).
- Map link to view user location using geo coordinates.
- Modern CSS styling with animations for a smooth user experience.

## Project Structure

```
react-user-crud-app
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── users.ts
│   ├── components
│   │   ├── App.tsx
│   │   ├── UserTable.tsx
│   │   ├── UserModal.tsx
│   │   ├── DeleteButton.tsx
│   │   └── MapLink.tsx
│   ├── styles
│   │   ├── App.module.css
│   │   ├── UserTable.module.css
│   │   ├── UserModal.module.css
│   │   └── animations.css
│   ├── types
│   │   └── user.ts
│   ├── utils
│   │   └── formatters.ts
│   ├── index.tsx
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-user-crud-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- The application will fetch user data from the API at `http://localhost:8080/api/users`.
- Users can be viewed in a table format with columns for name/email, address, phone, website, and company name.
- Click on a user to open a modal with detailed information and a map link.
- Users can be deleted from the list using the delete button.

## Technologies Used

- React
- TypeScript
- CSS Modules
- Axios (for API requests)

## License

This project is licensed under the MIT License.