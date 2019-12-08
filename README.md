# create and view proposal simple backend and frontend

This is simple project for testing Restful API on proposal business.

1. Frontend: React.JS, UIToolKit - reactstrap
    This project is simple project and therefore there are only form operation and table operation.
    Reactstrap provides us smart and suitable UI components so I used it for building UI components.

2. Backend: Express.JS + Mongoose
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.

    Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

    MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

    Mongoose provides us suitable APIs that developers can do operations easily on mongodb database.

    Cause of these reasons, I chosen them.

## Prefer Tracking Time Tool
    Upwork Time Tracking Tool is good, I think.
    But If you prefer any tools for it, I will follow you.

## Functionality
    - Login/Logout:
        just mock users accounts(company_A, company_B, company_C, common app user)
        And they can login via their Facebook account.
        This part is just static part so any facebook account can be passed with selected user role.

    - Create Proposal
        If you logged in as User, you can create proposal to any company and that proposal will be sent the company.

    - View Proposal
        If you logged in as any companies admin, you can see the proposals users sent and reject and accept them.

    - Suitable URL & Layout management

## Prerequisites in 5 easy steps

1. Essential Environments: Node.js, Mongodb

2. Clone the repository <a href="https://github.com/ckrukp/node-react-restful" target="_blank">node-react-restful</a> from Github or ```git clone https://github.com/ckrukp/node-react-restful.git```

3. For frontend, please go to njord directory and run ```npm install```, For backend, please go to ap directory and run ```npm install``` 

4. Each of them, run ```npm start```

5. Run ```mongod``` to launch the MongoDB daemon and you should be set to go!

### New DB support

Added support and tested MongoDB on https://mlab.com/databases/odeum_api - new connection is in app.js and both the new and the old localhost connection is located in alternative_db.js

Check out the <a href="http://mongoosejs.com/" target="_blank">Mongoose documentation</a>.
