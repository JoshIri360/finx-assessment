# Next.js Basic Login Page

This repository contains a Next.js application developed as a job assessment test. The application serves as a basic login page where users can authenticate themselves. However, there's an issue encountered when hosting the application - it faces Cross-Origin Resource Sharing (CORS) errors while consuming the login API.

## Problem Description

The CORS error arises when attempting to access resources (in this case, an API) from a different origin (domain, protocol, or port) than the one the frontend is served from. While the API works flawlessly when tested locally, it fails when hosted due to CORS restrictions imposed by the browser. It's crucial to note that this issue isn't caused by any misconfiguration on your end; rather, it's a security measure implemented by browsers to prevent unauthorized access to resources.

## Solution Approach

Since the CORS error is not originating from your application, but rather from the API's server configuration, resolving it might require intervention at the server level where the API is hosted. Some potential solutions include:

1. **API Server Configuration**: The most straightforward solution is to configure the API server to allow requests from the domain where your Next.js application is hosted. This typically involves setting appropriate CORS headers on the server to permit cross-origin requests.

2. **Proxy Server**: You can set up a proxy server to forward requests from your Next.js application to the API server. This proxy server would act as an intermediary, making requests on behalf of your application. By doing so, you can bypass CORS restrictions enforced by the browser.

3. **Backend Middleware**: If you have control over the backend code of the API, you can implement middleware to handle CORS headers. This middleware can be configured to allow requests from specific origins, including the one where your Next.js application is hosted.

4. **Third-party Services**: Consider utilizing third-party services like CORS proxies or API gateways, which can help circumvent CORS issues by acting as intermediaries between your frontend and the API.

## Instructions for Local Development

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
   ```
   npm install
   ```
4. Start the development server with the following command:
   ```
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

## Known Issues
- CORS error encountered when attempting to consume the login API from the hosted application.

## Future Steps
- Communicate with the API provider to address the CORS configuration.
- Implement alternative solutions like proxying requests or utilizing third-party services if server-side configuration is not feasible.

## Contributing
Contributions to this repository are welcome. Please feel free to open an issue or submit a pull request with any improvements or fixes.

## License
This project is licensed under the [MIT License](LICENSE).