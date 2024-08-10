
const mongoose = require('mongoose');
const User = require('../models/user.cjs'); 

async function init() {
  try {
  
    await mongoose.connect('mongodb://127.0.0.1:27017/formdata', {
  
    });
    console.log('DB Connected');

    await User.deleteMany({});
    console.log('Existing user data cleared');

    const users = [
      {
        name: 'aditya',
        email: 'aditya@gmail.com',
        number: '9900880011',
        subject: 'physics',
      },
      {
        name: 'naman',
        email: 'naman@gmail.com',
        number: '9900880221',
        subject: 'physicsassi',
      }

    ];

    await User.insertMany(users);
    console.log('Dummy data inserted');

    mongoose.connection.close();
    console.log('DB connection closed');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

init();
