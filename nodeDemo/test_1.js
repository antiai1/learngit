const testVar = 100;

global.testVar2 = 200;
function test(){
    console.log(testVar);
}

module.exports.testVar = testVar;
module.exports.testFn = test;