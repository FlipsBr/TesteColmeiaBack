const Image = require("../models/Image");

async function postImage(req, res) {
  const { Imagem, imageName } = req.body;
  console.log(imageName);
  res = await Image.create({ ImageData: Imagem, imageName });
  console.log(res);
  return res;
}

module.exports = postImage;
