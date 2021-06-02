import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});
