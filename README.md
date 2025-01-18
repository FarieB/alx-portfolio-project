# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









# AlxDeliver

AlxDeliver is a front-end web application designed to simulate a delivery service platform. This project is part of a portfolio for a software engineering qualification, specializing in front-end development. It demonstrates user authentication, service selection, delivery scheduling, and tracking features using React and mock APIs.

## Project Overview

- **Project Name**: AlxDeliver
- **Description**: A delivery service platform where users can register, log in, select services, schedule deliveries, and track their packages.
- **Technologies Used**: React, Redux, SASS, JSON Server, React Router.

## WEEK 1 PROGRESS

### Accomplishments
- Set up the initial project structure using `create-react-app`.
- Implemented user authentication simulation (login and registration) using a mock API (`JSON Server`).
- Created the basic routing structure with `React Router`.

### Directory Structure
alx-portfolio-project/
├── node_modules/       # Directory for installed packages
├── public/             # Public directory for static files
│   ├── index.html      # Main HTML file
│   └── favicon.ico     # Default favicon
├── src/                # Source directory for React components and assets
│   ├── App.css         # Styles for the App component
│   ├── App.js          # Main App component
│   ├── App.test.js     # Default test file for App component
│   ├── index.css       # Global styles
│   ├── index.js        # Entry point for the React app
│   ├── logo.svg        # Default logo
│   └── reportWebVitals.js # Performance metrics
├── .gitignore          # Git ignore file
├── package.json        # Project metadata and dependencies
└── README.md           # Project README file (auto-generated)


## WEEK 2 PROGRESS

## DeliveryServiceList Component

### Description
The `DeliveryServiceList` component displays a list of available delivery services and allows users to sort the services based on price, delivery time, or rating. It fetches mock data of services and provides a simple interface for filtering the list according to user preferences.

### Features
- **Service Listing**: Displays a list of delivery services with details such as name, price, delivery time, and rating.
- **Sorting Options**: Users can sort the services by price, delivery time, or rating through a dropdown selection.

### Implementation
- **State Management**: Uses React `useState` and `useEffect` hooks to manage the list of services and handle filtering logic.
- **Filtering Logic**: The component sorts the services array based on the selected filter criteria and updates the displayed list accordingly.

## DeliveryForm Component

### Description
The `DeliveryForm` component allows users to schedule a delivery by providing details such as pickup and drop-off locations, package details, and the preferred delivery time. It includes form validation to ensure that all required fields are filled out correctly.

### Features
- **Form Fields**: Includes input fields for pickup location, drop-off location, package weight, delivery instructions, and preferred delivery time.
- **Real-Time Validation**: Provides immediate feedback on form fields to ensure data accuracy and completeness.
- **Submit Handler**: On form submission, the component simulates sending the data to a backend service using a mock API.

### Implementation
- **State Management**: Utilizes React `useState` to manage the form input values and validation states.
- **Validation Logic**: Includes functions to validate each form field, ensuring that all inputs meet the required criteria before allowing submission.
- **Mock API Integration**: Simulates form data submission to a backend using a mock API, demonstrating the form's interaction with external services.



