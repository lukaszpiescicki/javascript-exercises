const removeFromArray = function(arr, ...items) {

for(let item of items){
    if (arr.includes(item)){
        let index = arr.indexOf(item);
        arr.splice(index,1);
}}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
