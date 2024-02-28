import { ContactsListItem, Modal } from 'components';

import { useContacts, useModal } from 'hooks';

export const ContactsList = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const { contacts, isLoading, error, filteredContacts, filter } =
    useContacts();

  return (
    <>
      <button
        onClick={openModal}
        className="btn mb-4 max-w-xs w-full  text-black bg-green-400 hover:bg-green-700 hover:text-white "
      >
        Add Contact
      </button>
      {contacts.length ? (
        <h2 className="text-violet-800 text-3xl font-bold text-center mb-4">
          Contacts - {contacts.length}
        </h2>
      ) : null}

      <div className="  px-2 max-h-[485px] overflow-auto">
        <ul className=" flex flex-col gap-2">
          {filteredContacts.map(item => {
            return <ContactsListItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
      {!filteredContacts.length && contacts.length && !error && !isLoading ? (
        <h2 className="text-red-400 text-3xl font-bold text-center mb-4">
          No results for "{filter}".
        </h2>
      ) : null}
      {isOpen && <Modal close={closeModal}></Modal>}
    </>
  );
};
