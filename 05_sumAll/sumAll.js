const sumAll = function(first,second) {
    let result = 0;
    if(first >= 0 && second >= 0 && typeof first == 'number' && typeof second == 'number'){
        if(first<second){
            for (let i = first; i <= second; i++){
                result += i;
            }
            
        }
        else if(first > second){
            for(let i = second; i <= first; i++){
                result += i;
            }
        }   
    }else{
            return 'ERROR';
        }
        return result;
};

// Do not edit below this line
module.exports = sumAll;
