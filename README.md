# vite-plugin-gitinfo

Include git information in your Vite builds.

## Example usage

vite.config.js

```js
import { defineConfig } from "vite";
import gitInfoPlugin from "vite-plugin-add-gitinfo";

export default defineConfig({
  plugins: [..., gitInfoPlugin()],
})
```

myfile.ts

```ts
/// <reference types="vite-plugin-add-gitinfo" />
import gitInfo from "virtual:gitinfo";

console.log(gitInfo.sha); // 123abcd
```
