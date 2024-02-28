import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'state';

export const Filter = () => {
  const dispatch = useDispatch();
  const { register } = useForm();

  return (
    <div className="form-control mb-4">
      <input
        className=" px-2  h-12 border-2 bg-white border-violet-400 rounded-lg outline-none  text-lg w-full max-w-xs focus:border-violet-600"
        placeholder="Find contacts by name"
        {...register('filter', {
          onChange: event => {
            dispatch(changeFilter(event.target.value.trim()));
          },
        })}
        type="text"
      />
    </div>
  );
};
