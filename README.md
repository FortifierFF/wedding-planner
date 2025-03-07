# Wedding Planner Website

A comprehensive wedding planner website that offers essential planning tools, vendor directories, registry integration, mobile accessibility, inspiration galleries, and RSVP management.

## Features

-   **User Authentication & Authorization**

    -   Secure user registration and login
    -   Role-based access control (Admin, User, Vendor)

-   **Comprehensive Planning Tools**

    -   Budget Calculator
    -   Guest List Manager
    -   Seating Arrangement Planner
    -   Timeline Scheduler

-   **Vendor Directories**

    -   Searchable directory of vendors
    -   Vendor profiles with reviews, pricing, and contact information
    -   Rating and review system

-   **Registry Integration**

    -   Create and manage gift registries
    -   Integration with third-party retailers
    -   Guest gift purchasing

-   **Mobile Accessibility**

    -   Responsive design
    -   Optimized performance

-   **Inspiration Galleries**

    -   Curated collections of photos, articles, and real wedding stories
    -   Search and filter functionalities

-   **RSVP Management**
    -   Digital RSVP capabilities
    -   Meal preferences, song requests, and other notes
    -   Sync with guest list manager

## Technologies Used

-   **Frontend**

    -   Next.js 15
    -   Tailwind CSS & shadcn
    -   Axios for HTTP requests
    -   Zod for validations

-   **Backend**
    -   NextAuth 5 for authentication
    -   NeonDB with Drizzle ORM for PostgreSQL
    -   Hosted on Vercel

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm (v9 or higher)

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/wedding-helper.git
    cd wedding-helper
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:

    ```
    DATABASE_URL=your_neondb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000
    ```

4. Run the development server

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
