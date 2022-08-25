const palindromes = function (word) {
    
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    word = word.replace(regex,'').replace(/\s/g, '');
    const splitString = word.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');


if(word.toLowerCase() === joinArray.toLowerCase()){
    return true;
}else{
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
