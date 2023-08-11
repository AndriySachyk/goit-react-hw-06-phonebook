// import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Form, ButtonForm } from './FormContact-style';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';


export const FormContact = () => {


const dispatch = useDispatch()   
const contacts = useSelector(getContacts)

  
const handleSubmit = event => {
event.preventDefault();

  const form = event.target

  const newContact = {
    name: form.elements.name.value,
    number:form.elements.number.value,
    id: nanoid()
}

if (contacts.find(
  contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  )
  ) {
    return Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
  }
  
  // console.log('newcontact', newContact)


dispatch(addContact(newContact))
  form.reset()
  
};
  




  
  return (
    <>
      <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
      <label htmlFor="number">Number</label>
      <input
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
      <ButtonForm type="submit">Add Contact</ButtonForm>
      </Form>
    </>
)
}
    
    
    
      // handleChange = ({ target }) => {
      //   this.setState({
      //     [target.name]: target.value, 
      //   });
      // };
    
    
      // handleSubmit = event => {
      //   event.preventDefault();
    
      //   this.props.createContact({
      //     name: this.state.name,
      //     number: this.state.number,
      //   });
      //   this.setState({
      //     name: '',
      //     number: '',
      //   });
      // };
    
    
//     FormContact.propTypes = {
//       createContact: PropTypes.func.isRequired,
// }