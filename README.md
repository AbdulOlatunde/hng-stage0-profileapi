**Profile API**

A simple RESTful API built with **Nodejs**, **Express.js**, and **TypeScript** that returns profile details and a random cat fact fetched from an external API.  
This project demonstrates API creation, environment variable management, and external API integration in a clean, maintainable structure.
## Features

- **GET /me** endpoint:
  - Returns a random cat fact from [Cat Facts API](https://catfact.ninja/fact)
  - Displays user profile information (name, email, and tech stack)
  - Includes a UTC timestamp in ISO 8601 format  
- Uses environment variables for configuration  
- Handles API errors gracefully  
- Cleanly structured with separate configuration, routes, and utilities

## Technologies Used

- **Node.js** — JavaScript runtime environment  
- **Express.js** — Web framework for Node.js  
- **TypeScript** — Strongly typed JavaScript  
- **Axios** — For making HTTP requests to the external API  
- **dotenv** — For environment variable management  
- **CORS** — To handle cross-origin requests

# Getting Started

### 1. Clone the Repository
git clone https://github.com/<your-username>/profile-api.git
cd profile-api

### 2. Install Dependencies
npm install

### 3. Create a .env File
Create a .env file in the root of your project directory and add the following configuration:
PORT=5000
USER_EMAIL=olatundeabdullah07@gmail.com
USER_NAME=Olatunde Abdullah
USER_STACK=Node.js/Express
CAT_FACT_API=https://catfact.ninja/fact

### 4. Run the API in Development Mode
npm run dev
This command starts the server with live reloading using ts-node-dev.

### 5. Build the Project
npm run build
This compiles the TypeScript source code into JavaScript inside the dist folder.

### 6. Start the Compiled Server
npm start
When successful, you should see output like this in your terminal:
Server running on http://localhost:5000

### API Documentation
### Endpoint: /me

### Method: GET
Fetches a random cat fact and displays my profile details.

### Example Of Request
GET http://localhost:5000/me

### Example Of Response 
{
  "status": "success",
  "user": {
    "email": "olatundeabdullah07@gmail.com",
    "name": "Olatunde Abdullah",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T12:45:23.456Z",
  "fact": "Cats have five toes on their front paws, but only four on their back paws."
}

### Response Codes
Code  Description             
200   Successful request      
500   Error fetching cat fact 

### Testing the Endpoint
You can test the /me endpoint using Postman.

### Using Postman

1. Open Postman

2. Set the request method to GET

3. Enter the URL: 
        http://localhost:5000/me
    
4. Click Send

5. You should see a JSON response similar to the example above


