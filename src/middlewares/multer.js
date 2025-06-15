import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constants/index.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(file);
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    // console.log(file);
    const uniquePreffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniquePreffix + '-' + file.originalname);
  },
});

export const upload = multer({ storage });
