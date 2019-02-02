const findUp = require('find-up')
 
const test = async () => {
    const path = findUp.sync('.vscode')
    console.log(path)
}

test()