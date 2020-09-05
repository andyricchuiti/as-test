import merge from 'deepmerge';
import {asc} from 'rollup-plugin-assemblyscript';
import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  // legacyBuild: true,
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: './src/index.html',
  plugins: [asc({
    compilerOptions: {
      optimizeLevel: 3,
      shrinkLevel: 2,
      runtime: "none"
    }
  })]

  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
});
