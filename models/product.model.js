const mongoose = require("mongoose");


const productSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // images: { type: [String], required: true },
    // description_img: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    // Size: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
