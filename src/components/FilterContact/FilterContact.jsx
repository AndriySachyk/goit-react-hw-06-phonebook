// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BoxFilter, LableFilter, InputFilter} from './FilterContact-style';
import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';



export const Filter= ()=>{
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()


   const handleChange = (even)=>{
        dispatch(filterContact(even.target.value))
    }

return (
    <>
        <BoxFilter>
            <LableFilter htmlFor="filter">Find contacts by name</LableFilter>
            <InputFilter
                type="text"
                name="filter"
                onChange={handleChange}
                id="filter"
                value={filter.value}
            />
        </BoxFilter>
        
    </>
)
}


// Filter.propTypes = {
//     handleChangeFilter: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired,
// }