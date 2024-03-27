import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";
import css from './ContactForm.module.css'


const ContactForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format: XXX-XX-XX')
      .required("Required")
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      id: '',
      name: values.name.trim(),
      number: values.number.trim()
    }));
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>Name
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage className={css.errorMessage} name="name" component="span" />
          </label>
          <label className={css.label}>Number
            <Field className={css.field} type="text" name="number" />
            <ErrorMessage className={css.errorMessage} name="number" component="span" />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm;