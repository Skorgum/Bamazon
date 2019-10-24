DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE	bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(7,2) NOT NULL,
    stock_quantity INT NOT NULL
);

INSERT INTO products 
	(product_name, department_name, price, stock_quantity)
VALUES
	("Okama Gamesphere", "Electronics", 799.99, 10),
    ("Bag of Cheesy Poofs", "Groceries", 4.99, 144),
    ("Shake Weight", "Sporting Goods", 19.99, 24),
    ("Casa Bonita Gift Card", "Gift Cards", 50, 999),
    ("Jimmy Buffet Margaritaville Margarita Blender", "Home & Kitchen", 399.99, 12),
    ("Box of Snacky Cakes", "Groceries", 4.99, 144),
    ("Guitar Hero", "Electronics", 59.99, 24),
    ("Faith + 1 CD", "Electronics", 9.99, 500),
    ("Toshiba HandiBook", "Electronics", 199.99, 50),
    ("Limey Charles Worcestershire Sauce", "Groceries", 9.99, 288),
    ("Chimpokomon Action Figure", "Toys", 14.99, 50); 