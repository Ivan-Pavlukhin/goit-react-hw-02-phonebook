import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import { FindContacts } from "./components/FindContacts";
export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <AddContact onSubmit={this.addContact} />
        <FindContacts />
        <ContactList contactsList={this.state.contacts} />
      </>
    );
  }
}
