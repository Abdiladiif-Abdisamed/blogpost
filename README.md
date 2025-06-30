# BlogPost React App

BlogPost is a modern web app that lets you create, read, search, delete, and edit blog posts. It includes authentication (SignUp/Login), a dashboard, and a beautiful UI built with TailwindCSS.

---

## Features

- **User Authentication:** Register, login, and logout – user data is stored in localStorage.
- **CRUD Posts:** Add, read, edit, and delete posts.
- **Search:** Quickly search for posts.
- **Protected Dashboard:** Only authenticated users can access the dashboard.
- **Post Detail:** Click a post to view its details (PostDetail).
- **Responsive Design:** Modern UI that works on both mobile and desktop.
- **Route Protection:** Uses React Router v6+ and the ProtectedRoute pattern.
- **Professional Footer & UX:** Clean footer and user feedback.

---

## Usage

1. **Clone the repo:**
   ```bash
   git clone <https://github.com/Abdiladiif-Abdisamed/blogpost.git>
   cd BlogPost
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## Folders & Files

- `src/Home.jsx` – Home page, posts list & search
- `src/Posts.jsx` – Posts CRUD logic
- `src/PostDetail.jsx` – Post detail view
- `src/Dashboard.jsx` – Dashboard layout
- `src/Login.jsx` & `src/SignUp.jsx` – Authentication
- `src/PostContext.jsx` – Posts context (state management)
- `src/routes.jsx` – App routes (React Router)
- `src/About.jsx` – About page

---

## Tips

- **New user:** Register to access the dashboard.
- **Posts:** Add, edit, or delete posts.
- **Search:** Use the search bar to find specific posts.
- **Security:** Passwords are stored in localStorage (for demo purposes only).

---

## Credits

- **Developer:** Abdiladiif & Team
- **UI:** TailwindCSS
- **Framework:** React

---

## License

This project is for educational/demo purposes.

---

**Enjoy blogging! 🚀**