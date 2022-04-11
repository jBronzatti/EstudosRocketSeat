/*function getFlag(string) {
    const array = process.argv;
    const result = [];
    for (let i;i<array.length;i++){
        if (array[i][0]=='')
    }
}*/
getFlagValue = (flag) => process.argv[process.argv.indexOf(flag)+1];

module.exports = getFlagValue;

