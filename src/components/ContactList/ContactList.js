import PropTypes from "prop-types";
import style from "./ContactList.module.css";
export const ContactList = ({ contactsList, onClick }) => {
  return (
    <>
      <ul className={style.list}>
        {contactsList.map((item) => (
          <li key={item.id} className={style.item}>
            <span>
              {item.name}: {item.number}
            </span>
            <button
              className={style.list__button}
              onClick={() => onClick(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// ContactList.propsTypes = {
//   contactsList: PropTypes.arrayFor(
//     PropTypes.shape({
//       id: PropTypes.number.required,
//       name: PropTypes.string.required,
//       number: PropTypes.number.required,
//     })
//   ),
// };
