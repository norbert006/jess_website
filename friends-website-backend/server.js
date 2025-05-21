require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Multer = require("multer");
const PORT = process.env.PORT || 5000;
const session = require('express-session');
const authRoutes = require('./routes/AuthRoutes');

const path = require('path'); // For photo backend
const src = path.join(__dirname, 'views'); // For photo backend

// Loading MongoDB routes
const contentRoutes = require('./routes/contentRoutes');
const servicesRoutes = require('./routes/servicesRoutes');

// Initialising express
const app = express();
app.use(cors({
  credentials: true,
}));
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.json());
app.use(express.static(src)); // For photo backend

// Setting up routes for MongoDB calls
app.use('/api/content', contentRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/services', (req, res, next) => {
    if (!req.session?.user) return res.status(401).json({ error: 'Not authorized' });
    next();
}, servicesRoutes);

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // No larger than 10mb, change as you need
  },
});

let projectId = process.env.PROJECT_ID
let keyFilename = 'mykey.json'

// Instantiate Google storage
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("clayful_bucket"); // Get this from Google Cloud -> Storage

// Streams file upload to Google Storage
app.post("/upload", multer.single("imgfile"), (req, res) => {
  console.log("Made it /upload");
  try {
    if (req.file) {
      console.log("File found, trying to upload...");
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();

      // Construct the public URL
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${req.file.originalname}`;
      
      blobStream.on("finish", () => {
        res.status(200).send(publicUrl);
        console.log("Success");
        console.log("Uploaded:", publicUrl);
      });
      blobStream.end(req.file.buffer);
    } else throw "error with img";
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
  res.sendFile(src + "/index.html");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
