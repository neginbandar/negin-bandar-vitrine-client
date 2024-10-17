# Project Title

**_Vitrine_**

## Overview

**_Vitrine_** is a mobile app designed to empower bloggers and content creators by providing them with a storefront for affiliate marketing. The platform enables users to showcase products, save links, and curate wish lists, creating a seamless shopping experience for their audience.

### Problem Space

Many bloggers and content creators currently promote products through various platforms that lack the functionality to store links or allow users to create wish lists. This leads to lost opportunities for engagement and sales, as users cannot easily track or revisit the products they are interested in. Vitrine addresses these pain points by offering a dedicated space for creators to organize their affiliate products, thereby enhancing user experience and boosting sales potential.

### User Profile

**_Vitrine_** has two primary user profiles:

**1. Content Creators :** Bloggers and influencers who post about products. They will use the app to create and manage their storefronts, post product links, and engage with their audience through curated lists.

**2. Regular Users :** Shoppers and fans of content creators who explore products and make purchases. They will use the app to browse, save products to wish lists, and track affiliate links for easy access.

### Features

- User login : Separate sign-up and login for creators and users.
- Creator Profile: A centralized area for creators to add products, manage links, and view analytics on user saves and likes.
- Product Listings: An organized view of products showcased by creators, complete with descriptions, images, and affiliate links.
- Wish List Functionality: Users can save products they are interested in for future reference.
- Search and Filter Options: Users can easily search for specific products or filter by categories.
- Social Sharing: Ability for users to share their wish lists or favorite products on social media.

## Implementation

### Tech Stack

- React
- JavaScript
- Bootstrap
- Node.js with Express
- MySQL for database management
- Client Libraries:
  - React Router for navigation
  - Axios for API requests
- Server Libraries:
  - Knex for SQL query building
  - Express for server setup

### APIs

List any external sources of data that will be used in your app.

- TBD

### Sitemap

- Sign up / Login
  - Creator / Store Profile
  - Product Page
  - Product Upload Page
- User side
  - User/ Shoppers Home Page (Search bar)
  - Feed
  - Wish List Page

### Mockups

- Login Page:

![Mokup-Vitrine-LoginPage](./src/assets/mockups/Login%20Page.svg)

- Creator Profile Page:

![Mokup-Vitrine-Creator Profile Page](./src/assets/mockups/Creator%20Profile.svg)

- Product Page:

![Mokup-Vitrine-Product Page](./src/assets/mockups/Product%20Page.svg)

- Product Upload Page:

![Mokup-Vitrine-Product Page](./src/assets/mockups/Product%20Upload%20page.svg)

- User/ Shoppers Home Page:

![Mokup-Vitrine-Shopper Home Page](./src/assets/mockups/User%20Home%20Page.svg)

- Feed:

![Mokup-Vitrine-Feed](./src/assets/mockups/User%20Feed.svg)

- Wish List Page:

![Mokup-Vitrine-Wish List Page](./src/assets/mockups/User%20Wishlist.svg)

- **_User Flow_**

![Mokup-Vitrine-userflow](./src/assets/mockups/Userflow_1.svg)

![Mokup-Vitrine-userflow](./src/assets/mockups/Userflow_2.svg)

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

- TBD

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- POST/posts
- GET /posts/:id
- POST/users/:id/wishlisht/:id
- DELETE/users/:id/wishlist/:id

- More TBD

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

---

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

Notifications: Alerts for users when products on their wish lists go on sale or are featured by their favorite creators.
