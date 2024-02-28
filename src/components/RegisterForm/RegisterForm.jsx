import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Input } from 'components';

import { signUp } from 'state';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        toast.success(`Thank you for registering on our website!`);
        reset();
      })
      .catch(error => {
        switch (String(error)) {
          case '400':
            toast.error('User with this email already exists.');
            break;
          case '404':
            toast.error('Sorry, something went wrong. Please try again.');
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="hero-content flex-col gap-8">
        <div className="text-center lg:text-left">
          <h2 className="text-violet-800 text-5xl font-bold">Sign up</h2>
        </div>
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(submit)}
            className="card-body text-lg text-black  font-bold bg-white"
          >
            <Input register={register} name="name" label="Name" type="text" />
            <Input
              register={register}
              name="email"
              label="Email"
              type="email"
            />
            <Input
              register={register}
              name="password"
              label="Password"
              type="password"
              minLength={7}
            />
            <div className="form-control mt-6">
              <button className="btn text-black bg-violet-400 hover:bg-violet-700 hover:text-white">
                Sign up
              </button>
            </div>
            <p className=" text-center">
              Have an account ?{' '}
              <Link
                to={'/login'}
                className=" text-violet-400 hover:text-violet-700 hover:underline"
              >
                Log in
              </Link>{' '}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
