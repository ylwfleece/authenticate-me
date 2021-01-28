## How to run the site locally

- Clone the repo
- Use the command ```npm install``` to install all dependencies
- Make a copy of the .env.example file in the backend directory and edit to match local db configuration
- Create the database and user in psql
  * CD into the backend directory
  * Run all migrations with ```npx dotenv sequelize db:migrate```
  * Seed all data with ```npx dotenv sequelize db:seed:all```
- Use the start script ```npm start``` to run the servers
  * CD into the backend directory and run ```npm start```
  * CD into the frontend directory and run ```npm start```