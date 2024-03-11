import readline from "readline";
import fs from "fs";
import { contacts } from "lib/types";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukan nama ada : ", (nama) => {
  rl.question("masukan nomor Hp : ", (noHp) => {
    const nomorHp: number = parseInt(noHp);
    const contact: contacts = {
      nama,
      nomorHp,
    };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log(contacts);

    rl.close();
  });
});
