
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
| `POST`  | /contact/  | create contact  |
| `GET`  | /contact  | fetch all contacts  |
| `GET`  | /contact/:id  | fetch a single contact by Id  |
| `PUT`  | /contact/:id  | Updates an existing contact by Id  |
| `DELETE`  | /contact/:id  | delete an existing contact by Id  |


## Contact App Structure
```bash
 ├── .gitignore
 ├── package-lock.json
 ├── package.json
 ├── Readme.md
 └─> src
     ├── app.js
     ├─> controllers
     │   └── contactController.js
     ├─> database
     │   ├── config.env
     │   └── setup.js
     ├─> models
     │   └── contact.js
     └─> routes
         └── contactRoutes.js
```


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
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
`dbURI`

Start the server

```bash
  npm run start
```
## Herouku App
The API is hosted on heroku.
[Click to view.](https://link-to-project)
  
### **Tech Stack**

***Server:*** Node, Express, 

***Database*** Mongodb