
num = [10,20,30,40,50]
function avg(num){
    let sum = 0;
    for(i=0;i<num.length;i++){
        sum += num[i];
    }
    return sum / num.length;
}
console.log("Average is",avg(num))