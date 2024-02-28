import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactsList, Filter, Loader } from 'components';

import { fetchContacts } from 'state';
import { useContacts } from 'hooks';

const Contacts = () => {
  const { isLoading } = useContacts();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="py-8 mx-auto max-w-[320px]">
      <Filter />
      <ContactsList />
      {isLoading && <Loader />}
    </div>
  );
};

export default Contacts;
