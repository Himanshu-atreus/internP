Authentication App

This project is a simple authentication application with login, register, and logout functionalities.
It is built using React and Context API to manage user authentication state.

Technologies Used

Frontend

React: A JavaScript library for building user interfaces.
Context API: A React feature for state management.
Local Storage: A web storage mechanism to store user session data.

Backend

Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express: A minimal and flexible Node.js web application framework.
MongoDB: A NoSQL database for storing user data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
JWT: JSON Web Tokens for user authentication. 

Instructions to Successfully run the Application 

-Install all the following dependencies 

expressjs ,
react-router-dom ,
cors , 
scss , 
etc

-Create .env file in Backend to store the DATABASE_URL , CLIENT URL and JWT_TOKEN 

-I have used Prisma ORM to make the project more flexible the application is 
made with respect to mySql as database ( You can shift to your desired one just read the documentation and perform little chnages in the schema ) 

-Install prisma@client 

-Keep in mind to perform the operation ( npx prisma db pull ) whenever you make any change in the schema 




