const chokidar = require('chokidar')
const fsp = require('fs/promises')

const rootDirectory = process.argv[2]

const isJsFile = /^[^.].*\.js$/

chokidar.watch(rootDirectory, { ignoreInitial: true, })
  .on('addDir', path => {
    fsp.
    console.log(path, 'has been added (dir)')
  })
  .on('add', path => {
    console.log(path, 'has been added (file)', 'isJsFile', isJsFile.test(path))
  })
  .on('unlinkDir', path => {
    console.log(path, 'has been removed (dir)');
  })
  .on('unlink', path => {
    console.log(path, 'has been removed (file)');
  })
