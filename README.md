MyTour is a user-friendly, cost-saving hotel booking and management system.


## Getting Started

### Prerequisites

Make sure you have node and oracle installed in your device.

**`Node.js`**: Install Node.js from [here](https://nodejs.org/en/download/)

**`Oracle`**: Install Oracle from [here](http://www.oracle.com/index.html) and register for an account of your own


### Getting the repository

1. Clone the repo or download zip.

### Setting up Node

1. Go to the repository directory and open terminal.

2. Install packages

    ```sh
    npm install
    ```
   This will install all the required packages for this project.

#### Setting up Oracle

1. Open SQL Plus

2. Enter credentials

   ```sh
   username: sys as sysdba
   password: password
   ```

3.  Create a new user named c##touron

    ```sh
    create user c##touron identified by touron;
    grant all privileges to c##touron;
    ```

#### Setting up the Database

1. Connect to oracle as c##touron in SQL Plus

2. Copy and paste from dumpSQL/SQLdump.sql and run.
    ```sh
   @SQLdump;
    ```

3. Check for errors.

#### One last step

1. Now that everything is set, open terminal in the base directory of the repo.

2. Run the Backend server

    ```sh
    node app 
    ```
    
3. Run the frontend server
    
    ```sh
    npm start 
    ```


