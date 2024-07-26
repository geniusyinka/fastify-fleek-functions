const { build } = require('esbuild');
const path = require('path');

build({
  entryPoints: ['./fastify.js'],
  bundle: true,
  platform: 'node',
  target: 'node20', // Adjust according to your Node.js version
  outfile: 'fastify.bundle.js',
  external: [
    // List any external modules you want to exclude from the bundle
  ],
  resolveExtensions: ['.js', '.json'],
  loader: {
    '.js': 'jsx',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    {
      name: 'node-modules-mock',
      setup(build) {
        // Mock unsupported Node.js modules
        build.onResolve({ filter: /^worker_threads$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-worker_threads.js') };
        });
        build.onResolve({ filter: /^fs$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-fs.js') };
        });
        build.onResolve({ filter: /^module$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-module.js') };
        });
        build.onResolve({ filter: /^node:os$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-os.js') };
        });
        build.onResolve({ filter: /^node:events$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-events.js') };
        });
        build.onResolve({ filter: /^node:util$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-util.js') };
        });
        build.onResolve({ filter: /^node:dns$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-dns.js') };
        });
        build.onResolve({ filter: /^node:http2$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-http2.js') };
        });
        build.onResolve({ filter: /^node:diagnostics_channel$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-diagnostics_channel.js') };
        });
        build.onResolve({ filter: /^node:crypto$/ }, args => {
          return { path: path.resolve(__dirname, './mock_files/mock-node-crypto.js') };
        });
      }
    }
  ]
}).catch(() => process.exit(1));
