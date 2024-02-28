import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul className="flex gap-4 sm:flex-col  sm:text-center ">
        <li>
          {' '}
          <NavLink className=" nav-link " to={'/'}>
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li>
            <NavLink className=" nav-link " to={'contacts'}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
