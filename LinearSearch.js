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