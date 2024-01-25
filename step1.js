const fs = require("fs");

function cat() {
  const file = process.argv[2];
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR!", err);
      process.exit(1);
    }
    console.log(data);
  });
}
cat();
