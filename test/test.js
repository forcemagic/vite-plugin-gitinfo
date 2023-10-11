import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { createServer } from "vite";
import gitInfo from "../";

const root = dirname(fileURLToPath(import.meta.url));

const srv = await createServer({
  plugins: [gitInfo()],
  root,
});
await srv.listen(3000);
srv.printUrls();

// await build({
//   plugins: [gitInfo()],
//   root,
// });
