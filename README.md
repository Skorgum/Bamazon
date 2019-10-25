# Bamazon

## Description

This is a simple CLI based storefront application built using npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package.  There are 2 interfaces; one for the customer & one for the manager.

### MySQL Database Setup & Installation Instructions

This application requires a MySQL database set up on your machine.  The schema to populate the database can be found [here](Bamazon.sql).

To install, clone the repository, navigate to the folder in your terminal and run `npm install`.  node.js is also required.

To run the Customer interface, run `node bamazonCustomer.js`

To run the Manager interface, run `node bamazonManager.js`

### Customer Interface

When the application is started, the user will be presented with the current inventory and will be asked what item they would like to purchase

<Image Placeholder>

After selecting the desired item, the user will be asked how many items they would like:

<Image Placeholder>

If there is insufficient quantity, the user will be presented with the following:

<Image Placeholder>

If there is sufficient quantity, it will be deducted from the database & the following will be displayed:

<Image Placeholder>

### Manager Interface

When the application is started, the user will be presented with the following options:

1. View Products for Sale
   
The user will be presented with a list of the current inventory:

<Image Placeholder>

2. View Low Inventory

The user will be presented with a list of all items that have less than 5 in stock (if any):

<Image Placeholder>

3. Add to Inventory

The user will be prompted for the Item ID of the product that is to be restocked:

<Image Placeholder>

If an invalid Item ID is entered, the following will be displayed:

<Image Placeholder>

After a valid Item ID, the user will be prompted for the quantity to add to inventory (must be a whole number greater than zero):

<Image Placeholder>

<Image Placeholder>

Upon successful entry, the database will be updated with the entered quantity:

<Image Placeholder>

4. Add New Product

The User will be prompted for the new item's name, department, price (must be a valid integer greater than zero), & quantity (must be a whole number greater than zero):

<Image Placeholder>
<Image Placeholder>
<Image Placeholder>

Upon successful entry, the database will be updated with the new data:

<Image Placeholder>