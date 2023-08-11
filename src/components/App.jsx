import {Section} from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import {ListContact} from './ListContact/ListContact';
import {Filter} from './FilterContact/FilterContact';


export const App = () => {

  
  return (
    <>
        <Section title="Phonebook">
          <FormContact />
        </Section>
        <Section title="Contacts">
          <Filter/>
          <ListContact/>
        
        </Section>
      </>
    );
}
