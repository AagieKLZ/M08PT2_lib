function mean(arr){
    let total = 0
    arr.array.forEach(element => {
        total += element    
    });
    return total / arr.length
}