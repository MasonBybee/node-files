const fs = require("fs");
const axios = require("axios");

function cat(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR!", err);
      process.exit(1);
    }
    console.log(data);
  });
}

async function webCat(site) {
  const { data: html } = await axios.get(site);
  console.log(html);
}

const arg = process.argv[2];

if (arg.split(".")[1] === "txt") {
  cat(arg);
} else {
  webCat(arg);
}
