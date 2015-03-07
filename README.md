# RESTful Goats & more by Josh Landry
This is a simple REST API that uses the Express module and MongoDB as a backend.  It uses an Angular client as a front end.

It is designed to work with the 'goats' resource, and your posts will be saved to a new database called "goatsapp_development".

First, run mongod using `mongod --dbpath=./db --smallfiles` in the cloned repo of this app.  Then, start the server with node using the command `node server.js`.  Then, open your browser and type `localhost:3000` into the URL.

You should then see the interface for interacting with your database of goats.  There should be a form for entering new 'goat' entries on the top half of the page, and a list of all goats in the database on the bottom half.  Each goat can be given a name and a message for the "Goat Says" field.

Next to each goat entry listed in the bottom half of the page you will see a 'goat transform' button and a 'slaughter goat' button.  The slaughter button will delete that entry.  The transform button will let you edit the contents of either field of that entry.