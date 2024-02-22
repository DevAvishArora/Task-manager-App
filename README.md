# Task Manager App
This is a simple task management application built with React for the frontend, Express.js for the backend, and SQL database for data storage.

Installation
To run this application locally, follow these steps:

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/task-manager-app.git
Navigate to the project directory:

bash
Copy code
cd task-manager-app
Install dependencies for both the frontend and backend:

bash
Copy code
## Navigate to the frontend directory
cd frontend
npm install

## Navigate to the backend directory
cd ../backend
npm install
Setup
Backend (Express.js)
Set up your SQL database (e.g., PostgreSQL) and ensure you have the necessary credentials to connect to it.

Create a .env file in the backend directory and add the following environment variables:
![image](https://github.com/DevAvishArora/Task-manager-App/assets/138298644/0d98abde-9a70-487d-ad26-09f7d1bf0767)

plaintext
Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
Run the backend server:

bash
Copy code
cd backend
npm start
The backend server should now be running on http://localhost:5000.

Frontend (React)
Ensure the backend server is running.

In the frontend directory, create a .env file and add the following environment variable:

plaintext
Copy code
REACT_APP_API_URL=http://localhost:5000/api
Run the frontend application:

bash
Copy code
cd frontend
npm start
The frontend should now be accessible at http://localhost:3000.

Usage
Open the frontend application in your browser and start managing your tasks.
You can add new tasks, mark tasks as completed, and delete tasks as needed.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have any suggestions for improvements.

License
This project is licensed under the MIT License.
