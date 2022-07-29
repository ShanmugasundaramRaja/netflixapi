import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const { readJSON, writeJSON, writeFile, remove, createReadStream } = fs

import { fileURLToPath } from "url";
import { dirname, join } from "path";

//**************** MEDIA JSON FILE PATH *******************
export const mediaJSONPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../data/media.json"
);

//**************** REVIEWS JSON FILE PATH *******************
export const reviewsJSONPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "../data/reviews.json"
);