# Description
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


**urlSmall** is a open source url shortener designed with the MEAN stack (MySQL/ExpressJs/Angular/Nodejs). This project can be hosted on a local or online server.

# Usage 
1. Clone the repository with 
```sh
$ git clone https://github.com/ngahane/urlSmall.git
```

2. In the **project folder**, execute this command
```sh
$ npm start
```

3. In the **app** folder of the project, execute this command
```sh
$ npm start
```

4. Create a **mysql** database and import the file **urlSmall.sql** into it

5. Change the database connection information in the file **.env**
By default this information is **database->mysql**:
- **host : 127.0.0.1**
- **port : port**
- **db : urlSmall**
- **user : urlSmall**
- **password : urlSmall**


# Start backend nodejs
6. Execute this command in **the project folder** to start the nodejs server.
```sh
$ npm start
```

# Start fronted angular
7. Execute this command in the **app** folder of the project to start the angular fronted
```sh
$ ng serve
```
# Screenshot of urlSmall
![Screenshot](https://github.com/ngahane/urlSmall/blob/master/screenshot.png "urlSmall screenshot")

# Production mode
If you want to go into production, change 
- the ip address of the server located in **app->src->app->helpers->server.ts**.
- the port in **server.js** and **app->src->app->helpers->server.ts**. The ports must be identical
