import fs from "fs";
import { generateNewEntryId } from "../utils";
import { storeFileMiddleware } from "../middlewares";
import * as config from "../../config";

export function documentCustomRoutes(server, router) {
  server.post(
    "/documents/file",
    storeFileMiddleware.single("pdf"),
    (req, res) => {
      const newFile = req.file;
      const documentsDB = router.db.get("documents").value();
      const fileExists = documentsDB.find(
        (doc) => doc.filename === newFile.filename
      );

      if (fileExists) {
        res.sendStatus(409);
      } else {
        const { id, createdAt } = generateNewEntryId();
        const newDocument = {
          id: id,
          createdAt: createdAt,
          filename: newFile.filename,
          type: newFile.mimetype,
        };
        router.db.get("documents").push(newDocument).write();
        res.status(200).jsonp({ ...newDocument, base64: "" });
      }
    }
  );

  server.get("/documents/file/:id", (req, res) => {
    try {
      const documentData = router.db
        .get("documents")
        .find({
          id: req.params.id,
        })
        .value();

      const fileBase64 = fs.readFileSync(
        `${config.FILE_DIR_PATH}/${documentData.filename}`,
        {
          encoding: "base64",
        }
      );

      res.status(200).jsonp({ ...documentData, base64: fileBase64 });
    } catch (_e) {
      res.sendStatus(404);
    }
  });
}
