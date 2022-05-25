import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [signInWithGoogle, sUser, sLoading, sError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    let signInErrorMessage;
    if (loading || sLoading || updating) {
        return <button class="btn btn-square loading"></button>
    }
    if (error || sError || upError) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || sError?.message || upError.message}</p>
    }
    if (user || sUser) {
        console.log(user || sUser);
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('Update successfull');
        navigate('/home');

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="name"
                            className="input input-bordered"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Enter your name'
                                }
                            })}
                        />
                        <label>
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>

                    </div>
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
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
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
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>

                    </div>
                    {signInErrorMessage}
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <p className='flex justify-center items-center'><small>Already have an account? <Link className='font-bold' to='/login'>Please login</Link></small> </p>
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

export default SignUp;