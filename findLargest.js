// write a function that takes an array of numbers as input and returns the largest number in the array 
function findTheLargestNumber(arr){
    let largestNumber = 0
    for (num in arr){
        if (arr[num + 1] != undefined){
            
            largestNumber = compareValues(arr[num] , arr[num + 1])
        }
        else {
            largestNumber = compareValues(largestNumber , arr[num] )
        }
    }
    return largestNumber;
}

function compareValues(num1 , num2){
    return num1 > num2 ? num1 : num2
}


console.log(findTheLargestNumber([77772000,412,66,88888,75,67686,66]))