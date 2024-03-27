import css from './Contact.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const Contact = ({ contact: { id, name, number }, onDelete }) => {
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
        <button className={css.btn} type="button" onClick={() => {
          onDelete(id)
        }}>Delete
        </button>
      </div>
    </>
  )
}

export default Contact