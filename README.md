# RiddleAI Frontend

React + Vite frontend for the RiddleAI application.

---

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- ESLint
- npm

---

## Project Structure

```text
frontend/my-react-app/
├── public/
├── src/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or newer
- npm (comes with Node.js)

Verify your installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Running the Development Server

Start the local development server:

```bash
npm run dev
```

Vite will display a local URL similar to:

```text
http://localhost:5173
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## Environment Variables

If the frontend communicates with a backend API, create a `.env` file in the project root.

Example:

```env
VITE_API_URL=http://localhost:8000
```

> **Note:** Only environment variables prefixed with `VITE_` are accessible inside the React application.

---

## Git

The following should **not** be committed:

- `.env`
- `node_modules`
- `dist`

The following **should** be committed:

- `package-lock.json`

---

## License

This project is licensed under the MIT License unless otherwise specified.
