const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  return await fs
    .readFile(contactsPath, "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err.message));
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();

    const contact = contacts.find((contact) => contact.id === +contactId);
    return contact;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();

    const result = contacts.filter((contact) => contact.id !== +contactId);

    await fs.writeFile(contactsPath, JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  const id = nanoid();
  try {
    const contacts = await listContacts();

    const result = [
      ...contacts,
      {
        id,
        name: name,
        email: email,
        phone: phone,
      },
    ];

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
