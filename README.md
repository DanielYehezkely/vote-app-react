# React Voting Application  <img src="/public/assets/icons/favicon.ico" alt="App Icon" width="40" height="40"> 

| Username       | Password    |
| -------------- | ----------- |
|admin - 'daniel@example.com'          | 6431 | 
|user - 'elad@example.com'        | 7623 |
|user - 'jimmy@example.com'        | 2422   |

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Advanced Features](#advanced-features)
7. [Challenges Faced](#challenges-faced)
8. [Known Bugs](#known-bugs)
9. [Review](#review)
10. [Links](#links)

## Overview

The React Voting Application is a web-based app designed to facilitate a simple voting system. Users can log in, cast their vote for their favorite candidate, and view real-time voting statistics. Admin users have additional capabilities to monitor the overall voting status and manage users.

## Features

### Core Requirements:
1. **Basic Application Setup**
   - Built using React with pages for Login, Voting, and Admin functionalities.
   - Utilizes HTML, CSS, JavaScript, and React.

2. **Data Management**
   - Uses MockAPI for backend data storage and management.
   - Implements a spinner for indicating server requests to enhance user experience.

3. **Conditional Page Rendering**
   - Uses React Context to manage page rendering based on user type and state.
   - No use of React Router; navigation is handled through conditional rendering and context.

4. **Login Page**
   - User authentication form with email and password validation against MockAPI.
   - On successful login, users are redirected to the Voting Page.

5. **Voting Page**
   - Displays user's name and candidate options (e.g., cats, dogs, cows, lions).
   - Persistent vote tracking ensures users can vote and change their vote.
   - Provides "change vote" and "done" buttons for user interaction.

6. **Admin Page**
   - Admins can view all users and their voting statuses in a tabular format.
   - Displays total votes for each candidate and includes a logout option.

7. **UI and UX Enhancements**
   - Utilizes `Toastify` for notifications (e.g., login errors, vote confirmation).
   - Provides a toggle for dark and light mode using React Context.

### Advanced Optional Tasks:
1. **Dark Mode Feature**
   - Users can switch between light and dark themes, enhancing visual comfort.

2. **Statistics with Chart.js**
   - Admin Page includes graphical representations of voting statistics using Chart.js.
   - Data is displayed in different chart types to provide visual insights.

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: MockAPI for user and vote data storage
- **Libraries**: Axios, Toastify, Chart.js
- **State Management**: React Context and Custom Hooks

## Setup and Installation

To set up and run the project locally, follow these steps:

1. Clone the repository from GitHub.
   - Open your terminal or command prompt.
   - Run the command: `git clone https://github.com/your-username/react-voting-app.git`

2. Navigate to the project directory.
   - Use the command: `cd react-voting-app`

3. Install the necessary dependencies.
   - Run the command: `npm install`

4. Start the development server.
   - Run the command: `npm start`

5. Open the app in your web browser.
   - Visit: `http://localhost:3000`

## Usage

1. **Login:**
   - Enter your email and password to log in. If the credentials match those in MockAPI, you'll be redirected to the Voting Page.
   - Notifications will inform you about successful logins or errors.

2. **Voting:**
   - On the Voting Page, choose a candidate and cast your vote.
   - You can change your vote until you finalize it.
   - The application tracks votes persistently and reflects changes in real-time.

3. **Admin Functions:**
   - Admins can view all user votes and see aggregate statistics.
   - The Admin Page features detailed charts showing voting distributions.

4. **Theme Toggle:**
   - Switch between dark and light modes to suit your preference.

## Advanced Features

### Dark Mode
- Users can toggle between light and dark modes, enhancing the application's accessibility and user comfort.

### Voting Statistics
- Real-time voting statistics are displayed graphically using Chart.js, making it easy to analyze the voting trends.

## Challenges Faced

1. **Conditional Rendering Without React Router:**
   - Managing page transitions and state with React Context instead of using React Router required careful planning and implementation.

2. **MockAPI Integration:**
   - Handling asynchronous data fetching and state updates smoothly to ensure a responsive user experience.

3. **Persistent State Management:**
   - Implementing state persistence to keep track of user votes and their session information effectively.


## Review

This project was a significant learning experience in React development, particularly in handling complex state management and API interactions. Using MockAPI provided a practical way to simulate backend interactions, and implementing advanced features like dark mode and Chart.js for statistics visualization added valuable depth to the application. Future improvements could focus on refining the user experience and addressing known bugs.

## Links

- **GitHub Repository**: [React Voting App](https://github.com/DanielYehezkely/vote-app-react)
- **Live Deployment**: [Netlify Link](https://dyz-vote-app-react.netlify.app/)

---

### Screenshots



![Login Page](/public/assets/images/login-page.png)
***
![Voting Page](/public/assets/images/voting-page.png)
***
![Admin Table Page](/public/assets/images/admin-table.png)
***
![Admin chart Page](/public/assets/images/admin-chart.png)