const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
// console.log(argv);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      console.table(await listContacts());
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
