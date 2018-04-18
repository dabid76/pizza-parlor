-- Database should be pizza_parlor
CREATE DATABASE "pizza_parlor";

-- Switch to "pizza_parlor" before running the following
-- Table to store the pizzas
CREATE TABLE "pizza" (
  "id" serial primary key,
  "name" varchar(120),
  "description" varchar(480),
  "cost" numeric
);

-- Table to store the orders
CREATE TABLE "order" (
  "id" serial primary key,
  "customer_name" varchar(120),
  "order_total" numeric
);

-- Pizzas we make
INSERT INTO "pizza" ("name", "description", "cost")
VALUES ('Splat of Marinara', 'Cheeseless pizza with marinara, garlic and red peppers.', 12.99),
('Onamonapizza', 'Cheese, BBQ sauce and artichokes.', 14.99),
('Pepperoni', 'Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.', 14.99),
('Over the Rainbow', 'One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion.', 19.99),
('Chinese Firedragon', 'Pepperoni, pineapple and banana peppers.', 15.99),
('Bad Date', 'Garlic, Onion and Pepperoni.', 24.99);

-- Sample order
INSERT INTO "order" ("customer_name", "order_total")
VALUES ('Chris', 39.97);