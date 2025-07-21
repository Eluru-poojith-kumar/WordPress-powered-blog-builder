# wordPress-Based Blog Site Builder

This project is a modern WordPress-powered blog builder that includes:

- A custom WordPress theme for clean, responsive blog layouts
- A React.js dashboard that communicates with WordPress REST API
- Easy content creation using Gutenberg blocks
- Light/Dark mode toggle in the dashboard
- SEO-ready, mobile-friendly design

---

 Screenshots

React Dashboard Screenshot : <img width="1878" height="912" alt="image" src="https://github.com/user-attachments/assets/cb5a03f0-3408-427f-9d74-562fb214cef5" />
Termianl : <img width="661" height="387" alt="image" src="https://github.com/user-attachments/assets/a88d7d81-22c7-4787-a89a-851475057501" />
Wp dashboard: <img width="1212" height="498" alt="image" src="https://github.com/user-attachments/assets/889269a2-d018-465b-a6c2-d206d541e988" />



---

# Tech Stack

- PHP, HTML5, CSS3, JavaScript
- WordPress (custom theme + Gutenberg support)
- React.js (dashboard interface)
- WordPress REST API
- Git & GitHub (version control)

---

##  Features

-  Custom WordPress blog theme with clean layout
-  Gutenberg block components (extendable)
-  Mobile-first responsive design
-  Light/Dark mode in React dashboard
-  Real-time post data via REST API
-  SEO-optimized and performance-friendly

---

  ##  Folder Structure

  wp-blog-site-builder/
│
├── dashboard-app/ → React app (create-react-app)
│ ├── public/
│ ├── src/
│ └── .env → REACT_APP_API_URL config
│
├── wp-theme-blog/ → WordPress custom theme
│ ├── index.php
│ ├── functions.php
│ ├── style.css
│ └── ...etc



##  Setup Instructions

# 1. WordPress Custom Theme

1. Copy the `wp-theme-blog/` folder into:
/wp-content/themes/wp-theme-blog/
2. Go to `http://your-local-site/wp-admin`
3. Go to **Appearance → Themes → Activate** your custom theme
4. Add a few posts under **Posts → Add New**

# 2. React Dashboard App

1. Navigate to `dashboard-app/` folder:

cd dashboard-app
Install dependencies:

npm install
Create a .env file and set your WordPress REST API URL:

REACT_APP_API_URL=http://poori.local/wp-json/wp/v2
Replace poori.local with your actual local WordPress URL.

Start the app:


npm start
Open in browser:

http://localhost:3000


 Customization
Edit styles in wp-theme-blog/style.css or dashboard-app/src/index.css

Add Gutenberg block support in functions.php

Extend the React dashboard UI (components, post editor, etc.)

Connect with login/auth endpoints if needed

Useful WordPress REST API Endpoints
Posts: /wp-json/wp/v2/posts

Pages: /wp-json/wp/v2/pages

Categories: /wp-json/wp/v2/categories

 License
This project is open-source and available under the MIT License.

 Credits
WordPress (https://wordpress.org)

React (https://react.dev)

Create React App

REST API Docs (https://developer.wordpress.org/rest-api/)



Authotr 

Eluru Poojith Kumar Reddy




