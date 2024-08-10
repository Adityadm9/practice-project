const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.cjs'); 

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const main = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/formdata');
    console.log("DB Connected");
  } catch (err) {
    console.error("DB Not Connected", err);
  }
};
main();

app.post("/form", async (req, res) => {
  try {
    const { name, email, number, subject } = req.body;
    console.log(name, email, number, subject);
    const newUser = new User({ name, email, number, subject });
    console.log(newUser);
    await newUser.save();
    return res.status(201).send(req.body);
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).send("Error creating user");
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Hi, listening at port ${port}`);
});
