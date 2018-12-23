var shuzu=[21,52,33,62,22,93,35,57,354,245,243];
function order(arr){
    for(var j=0;j<10;j++){
       for(var i=0;i<10-j;i++){
            if(arr[i]>arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        } 
    }
}
order(shuzu);
console.log(shuzu);