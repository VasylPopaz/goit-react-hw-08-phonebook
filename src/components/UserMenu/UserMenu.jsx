import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { IoLogOut } from 'react-icons/io5';

import { useAuth } from 'hooks';
import { logOut } from 'state';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOutClick = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {})
      .catch(error =>
        toast.error('Sorry, something went wrong. Please try again.')
      );
  };

  return (
    <div className="flex gap-4 items-center sm:flex-col sm:items-end ">
      <p>
        Welcome , <span className="font-bold">{user}</span>
      </p>
      <button
        className="logout-btn relative  p-[1px] flex justify-between items-center w-[100px] text-violet-950  text-xl hover:text-white "
        type="button"
        onClick={handleLogOutClick}
      >
        Log out
        {<IoLogOut size={25} />}
      </button>
    </div>
  );
};
