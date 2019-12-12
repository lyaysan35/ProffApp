## Link to hosted app:
https://react-proff.herokuapp.com/

## Project Description:
This web-app allows professionals with Russian language skills to register and provide contact details, along with their field and location. Users can then search for professionals by field and location. This will help Russian-speaking people who require professional services to get the help they need in their native language.

## Technologies used:
- React.js front-end
- semantic-ui-react library for styling the U.I.
- Python w/ Flask server-side
- PostgreSQL for the database

## Steps to Install & Run:
- First clone the repository:
	`git clone https://github.com/lyaysan35/ProffApp.git`

- Next, install the dependencies:
	`npm install`

- Now, run the app:
	`npm start`

## User Stories:
- As a Russian-speaking professional, I want to be able to register and enter my professional details and contact information, so that clients can find me and contact me.
- As a registered professional, I want to be able to edit or update my account information when I log in.
- As a registered professional, I want to have the ability to terminate my account after I have logged in.
- As a Russian-speaking user, I want to be able to search for a professional by a specific field of expertise and location, so that I can find the right professional for my needs.
- As a Russian-speaking user who needs professional services, I want to be able to browse through all professionals in the system.

## Model Relationship:
Description: There are two models in this application. 
- User: contains the basic, required fields for authentication: 
	- email
	- password
	- id.
- Professional: contains details related to a User's professional, public profile. These fields include: 
	- field
	- subfield
	- location
	- bio
	- contactInfo
	- id
	- userId (foreign key)
These two models are linked by inserting the User's id as a foreign-key in the Professional model, ass diagramed below:
`User <-- userId --> Professional`

## Future Features:
- Add Google Maps integration to allow users to visually browse Professionals by location
- Add ability for a user to send email or messages to a Professional in-app
- Add ability for users to leave reviews on Professionals' profiles

## Problem Solving:
- Simplify application model by combining the Professional and User models into a single model OR create a third Client model to allow users who are seeking services to register






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
