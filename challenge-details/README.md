# Requirements

This challenge requires participants to build trivial version of CI/CD Pipeline dashboard. There should be two pages

 - Login page
 - Jobs page

### Login page
This should be a simple login page, with two fields, email and password. Before making a login request, the page needs to perform form validation.

 - Email field is required and should match email pattern (any valid email regex will go)
 - Password field is required

If fields are valid, request should be sent. While user is waiting for the response login button should be disabled, so that the user can't make consecutive requests while login is in progress. If credentials are correct, the user should be redirected to the jobs page. If credentials are not correct, an appropriate message should be displayed.

### Jobs Page
This is a simple page that only has one table (without pagination). Each entry in the table represents a running CI/CD job. Jobs have name, id and progress indicator. The table should display at least the name and the progress bar if it is in progress, or some green check-mark if it is completed (i.e progress field says 100)

Also there needs to be an `Add Job` button. It will display a modal dialog with only one text field for the job name. This field is required. From this modal dialog, the user can create new jobs. While creation is in progress, the button should be disabled. After the job is created, the modal dialog should be closed and changes should be reflected in the table.


# API Server

The API server is under `api`. It contains binaries for different OS and CPU architectures. For your convenience, they can be directly started without any extra steps. After running it, the server will generate `fake-db.json` file for storing the data. By default it generates a single user `admin@admin.com` with password `test`. The server has two options that can be specified via env variables.

 - `DB` - it indicates json file name that will be used as database. By default it is `fake-db`
 - `PORT` - server port, by default it is `5335`

To manually test the endpoints, postman collection is provided in `postman_collection.json`

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

It requires auth token provided by `/auth` endpoint. It must be provided in the `Token` header.

It will return user details for the given token

**Request headers**

    {
	    Token: string;
    }

**Response Body:**

    {
	    name: string;
	    email: string;
    }

### GET /jobs

It requires auth token provided by `/auth` endpoint. It must be provided in the `Token` header.

It will return all available jobs

**Request headers**

    {
	    Token: string;
    }


**Response Body:**

    [
	    {
		    id: string;
		    name: string;
		    progress: number;
	    }
    ]

### POST /jobs

It requires an auth token provided by `/auth` endpoint. It must be provided in the `Token` header.

It will create a new job with the given name and return the new job object

**Request headers**

    {
	    Token: string;
    }


**Request Body:**

    {
        name: string;
    }

**Response Body:**

    {
	    id: string;
	    name: string;
	    progress: number;
	}

### GET /jobs/status/:jobId

It requires an auth token provided by the `/auth` endpoint. It must be provided in the `Token` header.

Returns progress for a given job

**Request headers**

    {
	    Token: string;
    }


**Response Body:**

    {
	    progress: number;
	}
