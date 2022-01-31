const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    ImageData: {
      type: String,
    },
    ImageNAme: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Image", ImageSchema);
