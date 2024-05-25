# React-Angular Dashboard


## Overview

React-Angular Dashboard is a web-based dashboard application that combines React and Angular to create a responsive and interactive dashboard with real-time data updates. The application integrates a React datatable into an Angular framework and utilizes WebSocket for handling asynchronous data calls.

- Author: Dwayne Zhang
- Created: 202405241815
- Updated: 202405241925

## Features

- **Responsive Layout**: The dashboard layout is designed to adapt to various screen sizes, providing a seamless experience on both desktop and mobile devices.
  
- **Real-time Data Updates**: WebSocket is used to facilitate real-time data updates, ensuring that the dashboard reflects the latest information without manual refresh.

- **Angular-React Integration**: The application demonstrates seamless integration between Angular and React, showcasing the flexibility of combining different frameworks within a single project.

## Technical Notes
- Real time data is being updated every 3 seconds with random age column.
- Loading indicator is shown for the empty data (Assume the socket properly ran and returns proper data)

## Setup Instructions

1. **Clone the Repository**: 
    ```bash
    git clone git@github.com:dwaynewyj/react-angular-dashboard.git
    cd react-angular-dashboard
    ```

2. **Install Angular Dependencies**:
    ```bash
    cd react-angular-dashboard
    npm install
    nvm install 18.19.0
    ```

   **Additional Dependencies**:
    ```bash
    npm install react react-dom @types/react @types/react-dom
    npm install --save-dev @babel/preset-react @babel/preset-env
    npm install --save react-web-component
    npm install rxjs
    ```

3. **Run the Web Socket Server**:
    ```bash
    cd ./websocket-server
    npm install
    node server.js
    ```
    Check that the server is logging the message "Sent to client ..." every 3 seconds.

4. **Run the Web Application**:
    ```bash
    cd react-angular-dashboard
    ng serve
    ```

5. **Open in Browser**:
    - Navigate to `http://localhost:4200/` in your browser to view the dashboard.
    - Server is ran on  `http://localhost:8080/` by default.

## Evaluation Criteria

- **Proficiency in Angular and React**: Demonstrated through the seamless integration of Angular and React components.
  
- **Effectiveness in Real-time Data Handling**: Evaluated based on the responsiveness of the dashboard to real-time data updates via WebSocket.

- **Code Quality and Documentation**: The project is expected to have clean, well-structured code with comprehensive documentation, including comments and setup instructions.

- **Problem-solving Abilities**: Assessing the ability to handle challenges such as WebSocket integration and responsiveness across different devices.

## Architectural Overview

The architecture of the Angular-React Dashboard is as follows:

- **Angular**: Provides the main framework for the application, including the layout and routing.
  
- **React**: Utilized for building the interactive data table component.
  
- **WebSocket**: Enables real-time communication for data updates, ensuring timely and efficient delivery of information to the dashboard.

This architectural design ensures modularity, scalability, and maintainability, allowing for easy extension and enhancement of the dashboard application.


### Potential Trade-offs and Concerns

1. **Complexity of Integration**: Integrating Angular and React in a single project introduces complexity, especially in managing state and communication between the two frameworks. This complexity may lead to increased development time and potential bugs.

2. **Performance Overhead**: Combining Angular and React may result in performance overhead due to the need for interoperability between the two frameworks. Optimizing the application is crucial to ensure smooth performance, especially with large datasets or on lower-end devices.

3. **Learning Curve**: Proficiency in both Angular and React is required for developers, which may necessitate additional training or resources. This could pose a challenge for new team members or those less familiar with either framework.

4. **Maintainability**: While offering flexibility, combining Angular and React can make the codebase harder to maintain over time. Changes to one framework may affect integration with the other, requiring careful coordination and testing.

5. **Tooling Compatibility**: Ensuring compatibility between various tools and libraries used in the project can be challenging. Regularly updating dependencies and testing for compatibility is essential to avoid issues.

### Tools to Enhance Integration and Efficiency

1. **Webpack Module Federation**: Enables dynamic loading of React components within an Angular application and vice versa, simplifying integration and lazy loading of components.

2. **ngReact**: Provides Angular directives for using React components, simplifying integration by offering a familiar Angular-style API.

3. **Storybook**: Facilitates UI component development in isolation, allowing for easier integration and ensuring component compatibility.

4. **RxJS for WebSocket Handling**: Leveraging RxJS for handling asynchronous data streams can improve code readability and maintainability, especially for WebSocket connections and data transformations.

5. **Linting and Code Formatting**: Tools like ESLint and Prettier help maintain code quality and consistency across Angular and React components, enforcing coding standards and best practices.
