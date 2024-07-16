function checkValidateNumber(numsOfString){
    let result = [];

    for(let i = 0; i < numsOfString.length; i++){
        let valNumber = Number(numsOfString[i]);

        if(Number.isNaN(valNumber)){
            return new Error(
                `${numsOfString[i]} is not a valid number!!`
            )
        }
        result.push(valNumber);
    }
    return result;
}


function findAvg(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function(acc, curr){
        return acc + curr;
    }) / nums.length
}


function findMiddle(nums){

    nums.sort((a, b) =>a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if(nums.length % 2 === 0){
        median = (nums[middleIndex - 1] + nums[middleIndex] / 2);
    }
    else{
        median = nums[middleIndex];
    }
    return median;
}


function findMostFrq(nums){
    const freq = [];

    nums.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });
    let max = 0;
    let mode;
    
    for(const num in freq){
        if(freq[num] > max){
            max = freq[num];
            mode = parseFloat(num);
        }
    }

    return mode;
}



module.exports = {
    findAvg,
    checkValidateNumber,
    findMiddle,
    findMostFrq
}