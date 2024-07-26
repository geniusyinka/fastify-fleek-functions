const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['express.js'], // Your entry point
  bundle: true,
  platform: 'node', // Target Node.js environment
  outfile: 'dist/server.js', // Output bundled file
  external: ['express'], // Externalize dependencies that might cause issues
}).catch(() => process.exit(1));
