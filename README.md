# V20next9Keepalive

This project was generated using [Angular CLI](https://github.com/angular/angular-cli).

## HTTP Keepalive Demo Application

### Purpose
This application demonstrates the performance difference between using HTTP keepalive (persistent connections) and not using it (closing the connection after each request).

### How it Works
The application consists of two parts:
1.  A simple Node.js server (`server/server.js`) that exposes two endpoints:
    *   `/keepalive`: Responds to requests while keeping the TCP connection open.
    *   `/no-keepalive`: Responds to requests and then explicitly closes the TCP connection.
2.  An Angular frontend application that allows you to send a configurable number of requests to both of these endpoints and measures the total time taken for each scenario.

By comparing the time taken to complete the same number of requests to both endpoints, you can observe the overhead of establishing new TCP connections for each request when keepalive is not used.

### Running the Application
1.  **Start the Node.js Server**:
    Open a terminal and run the following command from the project root:
    ```bash
    npm run server
    ```
    The server will start on `http://localhost:3000`.

2.  **Start the Angular Application**:
    Open another terminal and run the following command from the project root:
    ```bash
    npm start
    ```
    The Angular development server will typically start the application on `http://localhost:4200`. Open this URL in your browser.

3.  **Use the Demo**:
    *   Enter the number of requests you want to send.
    *   Click "Run Keepalive Test" to send requests to the `/keepalive` endpoint.
    *   Click "Run No Keepalive Test" to send requests to the `/no-keepalive` endpoint.
    *   Observe the time difference reported for both tests.
    *   Read the "About HTTP Keepalive" section in the app for more details.

## Development server (Angular App)

To start a local development server for the Angular application, run:

```bash
ng serve
```
Alternatively, you can use `npm start` as mentioned above. Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
