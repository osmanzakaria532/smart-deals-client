import React from 'react';

const ForgotPassword = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-[400px] mx-auto shrink-0 shadow-2xl ">
          <div className="card-body">
            <h1 className="text-5xl text-center font-bold mb-10">Reset Password</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input w-full" placeholder="Email" />
              <button className="btn btn-neutral mt-4">Reset PassWord</button>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
