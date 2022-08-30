var test = 'Amethod text';

function replaces(){
    // this does not work.
    return test.replace('A', '')
}
// this does work.
var s = test.replace('A', '')

console.log(s, replaces())
