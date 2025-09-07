import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';


export const addOneContact = async () => {
    const oldContacts = await readContacts() || [];
    const newContact = createFakeContact();
    const allContacts = [...oldContacts, newContact];
    await writeContacts(allContacts);
    return newContact;
};
