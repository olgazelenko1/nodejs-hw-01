import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const oldContacts = await readContacts() || [];
    const newContacts = [];
    for (let i = 0; i < number; i++) {
        newContacts.push(createFakeContact());
    }
    const allContacts = [...oldContacts, ...newContacts];
    await writeContacts(allContacts);
};
generateContacts(5);
