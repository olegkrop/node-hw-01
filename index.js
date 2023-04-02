// --------------------Start (using yargs)------------------------

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.table("\x1B[31m Unknown action type!");
  }
};

const arrey = hideBin(process.argv);
const { argv } = yargs(arrey);

invokeAction(argv);

// --------------------End (using yargs)--------------------------

// --------------------Start (using commander)--------------------

// const { program } = require("commander");

// const contacts = require("./contacts");

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "list":
//       const allContacts = await contacts.listContacts();
//       console.table(allContacts);
//       break;
//     case "get":
//       const contact = await contacts.getContactById(id);
//       console.log(contact);
//       break;
//     case "add":
//       const newContact = await contacts.addContact({ name, email, phone });
//       console.log(newContact);
//       break;
//     case "remove":
//       const deleteContact = await contacts.removeContact(id);
//       console.log(deleteContact);
//       break;
//     default:
//       console.table("\x1B[31m Unknown action type!");
//   }
// };

// program
//   .option("-a, --action <type>")
//   .option("-i, --id <type>")
//   .option("-n, --name <type>")
//   .option("-e, --email <type>")
//   .option("-p, --phone <type>");

// program.parse();

// const options = program.opts();
// invokeAction(options);

// --------------------End (using commander)----------------------
