// import PropTypes from 'prop-types';
// import { ListContactItem } from "components/ListContactItem/ListContactItem"
import { List } from './ListContact-style';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ListContactItem } from 'components/ListContactItem/ListContactItem';


export const ListContact = ()=>{

const contacts = useSelector(getContacts)

const filter = useSelector(getFilter)

const handleFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))

        return (
            <>
                <List>
                    {handleFilter?handleFilter.map(({ id, name, number }) =>
                        <ListContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        /> ) : contacts.map(({ id, name, number }) =>
                        <ListContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        /> )}
                </List>
            </>
        )
    }


// ListContact.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     })),
//     deleteContact:PropTypes.func.isRequired
// }