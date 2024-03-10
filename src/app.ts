import fs from "fs";

// fs.writeFileSync("posts/test.txt", "anjay keren menyala abang ku ilmu padi abang ku");

const data = fs.readFileSync("posts/test.txt", "utf-8");

console.log(data);
