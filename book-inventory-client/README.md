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
   git clone <repository-url>