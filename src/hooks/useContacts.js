import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'state';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    contacts,
    isLoading,
    filter,
    filteredContacts,
  };
};
