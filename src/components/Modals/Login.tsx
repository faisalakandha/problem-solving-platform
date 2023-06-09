import React from 'react';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {

    return (
        <form className='space-y-6 px-6 pb-4'>
            <h3 className='text-xl font-medium text-white'>Sign Into LeetClone</h3>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Email
                </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    className='
                       border-2 outline-none sm:text-sm rounded-lg focus:blue-ring-500 focus:border-blue-500
                       block w-full p-2.5 bg-gray-600 placeholder-gray-500 text-white
                    '
                    placeholder='youremail@email.com'
                />
            </div>
            <div>
                <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
                    Password
                </label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    className='
                       border-2 outline-none sm:text-sm rounded-lg focus:blue-ring-500 focus:border-blue-500
                       block w-full p-2.5 bg-gray-600 placeholder-gray-500 text-white
                    '
                    placeholder='************************'
                />
                <button
                    type='submit'
                    className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
                        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s mt-10'
                >
                    Login
                </button>
                <button className='flex w-full justify-end'>
                    <a href='' className='text-sm block text-brand-orange hover:underline w-full text-right'>
                        Forgot password?
                    </a>
                </button>
                <div className='text-sm font-medium text-gray-300 mt-10'>
                    Not Registered? {" "}
                    <a href='#' className='text-blue-700 hover-underline'>
                        Create Account
                    </a>
                </div>
            </div>
        </form>
    );
}
export default Login;