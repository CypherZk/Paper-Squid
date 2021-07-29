const shell = require('shelljs');
const fs = require('fs');

const filename = `${process.argv[2]}.sh`;
const shFile = `
#!/bin/bash\n
gnome-terminal -x ~/piratepaper/piratepaperwallet ${filename}\n
xdotool type "${randomEntropy}"\n
xdotool key Enter
`;
console.log(shFile);

const writeOutput = async () => {
  fs.writeFileSync(filename, shFile, (err) => {
    if (err) return console.log(err);
    console.log('shell file success!');
    return true;
  });
};
writeOutput();

const runShell = async () => {
  shell.exec(shFile);
};

runShell();
