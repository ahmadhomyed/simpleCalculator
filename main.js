function evil(fn) {
    return new Function("return " + fn)();
}

function del(value){
    return value.substr(0,value.length-1)
}