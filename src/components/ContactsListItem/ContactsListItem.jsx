import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Modal } from 'components';

import { useModal } from 'hooks';
import { deleteContact } from 'state';

export const ContactsListItem = ({ item }) => {
  const dispatch = useDispatch();

  const { isOpen, openModal, closeModal } = useModal();

  const handleDeleteContact = item => {
    dispatch(deleteContact(item.id))
      .unwrap()
      .then(() => toast.success(`${item.name} was deleted.`))
      .catch(() =>
        toast.error('Sorry, something went wrong. Please try again.')
      );
  };

  return (
    <>
      <li
        key={item.id}
        className="p-4 w-[100%] flex flex-col gap-6 bg-violet-500 rounded shadow-xl text-center"
      >
        <h2 className="font-bold text-white text-lg ">
          {item.name}: {item.number}
        </h2>
        <div className="flex justify-between ">
          <button
            onClick={openModal}
            className=" btn max-w-xs w-[80px] min-h-[30px] h-[30px]   text-black bg-green-400 hover:bg-green-700 hover:text-white"
            type="button"
          >
            Edit
          </button>
          <button
            className="btn max-w-xs w-[80px] min-h-[30px] h-[30px]   text-black bg-red-400 hover:bg-red-700 hover:text-white"
            type="button"
            onClick={() => handleDeleteContact(item)}
          >
            Delete
          </button>
        </div>
      </li>
      {isOpen && <Modal item={item} close={closeModal} isEdit={isOpen}></Modal>}
    </>
  );
};
