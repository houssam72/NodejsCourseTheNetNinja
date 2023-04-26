const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

// ReadStream

readStream.on("data", (chunk) => {
  console.log("================= New Chunk ==================================\n\n\n\n\n\n");
  console.log(chunk);
});

// Write stream
const writeStream=fs.createWriteStream('./docs/blog4.txt')

// readStream.on("data", (chunk) => {
//     console.log("================= New Chunk ==================================\n\n\n\n\n\n");
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n')
//     writeStream.write(chunk)
//   });

//   Pipe do the same thing
readStream.pipe(writeStream)

