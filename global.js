// Global Object 

global.setTimeout(()=>{
    console.log("in the timeout1")
},3000)

setTimeout(()=>{
    console.log("in the timeout2")
    // faite stopper l'interval int
    clearInterval(int)
},4000) 
 

const int= setInterval(() => {
    console.log("in the interval")
}, 1000);

// Full absolute pth for this directory
console.log(__dirname)
//Full absolute path for this fileName
console.log(__filename)

