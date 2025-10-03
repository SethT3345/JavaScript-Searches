let numList = [0, 3, 6, 7, 9, 11, 21, 67, 77, 101, 405, 451, 555, 790];

function LinearSearch(num){
    let found = false;
    for (let i = 0; i < numList.length; i++){
        let arraynum = numList[i];
        if(num === arraynum){
            console.log(`${num} is at index ${i}`)
            found = true;
            break;
        }
    }
    if(!found){
        console.log("-1");
    }  
}

function BinarySearch(target){
    let left = 0;
    let right = numList.length -1;
    while(right >= left){
        const mid = Math.floor((left + right) / 2)
        const midVal = numList[mid].toLowerCase();
        if (midVal === target) return mid;
        if (midVal < target) left = mid + 1;
    }
}

function JumpSearch(target){
    const n = numList.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;
    let curr = step;

    while (curr < n && numList(curr) < target){
        prev = curr;
        curr += step;
    }

    for (let i = prev; i < Math.min(curr, n); i++){
        if (arr[i] === target) return i;
    }
}