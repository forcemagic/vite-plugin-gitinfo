import { exec as origExec } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(origExec);
const gettxt = async (/** @type {string} */ cmd) =>
  exec(cmd, { encoding: "utf8" }).then(({ stdout }) => stdout.trim());

async function getGitInfo() {
  const sha = await gettxt("git rev-parse --short HEAD");
  const branch = await gettxt("git branch --show-current");
  const committedAt = await gettxt("git show --no-patch --format=%cI HEAD");
  return { sha, branch, committedAt };
}

/**
 * Include git information in your vite build
 * @returns {import('vite').Plugin}
 */
export default function gitInfoPlugin() {
  const virtualModuleId = "virtual:gitinfo";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "gitinfo",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async buildEnd() {
      this.emitFile({
        type: "asset",
        fileName: "gitinfo.json",
        source: JSON.stringify(await getGitInfo()),
      });
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(await getGitInfo())}`;
      }
    },
  };
}
