
Personal Expense Tracker Web Application

Overview: The Personal Expense Tracker is a web application designed to help users manage and track their expenses efficiently. Users can securely log in, add                              expenses, categorize them, and view all their financial records in a responsive and user-friendly interface.

Features:
                User Authentication: Secure login and registration system.
                Expense Management: Add, view, update, and delete expenses.
                Expense Categories: Categorize expenses to simplify tracking.
                Responsive Design: Optimized for both desktop and mobile devices.
                Search Functionality: Quickly find expenses by category or date.

Technologies Used:
               
               Frontend: HTML5, CSS3, JavaScript
               Backend: Node.js, Express.js
               Database: MySQL
               Environment Variables: dotenv
               Deployment: Render

Setup and Installation:

1. Clone the Repository

               git clone https://github.com/yourusername/ExpenseTracker.git
               cd ExpenseTracker

2. Install Dependencies: Install the required Node.js packages

               npm install

3. Set Up Environment Variables: Create a '.env' file in the root directory and configure the following variables

                DB_HOST=your-database-host
                DB_USER=your-database-user
                DB_PASSWORD=your-database-password
                DB_NAME=your-database-name

4. Initialize the Database: Import the database schema into your MySQL database using the following command

               mysql -u <your-username> -p expense_tracker < schema.sql

5. Run the Application: Start the server locally

               npm start
    
    The app will be available at http://localhost:3000.


Deployment:

This application is deployed on Render. You can access the live version here 







