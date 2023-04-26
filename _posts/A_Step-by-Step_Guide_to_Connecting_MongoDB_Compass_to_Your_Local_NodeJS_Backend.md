---
date: '2022-07-08T11:50:54.000Z'
title: >-
  A Step-by-Step Guide to Connecting MongoDB Compass to Your Local Node.js
  Backend
tagline: 'Nodejs, mongoDB'
preview: >-
  A Step-by-Step Guide to Connecting MongoDB Compass to Your Local Node.js
  Backend
image: >-
  https://images.unsplash.com/photo-1640017955477-75b58521007d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---
If you're a developer who works with MongoDB and Node.js, you know how important it is to have a reliable connection between the two. In this tutorial, we'll go through the process of connecting MongoDB Compass to your local Node.js backend. This guide is aimed at beginners who have a basic understanding of Node.js and MongoDB concepts. By the end of this tutorial, you'll have a fully functional connection between MongoDB Compass and your local Node.js backend.

Prerequisites:
Before we dive into the tutorial, here are a few prerequisites you'll need to have in place:

- MongoDB and Node.js installation and configuration.
- Basic understanding of Node.js and MongoDB concepts.

Create a Node.js Project:
The first step in connecting MongoDB Compass to your local Node.js backend is to create a new Node.js project. Follow these steps to get started:

1. Open your terminal and navigate to the directory where you want to create your project.
2. Run the command **`npm init`** to create a new Node.js project.
3. Install the required dependencies such as express, mongoose, and dotenv using the command **`npm install express mongoose dotenv`**.

Set Up a Local MongoDB Server:
Now that you have created a Node.js project, the next step is to set up a local MongoDB server. Here's how:

1. Download and install MongoDB Community Server from the official website.
2. Start the MongoDB server in the background using the command `sudo systemctl start mongod`

Connect Node.js with MongoDB using Mongoose:
With the local MongoDB server set up, it's time to establish a connection between Node.js and MongoDB using Mongoose. Follow these steps:

1. Create a new Mongoose schema and model for your data.
2. Use Mongoose to establish a connection to MongoDB using the command **`mongoose.connect()`**.
3. Create a new document and insert it into the database using the command **`model.create()`**.

Connect MongoDB Compass to Node.js:
Now that Node.js is connected to MongoDB, it's time to connect MongoDB Compass to Node.js. Here's how:

1. Download and install MongoDB Compass from the official website.
2. Open MongoDB Compass and connect to the local MongoDB server using the connection string **`mongodb://localhost:27017`**.
3. View the newly created database and collection in the MongoDB Compass interface.

Query Data with MongoDB Compass:
With MongoDB Compass connected to Node.js, you can now query data and view the results. Here are a few things you can do:

1. Use MongoDB Compass to query the database and view the results.
2. Explore various query options and features available in MongoDB Compass.

Conclusion:
Connecting MongoDB Compass to your local Node.js backend can seem daunting at first, but with this step-by-step guide, it's easier than you think. By following these steps, you'll have a fully functional connection between MongoDB Compass and your local Node.js backend. Remember to keep practicing and exploring the many features available in MongoDB Compass. If you're looking for further learning resources, check out the MongoDB documentation and the Node.js documentation.

**code**

```jsx
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

const uri = 'mongodb://localhost:27017/todo'; // replace "todo" with your database name
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    // perform database operations here
});

const server = app.listen(port, () => {
    console.log(`server is listening on ${port}`)
```

**conclusion**
In this blog, we have shown you how to connect MongoDB Compass to your local Node.js backend. By following the steps in this guide, you will be able to use MongoDB Compass to explore your database and make changes to your data.

**Note**: 

To check if the server is running use   `ps -alx | grep mongod` if the output is on a single line the server is not running, if it is on two lines then the server is running

To stop the server Use `sudo systemctl stop mongod`
