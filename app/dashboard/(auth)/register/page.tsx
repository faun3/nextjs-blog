"use client";

import Link from "next/link";

const Register = () => {
  return (
    <div>
      <form className="flex flex-col max-w-[clamp(60%,60%,700px)] mx-auto">
        <label htmlFor="username" className="mb-1">
          Username
        </label>
        <input
          type="text"
          placeholder="kris668"
          required
          name="username"
          id="username"
          className="px-2 py-2 rounded-lg text-slate-950 mb-6 focus:outline-none"
        />
        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="krissyv@gmail.com"
          required
          name="email"
          id="username"
          className="px-2 py-2 rounded-lg text-slate-950 mb-6 focus:outline-none"
        />
        <label htmlFor="password" className="mb-1">
          Password
        </label>
        <input
          type="password"
          required
          name="password"
          id="password"
          className="px-2 py-2 rounded-lg text-slate-950 mb-2 focus:outline-none"
        />
        <button className="bg-emerald-500 text-white px-4 py-2 text-xl rounded-lg my-5 hover:bg-emerald-800 active:bg-emerald-800 active:scale-95">
          Register
        </button>
      </form>
      <Link
        href={"/dashboard/login"}
        className=" text-slate-400 text-center w-full inline-block underline"
      >
        Login with an existing account
      </Link>
    </div>
  );
};
export default Register;
