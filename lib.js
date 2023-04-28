function mean(arr){
    let total = 0
    arr.forEach(element => {
        total += element    
    });
    return total / arr.length
}

module.exports = { mean }

