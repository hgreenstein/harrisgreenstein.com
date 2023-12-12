# [harrisgreenstein.com](https://harrisgreenstein.com)
Full stack portfolio website created by Harris Greenstein using: PERN full stack (PostgreSQL, Express, React, Node.js) + Docker, NGINX and HTML/CSS/JavaScript

## Introduction

HarrisGreenstein.com is a full-stack portfolio website showcasing the work of Harris Greenstein. It's built using the PERN stack (PostgreSQL, Express, React, Node.js), complemented with Docker, NGINX, and standard web technologies like HTML, CSS, and JavaScript.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Containerization**: Docker
- **Web Server**: NGINX

## Installation: 

### Requirements

Before starting, ensure you have the following software installed:

- **Docker**: Used for running the application in containers.
- **Node.js**: Required for running the Node.js application.
- **NPM (Node Package Manager)**: Used for managing Node.js packages.
- **Git**: Necessary for version control and managing source code.

Note: The installation of **PostgreSQL** and **NGINX** is not required. PostgreSQL runs within a Docker container, and NGINX is managed through Docker configurations.

### Environment Configuration

To properly configure the environment for the project, you need to set up environment files. These files will contain sensitive information and configurations required for the application to run.

#### Creating the `.env` File

1. **In the Root Directory**:
   Create a file named `.env` in the root directory of your project.

2. **Adding Database Credentials**:
   Inside the `.env` file, add the following line to set your database password:
```bash
DB_PASSWORD={YourDatabasePassword}
```
Replace `{YourDatabasePassword}` with the actual password for your database.

## NGINX Configuration for Development

The project uses NGINX for serving the application. There are two different NGINX configuration files:

1. **default.conf**: Used for the server setup with ssl certificates in production.
2. **defaultDev.conf**: Used for local server without certificates for testing locally with full backend

   -  When using `defautlDev.conf` first rename the production version to something like `defaultProduction.conf` and then rename the development version to just `default.conf`

### SSL Certificates

To use SSL certificates in your development environment:

1. **Obtain SSL Certificates**:
   You need to have a private key and a certificate from a Certificate Authority (CA). These files are typically named `privateKey.pem` (for the private key) and `cert.pem` (for the certificate).
   
3. Place your SSL certificate and private key in the `/client/src/assets/cert` folder.
   - The private key should be named `privateKey.pem`.
   - The SSL certificate should be named `cert.pem`.

#### Setting Up NGINX with SSL

1. **Edit the NGINX Configuration**:
   Open `default.conf` and modify the server block to include the SSL certificate and key locations.

   ```nginx
   server {
       listen 443 ssl;
   
       server_name your_domain.com;
       http2 on;
       ssl_certificate /path/to/your/cert.pem;
       ssl_certificate_key /path/to/your/privateKey.pem;

       # Other configuration settings...
   }
### Docker Setup and Database Initialization

The application uses Docker for containerization, simplifying the setup and deployment process. The PostgreSQL database is configured to automatically initialize with tables defined in the `/database/database.sql` [file here](/database/database.sql).

#### Docker Compose Files

There are two Docker Compose files provided:

- `docker-compose-development.yml`: Used for development. Rename this file when using it for development purposes.
- `docker-compose.yml`: Used for production. This file exposes ports 80 and 443, which are typically not exposed locally.

Ensure to rename the appropriate Docker Compose file when using it for development.

#### Resetting the Database

To reset the database and re-initialize it (for example, after making changes to the `database.sql` file), follow these steps:

#### Bring Down the Containers with Volumes

Use the `-v` flag with `docker-compose down` to remove the data volumes. This ensures that the database is completely reset.

```bash
docker-compose down -v
```

#### Rebuild and Run

Re-run the `docker-compose up --build` command to rebuild the containers and re-initialize the database.

```bash
docker-compose up --build
```

#### Note on Database Configuration

- The `database.sql` file should contain all necessary SQL commands to set up your database schema, including table creation and initial data insertion if needed.
- Ensure that your Docker configuration correctly references this file for initializing the PostgreSQL container.

## Vite and Rollup

This project is created with React + Vite for easy hot module replacement and web rollup. 

### Rollup:
By default, the website will rollup as part of the docker build process and put all files in a `dist` folder in the root directory, this is the version that will run in docker when you run with the backend

#### Trigger manual build

If at any time you need to try to build your website will rollup outside of the docker process, you can always go into the client folder and manually build it

```bash
cd /path/to/website
cd client/
npm run build
```

### Hot Module Replacement:

To use the website with hot module replacement, run the `npm run dev` command in the client folder
```bash
cd /path/to/website
cd client/
npm run dev
```
#### Note: No database values will be avalible in this form, for development it may be useful to make a development version of data
See the [AboutDev Component](/client/src/components/About/AboutDev.jsx) and the [mock about cards](/client/src/components/About/mockAboutCards.js) for an example of how to do this for hot module replacement
