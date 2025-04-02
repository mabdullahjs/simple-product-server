import dotenv from "dotenv";
dotenv.config();

import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Smartphone", category: "Electronics" },
    { id: 3, name: "Tablet", category: "Electronics" },
    { id: 4, name: "Headphones", category: "Accessories" },
    { id: 5, name: "Smartwatch", category: "Wearable" },
    { id: 6, name: "Camera", category: "Electronics" },
    { id: 7, name: "Keyboard", category: "Accessories" },
    { id: 8, name: "Mouse", category: "Accessories" },
    { id: 9, name: "Monitor", category: "Electronics" },
    { id: 10, name: "Printer", category: "Electronics" },
    { id: 11, name: "Desk Chair", category: "Furniture" },
    { id: 12, name: "Office Desk", category: "Furniture" },
    { id: 13, name: "Bookshelf", category: "Furniture" },
    { id: 14, name: "Backpack", category: "Bags" },
    { id: 15, name: "Suitcase", category: "Bags" },
    { id: 16, name: "Sunglasses", category: "Fashion" },
    { id: 17, name: "T-shirt", category: "Clothing" },
    { id: 18, name: "Jeans", category: "Clothing" },
    { id: 19, name: "Jacket", category: "Clothing" },
    { id: 20, name: "Sneakers", category: "Footwear" },
    { id: 21, name: "Sandals", category: "Footwear" },
    { id: 22, name: "Running Shoes", category: "Footwear" },
    { id: 23, name: "Watch", category: "Accessories" },
    { id: 24, name: "Perfume", category: "Beauty" },
    { id: 25, name: "Shampoo", category: "Beauty" },
    { id: 26, name: "Lipstick", category: "Beauty" },
    { id: 27, name: "Face Cream", category: "Beauty" },
    { id: 28, name: "Toothpaste", category: "Personal Care" },
    { id: 29, name: "Body Wash", category: "Personal Care" },
    { id: 30, name: "Deodorant", category: "Personal Care" },
    { id: 31, name: "Hair Dryer", category: "Electronics" },
    { id: 32, name: "Electric Shaver", category: "Electronics" },
    { id: 33, name: "Microwave", category: "Appliances" },
    { id: 34, name: "Refrigerator", category: "Appliances" },
    { id: 35, name: "Oven", category: "Appliances" },
    { id: 36, name: "Blender", category: "Appliances" },
    { id: 37, name: "Toaster", category: "Appliances" },
    { id: 38, name: "Coffee Maker", category: "Appliances" },
    { id: 39, name: "Kettle", category: "Appliances" },
    { id: 40, name: "Iron", category: "Appliances" }
];

app.get('/api/products', (req, res) => {
    const { search } = req.query;
    
    if (search) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filteredProducts);
    }
    
    res.json(products);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})