import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Input } from 'components';

import { useContacts } from 'hooks';
import { addContact, updateContact } from 'state';

export function EditContactForm({ item, close, isEdit }) {
  const { contacts } = useContacts();

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    if (isEdit) {
      if (item.name !== data.name || item.number !== data.number) {
        dispatch(updateContact({ id: item.id, body: data }))
          .unwrap()
          .then(() => {
            toast.success(`${data.name} was changed.`);
            close();
            reset();
          })
          .catch(() =>
            toast.error('Sorry, something went wrong. Please try again.')
          );
      } else {
        toast.warning(`${data.name} has not been changed.`);
        close();
      }
    } else {
      if (
        contacts.find(
          elem => elem.name.toLowerCase() === data.name.toLowerCase()
        )
      )
        return toast.warning(`${data.name} is already in contacts!`);
      dispatch(addContact(data))
        .unwrap()
        .then(() => {
          toast.success(` ${data.name} was added.`);
          close();
          reset();
        })
        .catch(() =>
          toast.error('Sorry, something went wrong. Please try again.')
        );
    }
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(submit)}
          className="card-body text-lg font-bold bg-white text-black "
        >
          <Input
            register={register}
            name="name"
            label="Name"
            type="text"
            defaultValue={item?.name}
          />
          <Input
            register={register}
            name="number"
            label="Number"
            type="tel"
            defaultValue={item?.number}
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="btn max-w-xs w-[80px] text-black bg-green-400 hover:bg-green-700 hover:text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={close}
              className="btn max-w-xs w-[80px] text-black bg-red-400 hover:bg-red-700 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
