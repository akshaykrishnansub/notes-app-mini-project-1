# Notes App

A full-stack Notes Management Application built with **Next.js**, **MongoDB**, and **Mongoose**. This project allows users to create, view, update, and delete notes through a clean and responsive interface.

## Features

* Create new notes
* View all notes
* Update existing notes
* Delete notes
* MongoDB database integration
* Responsive UI with Tailwind CSS
* RESTful API using Next.js Route Handlers
* Real-time UI updates after CRUD operations

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Next.js Route Handlers
* Node.js

### Database

* MongoDB
* Mongoose

## Project Structure

```bash
app/
├── api/
│   └── notes/
│       ├── route.js
│       └── [id]/
│           └── route.js
├── page.js

lib/
├── db.js
└── models/
    └── Note.js
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:3000
```

## API Endpoints

### Create Note

```http
POST /api/notes
```

Request Body:

```json
{
  "title": "My First Note",
  "content": "This is a sample note."
}
```

### Get All Notes

```http
GET /api/notes
```

### Update Note

```http
PUT /api/notes/:id
```

Request Body:

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

### Delete Note

```http
DELETE /api/notes/:id
```

## Screenshots

Add screenshots of your application here.

### Home Page

```text
Insert Screenshot
```

### Notes List

```text
Insert Screenshot
```

## Learning Outcomes

Through this project, I gained hands-on experience with:

* Next.js App Router
* Route Handlers
* MongoDB integration
* Mongoose Models and CRUD operations
* React Hooks (`useState`, `useEffect`)
* Client-side data fetching
* REST API development
* Error handling and debugging

## Future Improvements

* User Authentication
* Search Notes
* Pagination
* Categories and Tags
* Rich Text Editor
* Dark/Light Theme Toggle
* Note Archiving

## Author

Akshay Krishnan

GitHub: https://github.com/akshaykrishnansub

## License

This project is licensed under the MIT License.
