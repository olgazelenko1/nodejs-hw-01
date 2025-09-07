import { getAllContacts } from "./getAllContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await getAllContacts();
    const removeContacts = contacts.pop();
    await writeContacts(contacts);
    return removeContacts;
};

removeLastContact();
