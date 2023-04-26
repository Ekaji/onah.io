---
date: '2023-04-25T17:03:33.482Z'
title: How to host nodejs API on vercel
tagline: Nodejs
preview: How to host nodejs API on vercel
image: >-
  https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
---
Hosting Node.js apps on Vercel is a simple and straightforward process. Vercel is a cloud platform that provides a simple, scalable, and cost-effective solution for hosting Node.js applications. In this blog post, we will walk through the process of hosting a Node.js app on Vercel using a vercel.json file.

To demonstrate the process, we will create a simple Node.js app 

### **Prerequisites**

Before we get started, you will need the following:

- A Vercel account (if you don't have one, sign up for a free account **[here](https://vercel.com/signup)**).
- Node.js installed on your local machine.

### **Creating a Simple Node.js App**

Let's start by creating a simple Node.js app. Open your terminal and follow the steps below:

1. Create a new directory for your app:
    
    ```bash
    mkdir my-node-app
    cd my-node-app
    ```
    
2. Initialize a new Node.js project:
    
    ```bash
    npm init -y
    ```
    
3. Install the **`express`** package:
    
    ```bash
    npm install express
    ```
    
4. Create a new file called **`index.js`** and add the following code:
    
    ```jsx
    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
    
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server started on port 3000');
    });
    ```
    
    This code sets up a basic Express server that responds with "Hello, World!" when you visit the root URL (**`/`**).
    
5. Test your app by running the following command:
    
    ```bash
    node index.js
    ```
    
    Visit **`http://localhost:3000`** in your web browser to see the "Hello, World!" message.
    

### **Hosting Your Node.js App on Vercel**

Now that we have a working Node.js app, let's host it on Vercel using a vercel.json file.

1. Create a new file called **`vercel.json`** in the root directory of your project.
2. Add the following code to **`vercel.json`**:
    
    ```json
    {
      "version": 2,
      "name": "my-node-app",
      "builds": [
        { "src": "index.js", "use": "@vercel/node" }
      ],
      "routes": [
        { "src": "/(.*)", "dest": "/index.js" }
      ]
    }
    
    ```
    
    This code tells Vercel to use **`index.js`** as the entry point for your app, and to use the **`@vercel/node`** builder to build and deploy your app. The **`routes`** section tells Vercel to route all requests to **`index.js`**.
    
3. Commit and push your code to a Git repository.
4. Log in to Vercel and click the "Import Project" button.
5. Select your Git repository and follow the prompts to deploy your app.
6. Once your app is deployed, click the "Visit" button to see your app in action.

Congratulations! You have successfully hosted your Node.js app on Vercel using a vercel.json file.

### **Conclusion**

Hosting Node.js apps on Vercel is a quick and easy process. By using a vercel.json file, you can customize your deployment to suit your app's needs. Whether you are building a simple API or a complex web application, Vercel provides a powerful and flexible hosting solution.
