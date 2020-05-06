function getSame(arr) {
    if (typeof arr !== 'object') {
        return false
    }
    return arr.filter((n, index) => {
        // console.log(arr.indexOf(n));
        return arr.indexOf(n) === index
    })
}

var a = 2

var b = 50

console.log(getSame([1,2,3,4,5,6,7,3,2,2,2,4,5,3]));
