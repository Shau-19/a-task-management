To setup and run the application, follow these steps:
1. Install the dependencies by running `npm install` or `yarn install`.
2. Create a new file named `.env` and add your MongoDB connection string and port number.
3. Start the application by running `npm start` or `yarn start`.
4. Open a web browser and navigate to `http://localhost:3000/graphql` to access the GraphQL API.
Examples:
- Query a user: `GET /graphql?query={user(id:\"123\") { id name }}`