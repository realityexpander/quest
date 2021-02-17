const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

switch (treeLifeStatus) { 
  case 0: console.log("alive")
        break;
  case 1: console.log("flowering")
        break;
  case 2: console.log("shedding")
        break;
  default: console.log("other")
        break;
}
