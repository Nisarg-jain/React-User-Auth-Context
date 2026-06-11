# React User Authentication Portal

A sleek, lightweight user authentication interface built using **React (Vite)**, the **React Context API** for global state management, and **Tailwind CSS** for modern utility-first styling. 

This project demonstrates a clean implementation of client-side authentication routing, secure state components, conditional rendering, and form input validation.

---

## 🚀 Features

* **Global State Management:** Utilizes React Context API (`useContext`) to manage user authentication sessions seamlessly across components without prop drilling.
* **Conditional Rendering:** Dynamically toggles between a modern Login Card view and a personalized User Dashboard view based on active session state.
* **Form Validation:** Built-in validation mechanism preventing submission on empty inputs for both username and password fields.
* **Sleek Modern UI:** Completely styled using **Tailwind CSS**, featuring high-contrast typography, interactive input focuses, subtle drop-shadow panels, and dynamic user avatar badges.
* **Semantic UX Elements:** Uses HTML5 form submissions allowing native features like hitting the `Enter` key to sign in.

---

## 🛠️ Tech Stack

* **Frontend Library:** React (Vite template)
* **State Architecture:** React Context API
* **Styling Engine:** Tailwind CSS

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Login.jsx               # Validated login form component
│   └── Profile.jsx             # Protected user dashboard view
├── context/
│   ├── UserContext.js          # Context initialization
│   └── UserContextProvider.jsx # Global state provider wrapper
├── App.jsx                     # Root layout with conditional routing
├── main.jsx                    # Entry point
└── index.css                   # Tailwind directives