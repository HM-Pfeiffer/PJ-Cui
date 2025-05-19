# PJ Cui LLC - Agritrade Consulting Website

A professional website for PJ Cui LLC, an agricultural trade consulting company, built with modern web technologies.

## Overview

This single-page application (SPA) showcases the services, mission, and contact information for PJ Cui LLC. The website is designed to provide potential clients with a clear understanding of the company's agricultural consulting services while maintaining a professional and clean aesthetic.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Single-page application with smooth scrolling navigation
- Professional agricultural branding and color scheme
- Service showcase with Bootstrap icons
- Contact information and testimonial section
- Company mission and values presentation

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3
- Bootstrap Icons
- JavaScript (Vanilla)
- Flask (Python web framework for serving static files)

## Project Structure

```
├── assets/               # SVG and image assets
├── css/                  # CSS stylesheets
├── js/                   # JavaScript files
├── main.py               # Flask application for serving the website
├── index.html            # Main single-page application
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/username/pjcui-website.git
   cd pjcui-website
   ```

2. Install dependencies:
   ```
   pip install flask gunicorn
   ```

3. Run the application:
   ```
   gunicorn --bind 0.0.0.0:5000 main:app
   ```

4. Visit `http://localhost:5000` in your web browser to view the site.

## Deployment

The site is configured to run on any hosting platform that supports Python and Flask. It can be deployed on platforms like:

- Replit
- Heroku
- PythonAnywhere
- AWS
- Google Cloud Platform

## Contact

For inquiries about this project or to contact PJ Cui LLC directly:

- Email: pjcui.info@gmail.com
- Phone: (407)924-5053
- Address: 3500 Posner Blvd #1151, Davenport, FL 33837

## License

This project is proprietary and belongs to PJ Cui LLC. All rights reserved.