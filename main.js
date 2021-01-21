const splice = function(arr = [],start=0,deleteCount=0){
    // write your code here  
   // console.log (arguments);
    let args = arguments;
    
    if (args.length<2)
    {
        console.log ("not enough variables");
        return null;
    }

    if (start> args[0].length)
        start = args[0].length;
    if ( (args[0].length+start) < 0)
        start = 0;
    if (start<0)
        start = args[0].length-start;

    if ( (args.length == 2) || (deleteCount>= (args[0].length-start)))
    {
        deleteCount = args[0].length - start;
    }
    let return_array=[];
    for(let i=start; i<args[0].length ; i++){
        if (i-start < deleteCount)
            return_array.push(args[0][i]);
        if (deleteCount+i<args[0].length)
            args[0][i]=args[0][deleteCount+i];
        
    }
    args[0].length = args[0].length - deleteCount;
    if (args.length>=4)
    {
        let tempArr = [];

        for (let i=args[0].length; i>start ;  i--)
        {
            tempArr.push(args[0].pop());
        }
        for (let i=3;i<args.length; i++)
        {
            args[0].push(args[i]);
        }
        while(tempArr.length>0)
        {
            args[0].push(tempArr.pop());
        }
    }
    return return_array;
}
// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]


// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 
