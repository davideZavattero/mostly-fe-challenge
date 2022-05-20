# Requirements

This challenge requires participants to build trivial version of CI/CD Pipeline dashboard. There should be two pages

 - Login page
 - Jobs page

### Login page
This should be a simple login page, with two fields, email and password. Before making login request, page needs to perform form validation.

 - Email field is required and should match email pattern (any valid email regex will go)
 - Password field is required

If fields are valid request should be sent. While user is waiting for response login button should be disabled, so user can't make consecutive requests while login is in progress. If credentials are correct user should be redirected to jobs page. If credentials are not correct appropriate message should be displayed.

### Jobs Page
This is a simple page that only has one table (without pagination). Each entry in the table represents a running job. Jobs have name, id and progress indicator. Table must display at least name and progress bar if it's in progress, or some green check-mark if it is completed (i.e progress field says 100)

Also there needs to be add job button. It will display a modal with only one text field for job name. This field is required. From this modal user can create new jobs. While creation is in progress button should be disabled. After job is created, close the modal and reflect the changes in the table.


# API Server

API server is under `api`. It contains binaries for different OS and CPU architectures. After running it server will generate `fake-db.json` file for storing the data. By default it generates a single user `admin@admin.com` with password `test`. Server has two options that can be specified via env variables

 - `DB` - it indicates json file name that will be used as database. By default it is `fake-db`
 - `PORT` - server port, by default it is `5335`

# API Endpoints

### POST /auth

Upon successful completion it returns JWT token that can be used for further requests

**Request Body:**

    {
        email: string;
        password: string;
    }

**Response Body:**

    {
	    token: string;
    }

### GET /me

It requires auth token provided by /auth endpoint. It must be provided in `Token` header.

It will return user details for given token

**Request headers**

    {
	    Token: string;
    }

**Response Body:**

    {
	    name: string;
	    email: string;
    }
