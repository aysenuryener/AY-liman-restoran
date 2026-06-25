import fs from "fs";
import path from "path";

export function imageExists(publicRelativePath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicRelativePath));
  } catch {
    return false;
  }
}
