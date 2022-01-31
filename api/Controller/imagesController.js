const Image = require("../models/Image");

async function getImages(res) {
  try {
    console.log("bateu");
    res = await Image.find({});
    if (res) {
      console.log(res);
      return res;
    }
  } catch (error) {
    throw error;
  }
}

async function getImagesByName(res) {
  console.log("bateu no image by name");
  try {
    let { imageName } = req.body;
    if (imageName) {
      res = await Image.find({ imageName });
      if (res) {
        console.log(res);
        return res;
      }
    } else return res.json({ Error: "No image name provided" });
  } catch (error) {
    throw error;
  }
}

module.exports = { getImages, getImagesByName };
