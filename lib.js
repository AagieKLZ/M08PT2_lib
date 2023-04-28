function mean(arr){
    if (arr.length == 0) return 0
    let total = 0
    arr.forEach(element => {
        total += element    
    });
    return total / arr.length
}

module.exports = { mean }

