const fs =require('fs')

//  Reading Files

// In Node.js, fs.readFile() is an asynchronous function for reading files, which means that it does not block the execution of the rest of the code while waiting for the file to be read.
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log("err",err)
    }
    console.log(data.toString())
})

console.log('Last Line')

// Writing Files

// il va modifier le fichier blog1.txt et mettre hello world Async
fs.writeFile('./docs/blog1.txt','hello world',()=>{
    console.log('file was written')
})

// il va cree le fichier blog2.txt car il existe pas puis il va mettre hello again Async
fs.writeFile('./docs/blog2.txt','hello again',()=>{
    console.log('file was written')
})

// Directories 

//  existsSync ==>verifie si le fichier ou le dossier exist Syncrone
if(!fs.existsSync('./assets')){
    // cree un dossier Async
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log("err",err)
        }
        console.log('Folder created')
    })
} else{
    // Supprimer un dossier Async
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log("err",err)
        }
        console.log('Folder deleted')
    })
}


// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}