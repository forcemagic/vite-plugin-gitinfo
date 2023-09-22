# vite-plugin-gitinfo

Include git information in your Vite builds.

## Example usage

vite.config.js
```js
import { defineConfig } from "vite";
import gitInfo from "vite-plugin-gitinfo";

export default defineConfig({
  plugins: [..., gitInfo()],
})
```

myfile.ts
```ts
import gitinfo from "virtual:gitinfo";

console.log(gitinfo.sha); // 123abcd
```
