import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data)
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
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
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