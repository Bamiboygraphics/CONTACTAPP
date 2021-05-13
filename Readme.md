
# A Contact App

This is CRUD application with mongodb.

## Features
User can:
- Create contact
- Fetch contact(s)
- Update contact
- Delete contact


### Contact Data: 
    {Object: Name, Email, Phone, Country, Relationship}


## Routes
| Method  | URL | Description |
| :--- | :--- | :--- |
| `POST`  | /  | create contact  |
| `GET`  | /  | fetch all contacts  |
| `GET`  | /:id  | fetch a single contact by Id  |
| `PUT`  | /:id  | Updates an existing contact by Id  |
| `DELETE`  | /:id  | delete an existing contact by Id  |


## Contact App Structure
```bash
 ├── .gitignore
 ├── package-lock.json
 ├── package.json
 ├── Readme.md
 ├── .env
 └─> src
     ├── app.js
     ├─> controllers
     │   └── contactController.js
     ├─> database
     │   └── setup.js
     ├─> models
     │   └── contact.js
     └─> routes
         └── contactRoutes.js
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/Bamiboygraphics/CONTACTAPP.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
## Env Variables
To run this project, you will need to add the following environment variables to your .env file following the sample in the ```config.env``` file

`dbURI`, `PORT`

Start the server

```bash
  npm run start
```
## Herouku App
The API is hosted on heroku.
[Click to view.](https://bami-contact-app.herokuapp.com/)
  
### **Tech Stack**

***Server:*** Node, Express, 

***Database*** Mongodb