# Tour Bazz

Welcome to Tour Bazz! Tour Bazz is a comprehensive tour website where users can add, view, and search for tourist spots using country names. Explore exciting destinations and plan your next adventure with ease.
LiveLink : https://tourbuzz.netlify.app/
## Features

- **Add Tourist Spots**: Users can contribute by adding new tourist spots.
- **View Tourist Spots**: Browse and view detailed information about various tourist spots.
- **Search by Country**: Easily find tourist spots by searching for specific countries.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/tour-bazz.git
    cd tour-bazz
    ```

2. **Install dependencies**:
    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4. **Start the development server**:
    ```bash
    # For backend
    cd backend
    npm start

    # For frontend
    cd ../frontend
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Adding Tourist Spots

1. Log in to your account.
2. Navigate to the "Add Tourist Spot" section.
3. Fill in the details of the new tourist spot and click "Add".

### Viewing Tourist Spots

1. Browse the homepage to see featured tourist spots.
2. Click on a tourist spot to view detailed information.

### Searching by Country

1. Use the search bar to enter the name of a country.
2. View the list of tourist spots available in that country.

## Contributing

We welcome contributions to the project! Here are some ways you can contribute:

- Report bugs and issues
- Suggest new features
- Submit pull requests with improvements

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need further assistance, feel free to reach out to us at [email@example.com](mailto:email@example.com).

---

Thank you for using Tour Bazz! We hope you discover amazing places and have wonderful travels.

