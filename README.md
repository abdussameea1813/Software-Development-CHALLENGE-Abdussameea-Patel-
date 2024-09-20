# Book Inventory Management System

This project is a full-stack web application for managing a book inventory. It allows users to add new books, filter existing books based on various criteria, and export book data in JSON format.

## Features

- Add new books to the inventory
- Filter books by title, author, and genre
- Export book data in JSON format
- Responsive user interface
- RESTful API for CRUD operations

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: PostgreSQL
- ORM: node-postgres (pg)

## Database Schema

The database schema includes a table named `bookinventory` with the following columns:
- entry_id (SERIAL PRIMARY KEY)
- title (VARCHAR(255) NOT NULL)
- author (VARCHAR(255) NOT NULL)
- genre (VARCHAR(100))
- publication_date (DATE)
- isbn (VARCHAR(20) UNIQUE)

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/abdussameea1813/Software-Development-CHALLENGE-Abdussameea-Patel-
2. Set up the backend:
   cd server  # Navigate to the backend directory
   npm init -y
   npm install express pg cors
3. Set up the frontend:
   cd ../book-inventory-client  # Navigate to the frontend directory
   npx create-react-app .
   npm install bootstrap
4. Set up PostgreSQL:
   Install PostgreSQL if you have not already
   Create a new database for the project
5. Initialize the database:
   Open pgadmin4 and create the new database.
   Run the database query provided in database.sql to create the table.
6. Start the backend server:
   cd ../server
   node server.js
7. Start the frontend development server:
   cd ../book-inventory-client  # Navigate to the frontend directory again if needed
   npm start
   
