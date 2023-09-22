import { exec as origExec } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(origExec);

/**
 * Include git information in your vite build
 * @returns {import('vite').Plugin}
 */
export default function gitInfo() {
  const virtualModuleId = "virtual:git-info";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "git-info",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const { stdout } = await exec("git", ["rev-parse", "--short", "HEAD"], {
          encoding: "utf8",
        });
        return `export default { sha: "${stdout.trim()}" }`;
      }
    },
  };
}
