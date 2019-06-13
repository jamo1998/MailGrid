const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    //Sets the credits to have a value that represents a number, and sets the default value to 0
    credits: { type: Number, default: 0 }
});
//Creates a new collection called 'users'
mongoose.model('users', userSchema);