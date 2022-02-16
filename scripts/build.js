const path = require('path');
const { build } = require('vite');

const coreDir = path.resolve(__dirname, '../packages/core');
const uiDir = path.resolve(__dirname, '../packages/ui');

async function main() {
  await build({
    root: coreDir,
  });

  await build({
    root: uiDir,
  });
}

main();
