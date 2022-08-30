x = 20;
y = 100;
const calculate = 'x * y';
var f = eval(calculate);
console.log(f)


var enter = "";

var enterLength = 0;

const input = document.getElementById('input');
function refresh() {
    input.innerText = format(enter);
    enterLength = enter.length;
    console.log('first', enterLength, enter, format(enter))
}

const ops = ["÷", "×", "-", "+"]


function isOp(op){
    return ops.includes(op);
}
// used to reverse a string.
function rev(str){
    return str.split('').reverse().join('');
}

function format(val){
    if (enterLength <= 3){
        console.log('empty format')
        count += 1;
        return val;
    }
    val = rev(val)
    var count = 0;
    var temp = "";
    for (var i=0; i<(val.length); i++){
        if (!isOp(val[i])){
            if (count == 3){
                temp += ',';
                temp += val[i]
                count = 1;
            }
            else {
                temp += val[i];
                count += 1;
            }
        }
        else {
            temp += val[i];
            count = 0
        }
        console.log('count =', count, 'temp =', temp, 'val = ', val, 'isOp? - ', isOp(val[i]))
    }
    return rev(temp);
}

function insert(key) {
    if (key == '.') {
        if (dot() == true) {
            console.log('period already entered...')
        }
        else{
            if (enterLength != 0 && !isOp(enter[enterLength - 1])){
                enter += key;
                refresh();
            }
            else {
                enter += '0';
                enter += key;
                refresh()
            }
        }
    }
    else {
        var lastChar = enter[enterLength - 1];
        if (isOp(lastChar) && isOp(key)) {
            enter = enter.slice(0, -1);
            enter += key;
            refresh();
            console.log(ops.includes(lastChar))
        }
        else {
            enter += key;
            refresh();
        }
    }
    console.log(enterLength)
    // function isOp(op){
    //     return ops.includes(op) ? true : false;
    // }
    function dot() {
        return enter.includes('.');
    }
}

function clears() {
    enter = "";
    // console.log('cleared')
    refresh();
}
function backspace() {
    // var spaces = -1;
    // var len = enterLength - 1;
    // function spacechecker(index){
    //     if (enter[index] == ' '){
    //         spaces -= 1;
    //         index -= 1;
    //         console.log('spaces-', spaces, 'len', len)
    //         spacechecker(len);
    //     }
    //     else{
    //         var s = enter.slice(0, spaces);
    //         enter = s;
    //         refresh();
    //     }
    // }
    // spacechecker(len);
    var s = enter.slice(0, -1);
    enter = s;
    refresh();
}


function equals(){
    var sex = enter.replace('÷', '/');
    var eq = eval(sex.replace('×', '*'));
    enter = eq
    var fini = format(String(enter))
    input.innerText = fini
    enterLength = enter.length;
}