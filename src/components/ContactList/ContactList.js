export const ContactList = ({ contactsList }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contactsList.map((item) => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    </>
  );
};
