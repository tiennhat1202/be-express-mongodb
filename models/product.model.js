const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },

  description: {
    type: String,
    required: false,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
    maxLength: [15, "Price cannot exceed 15 characters"],
  },

  rating: {
    type: Number,
    default: 0,
  },

  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please enter Product category"],
  },

  stock: {
    type: Number,
    required: [true, "Please enter Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
