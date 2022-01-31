const upload = require("../Middleware/upload");
const express = require("express");
const router = express.Router();
const postImage = require("../Controller/UploadController");
const {
  getImages,
  getImagesByName,
} = require("../Controller/imagesController");

router.post("/uploadimage", upload.single(), postImage);
router.get("/images", (req, res) => {
  getImages();
});
router.get("imagebyname", (req, res) => {
  getImagesByName(req);
});
module.exports = router;

/* async (req, res) => {
  console.log("bateu no routes...");
  console.log(req);
  if (req.file === undefined) return res.send("you must select a file.");
  const imgUrl = `http://localhost:3001/imageupload`;
  return res.send(imgUrl); */
