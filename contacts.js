const fs = require("fs").promises;

const path = require("path");

//   Раскомментируй и запиши значение
const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой код
  return await fs
    .readFile(contactsPath)
    .then((data) => data.toString())
    .catch((err) => console.log(err.message));
}

async function getContactById(contactId) {
  // ...твой код
  try {
    const contacts = await listContacts();

    return contacts.find((contact) => contact.id === contactId);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  // ...твой код
  try {
    const contacts = await listContacts();

    const result = contacts.filter((contact) => contact.id !== contactId);

    await fs.writeFile(contactsPath, JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  // ...твой код
  try {
    const contacts = await listContacts();

    const result = contacts.map((contact) => [
      ...contact,
      { name, email, phone },
    ]);

    await fs.writeFile(contactsPath, JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
