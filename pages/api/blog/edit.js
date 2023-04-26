import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  const postsfolder = join(process.cwd(), `/_posts/`);
  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      const { date, title, tagline, preview, image } = req.body.variables;
      const { renameSlug, newFileName } = req.body

      if (renameSlug) {
        fs.rename(postsfolder + req.body.slug + ".md", postsfolder + newFileName + ".md", (err) => {
          if (!err) {console.log('file renamed')}
              return console.log('an error occurred')
        })
        fs.writeFile(
          postsfolder + newFileName + ".md",
          matter.stringify(req.body.content, {
            date,
            title,
            tagline,
            preview,
            image,
          }),
          "utf-8",
          (err) => console.log(err)
        );
      } else {
        fs.writeFile(
          postsfolder + req.body.slug + ".md",
          matter.stringify(req.body.content, {
            date,
            title,
            tagline,
            preview,
            image,
          }),
          "utf-8",
          (err) => console.log(err)
        );
      }

      res.status(200).json({ status: "DONE" });
    } else {
      res
        .status(200)
        .json({ name: "This route works in development mode only" });
    }
  }
}
