const fibonacci = function(nthElement) {
    let firstEl = 0;
    let secondEl = 1;
    let temp = 0;
    
    if(nthElement>0){
    for (let i = 1; i<= nthElement - 1;i++){
        temp = firstEl + secondEl;
        firstEl = secondEl;
        secondEl = temp;
    }
}else{
    return 'OOPS';
}
    return secondEl;
};

// Do not edit below this line
module.exports = fibonacci;
