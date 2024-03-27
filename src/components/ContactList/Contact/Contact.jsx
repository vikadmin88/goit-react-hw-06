import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'


const Contact = ( { contact: { id, name, number } } ) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.textWrap}>
        <p className={css.itemText}>
          <IoPerson />{name}
        </p>
        <p className={css.itemText}>
          <FaPhone />{number}
        </p>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  )
}

export default Contact