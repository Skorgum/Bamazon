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

![Customer01.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Customer01.JPG)

After selecting the desired item, the user will be asked how many items they would like:

![Customer02.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Customer02.JPG)

If there is insufficient quantity, the user will be presented with the following:

![Customer03.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Customer03.JPG)

If there is sufficient quantity, it will be deducted from the database & the following will be displayed:

![Customer04.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Customer04.JPG)

### Manager Interface

When the application is started, the user will be presented with the following menu options:

![Manager01.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager01.JPG)

1. View Products for Sale
   
The user will be presented with a list of the current inventory:

![Manager02.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager02.JPG)

2. View Low Inventory

The user will be presented with a list of all items that have less than 5 in stock (if any):

![Manager03.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager03.JPG)

3. Add to Inventory

The user will be prompted for the Item ID of the product that is to be restocked:

![Manager04.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager04.JPG)

The user will then be prompted for the quantity to add to inventory (must be a whole number greater than zero)

If an invalid Item ID is entered, the following will be displayed:

![Manager05.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager05.JPG)

An invalid number will return:

![Manager06.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager06.JPG)

Upon successful entry, the database will be updated with the entered quantity:

![Manager07.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager07.JPG)

4. Add New Product

The User will be prompted for the new item's name, department, price (must be a valid integer greater than zero), & quantity (must be a whole number greater than zero)

An invalid price will return:

![Manager08.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager08.JPG)

An invalid quantity will return:

![Manager09.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager09.JPG)

Upon successful entry, the database will be updated with the new data:

![Manager10.JPG](https://github.com/Skorgum/Bamazon/blob/master/Images/Manager10.JPG)