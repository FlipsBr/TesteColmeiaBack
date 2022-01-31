const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: process.env.DB,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(req.body.capture) === -1) {
      console.log("bateu no if do middleware");
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }
    console.log("não bateu no if...");
    return {
      bucketName: "photos",
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
