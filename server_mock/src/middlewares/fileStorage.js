import multer from "multer";
import { FILE_DIR_PATH } from "../../config";

// File Storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, FILE_DIR_PATH);
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const storeFileMiddleware = multer({
  storage,
});
