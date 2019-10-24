const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "bamazon"
});

// connection.connect(function (err) {
//     if (err) throw err;

//     console.log("【ツ】" + "\nNow connected to Bamazon Database - Manager Application")
// });

function runBamazon() {
    managerPrompt();
};

runBamazon();

function managerPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Welcome to the Bamazon Manager Application.  Please select an option:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product",],
            filter: function (val) {
                if (val === "View Products for Sale") {
                    return "sale";
                } else if (val === "View Low Inventory") {
                    return "lowInventory";
                } else if (val === "Add to Inventory") {
                    return "addInventory";
                } else if (val === "Add New Product") {
                    return "newProduct";
                } else {
                    // This case should be unreachable
                    console.log("ERROR: Unsupported operation!");
                    exit(1);
                };
            }
        }
    ]).then(function (input) {
        if (input.option === 'sale') {
            displayInventory();
        } else if (input.option === 'lowInventory') {
            displayLowInventory();
        } else if (input.option === 'addInventory') {
            addInventory();
        } else if (input.option === 'newProduct') {
            createNewProduct();
        } else {
            // This case should be unreachable
            console.log('ERROR: Unsupported operation!');
            exit(1);
        };
    });
};

function displayInventory() {
    queryStr = 'SELECT * FROM products';

    connection.query(queryStr, function (err, data) {
        if (err) throw err;

        console.log("Existing Inventory: ");
        console.log("---------------------------------------------------------------------\n");

        let output = "";
        for (var i = 0; i < data.length; i++) {
            output = "";
            output += "Item ID: " + data[i].item_id + "  //  ";
            output += "Product Name: " + data[i].product_name + "  //  ";
            output += "Department: " + data[i].department_name + "  //  ";
            output += "Price: $" + data[i].price + "  //  ";
            output += "Quantity: " + data[i].stock_quantity + "\n";

            console.log(output);
        };

        console.log("---------------------------------------------------------------------\n");

        connection.end();
    });
};

function displayLowInventory() {
    queryStr = "SELECT * FROM products WHERE stock_quantity < 5";

    connection.query(queryStr, function (err, data) {
        if (err) throw err;

        console.log("Low Inventory Items (less than 5):  ")
        console.log("---------------------------------------------------------------------\n");

        let output = "";
        for (var i = 0; i < data.length; i++) {
            output = "";
            output += "Item ID: " + data[i].item_id + "  //  ";
            output += "Product Name: " + data[i].product_name + "  //  ";
            output += "Department: " + data[i].department_name + "  //  ";
            output += "Price: $" + data[i].price + "  //  ";
            output += "Quantity: " + data[i].stock_quantity + "\n";

            console.log(output);
        };

        console.log("---------------------------------------------------------------------\n");

        connection.end();
    });
};

// Validation functions
function validateInteger(value) {
    let integer = Number.isInteger(parseFloat(value));
    let sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true
    } else {
        return "Please enter a whole number of 1 or greater"
    }
};

function validateNumber(value) {
    // Value must be a positive number
    let number = (typeof parseFloat(value)) === "number";
    let positive = parseFloat(value) > 0;

    if (number && positive) {
        return true;
    } else {
        return "Please enter a positive number for the unit price"
    };
};

function addInventory() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please enter the Item ID of the item that you want to add inventory to",
            validate: validateInteger,
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            message: "How many need to be added to inventory?",
            validate: validateInteger,
            filter: Number
        }
    ]).then(function(input) {
        let item = input.item_id;
        let addQuantity = input.quantity;

        // Query string to select all data from SQL db
        let queryStr = "SELECT * FROM products WHERE ?";

        connection.query(queryStr, {item_id: item}, function(err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log("ERROR: Invalid Item ID");
                addInventory();
            } else {
                let productData = data[0];

                console.log("Updating Inventory...");

                // Query string to update the SQL db
                let updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity + addQuantity) + ' WHERE item_id = ' + item;

                connection.query(updateQueryStr, function(err, data) {
                    if (err) throw err;

                    console.log('Stock count for Item ID ' + item + ' has been updated to ' + (productData.stock_quantity + addQuantity) + '.');
                    console.log("---------------------------------------------------------------------\n");

                    connection.end();
                });
            };
        });
    });
};

function createNewProduct() {
    inquirer.prompt([
        {
            type: "input",
            name: "product_name",
            message: "Please enter the product name."
        },
        {
            type: "input",
            name: "department_name",
            message: "Please enter the department name."
        },
        {
            type: "input",
            name: "price",
            message: "Please enter the product price.",
            validate: validateNumber
        },
        {
            type: "input",
            name: "stock_quantity",
            message: "Please enter the quantity.",
            validate: validateInteger
        }
    ]).then(function(input) {
        console.log('Adding New Item: \n    Product Name = ' + input.product_name + '\n' +  
									   '    Department Name = ' + input.department_name + '\n' +  
									   '    Price = $' + input.price + '\n' +  
                                       '    Quantity = ' + input.stock_quantity);

        //   Query string to insert into SQL db
        let queryStr = "INSERT INTO products SET ?";

        connection.query(queryStr, input, function (error, results, fields) {
            if (error) throw error;

            console.log("New product has been added successfully under Item ID " + results.insertId + ".");
            console.log("---------------------------------------------------------------------\n");

            connection.end()
        })
    })
}