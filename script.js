const arr = [];
arr.push("Test", 50, true);
arr.forEach((value, index) => {
console.log(value, index);
});

function sum(a){
    return function(b){
        return a+b;
    }
}

sum(4)(5);

const p1 = [1,4,8,9];


const p2 = [2,3,3,5,7];

/*
function MergeSort(p){
    if (p.length <= 1){
        return p;
    }
    p1 = new let[p.length/2]
    p2 = new let[p.length-(p.length/2)]

}

function Merge(p1, p2){
    if(p1.length == 0){
        return p2;
    }
    if(p2.length == 0){
        return p1;
    }
    let i = 0;
    let j = 0;
    const p3 = [p1.length + p2.length];
    while(i < p1.length || j < p2.length){
        if( j == p2.length){
            p3[i+j] = p1[i];
            i++;
        }
        else if ( i == p1.length){
            p3[i+j] = p2[j]; 
            j++;
        }
        else if ( p1[i] < p2[j]){
            p3[i+j] = p1[i];
            i++;
        }
        else {
            p3[i+j] = p2[j]; 
            j++;
        }
        return p3;
    }
}
*/
/*
function merge(left, right){
    let sortedArr = [];
    while (left.length && right.left){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right];
}
        console.log(merge([1,6], [3,8]));

        function mergeSort(arr){
            if(arr.length <= 1) return arr;
            let mid = Math.floor(arr.length/2);

            let left = mergeSort(arr.slice(0,mid));
            let right = mergeSort(arr.slice(mid));

            return merge(left,right);
        }

        const mergeSortSorted = mergeSort([14,15,10,13,40,72,12])
        console.log(`Array : ${mergeSortSorted}`)
*/
        
        function merge(left, right) {
            let sortedArr = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    sortedArr.push(left.shift())
                } else {
                    sortedArr.push(right.shift())
                }
            }
            return [...sortedArr, ...left, ...right];
        }
        console.log(merge([1, 6], [3, 8]));
        
        function mergeSort(arr) {
            if (arr.length <= 1) return arr;
            let mid = Math.floor(arr.length / 2);
        
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
        
            return merge(left, right);
        }
        
        const mergeSortSorted = mergeSort([12, 31, 25, 8, 32, 17, 40, 42])
        
        console.log(`Array: ${mergeSortSorted}`);