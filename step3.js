const fs = require("fs").promises;
const axios = require("axios");
const args = process.argv;

async function cat(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    return data;
  } catch (err) {
    handleErr(err);
  }
}

async function webCat(url) {
  try {
    const { data: html } = await axios.get(url);
    return html;
  } catch (err) {
    handleErr(err);
  }
}

async function write(data, file) {
  try {
    return await fs.writeFile(file, data, "utf8");
  } catch (err) {
    handleErr(err);
  }
}

function handleErr(error) {
  console.log("ERROR!", error);
  process.exit(1);
}

async function step3() {
  try {
    if (args[2] === "--out" && args.length === 5) {
      const res = args[4].endsWith(".txt")
        ? await cat(args[4])
        : await webCat([args[4]]);
      write(res, args[3]);
    } else {
      const resp = args[2].endsWith(".txt")
        ? await cat(args[2])
        : await webCat(args[2]);
      console.log(resp);
    }
    return;
  } catch (err) {
    handleErr(err);
  }
}

step3();
