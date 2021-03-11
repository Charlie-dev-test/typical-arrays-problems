
exports.min = function min (array) {
    if(!array){
        return 0;
    }
    if(array.length == 0){
        return 0;
    }
  return Math.min(...array, 0);
}

exports.max = function max (array) {
    if(!array){
        return 0;
    }
    if(array.length == 0){
        return 0;
    }
  return Math.max(...array, 0);
}

exports.avg = function avg (array) {
    if(!array){
        return 0;
    }
    if(array.length == 0){
        return 0;
    }
    let summary = 0;
    for(let i=0; i<array.length; i++){
        summary = summary + array[i]
    }

  return summary/array.length;
}
