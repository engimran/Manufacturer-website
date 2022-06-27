import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, sUser, sLoading, sError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user)

    let signInErrorMessage;
    if (loading || sLoading) {
        return <button className="btn btn-square loading"></button>
    }
    if (error || sError) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || sError?.message}</p>
    }
    if (user || sUser) {
        navigate(from, { replace: true });
    }


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);

    }


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="email"
                            className="input input-bordered"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Enter your email address'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Provide a vaild mail'
                                }
                            })}
                        />
                        <label>
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 Character'
                                }
                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>

                    </div>
                    {signInErrorMessage}
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='flex justify-center items-center'><small>New user? <Link className='font-bold' to='/signup'> Create New Account</Link></small> </p>
                <div className="divider">
                    OR
                </div>
                <div className="form-control card-body">
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-secondary">Signin With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;