const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const args = process.argv.slice(2);

let folder = args[0];

if (!folder) {
  console.log('Specify folder parameter!');
  return;
}

if (folder.charAt(folder.length - 1) !== '/') {
  folder += '/';
}

console.log(`Process ${folder}...`);

const isJpg = (fileName) => path.extname(fileName) === '.jpg';
const files = fs.readdirSync(folder, { withFileTypes: true }).filter((dirent) => dirent.isFile() && isJpg(dirent.name)).map((dirent) => dirent.name);

files.forEach((file) => {
  const src = `${folder}${file}`;
  const output =  `${folder}${file.split(' ')[1]}`;
  console.log(src);
  console.log(output);
  sharp(src)
    .resize({ width: 1000 })
    .toFile(output)
    .then((info) => { console.log(info); })
    .catch((err) => { console.log(err); });
});