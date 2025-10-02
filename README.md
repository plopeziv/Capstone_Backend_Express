# <p align="center" style="padding-top:20px">Capstone REST API: A Fantasy Football Based API Written In Express </p>

## Project Overview

This repository contains the backend for a Fantasy Football capstone application. It is a **RESTful API** built with **Node.js** and **Express**, designed to be consumed by a React/Next.js frontend. The API connects to a local **PostgreSQL** database and uses **Swagger** for interactive documentation and route discovery.

The database is updated weekly using CSV data sourced from [hvpkod's](https://github.com/hvpkod/NFL-Data) NFL Data repository. While the database creator script is not included in this repository, a database dump can be provided upon request.

### Key Technologies

- **Node.js / Express** – Core REST API framework
- **PostgreSQL** – Local database
- **Swagger** – Interactive API documentation
- **dotenv** – Environment variable configuration

## Sports Sections Completed

- Fantasy Football

## Sports Section Under Development

- Soccer Standings & Statistics
- Professional Basketball

## Installation

This project is designed to work with Node.js version 20. Please use your preferred Node version manager to ensure you're using Node 20 before proceeding. To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```
   git clone https://github.com/plopeziv/Capstone_Backend_Express
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Run the Development Server**
   ```
   npm run start
   ```
   Open [http://localhost:3040](http://localhost:3040) with your browser to see the result.

## Credits

This project uses fantasy football data sourced from the CSV files maintained by **[hvpkod](https://github.com/hvpkod/NFL-Data)**. Their repository is updated weekly and serves as the foundation for populating the PostgreSQL database used in this API.

Many thanks to hvpkod for making this data publicly available and consistently maintained.
