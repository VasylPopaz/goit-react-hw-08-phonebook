import { AuthNav, Navigation, UserMenu } from 'components';

import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header
      className="py-4 px-8
    gap-2 flex justify-between items-center border-b-4 border-solid border-black bg-violet-500 text-white text-xl"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
