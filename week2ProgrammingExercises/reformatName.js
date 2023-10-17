function reformatName(first, last) {
    var result = last + "," + first;
    return result;
}

var result = reformatName("Susan", "Rodger");
console.log(result);
result = reformatName("Robert", "Duvall");
console.log(result);