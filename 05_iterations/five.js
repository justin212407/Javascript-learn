const coding =["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (item) {
//     console.log(item);
// })

coding.forEach( (val) => {
    //console.log(val);
})

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);  
// })

myCoding = [
    {
        languageName : "javascript",
        languageFrame : "js"
    },
    {
        languageName : "java",
        languageFrame : "java"
    },
    {
        languageName : "python",
        languageFrame : "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})