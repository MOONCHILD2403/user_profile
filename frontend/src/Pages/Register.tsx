
function Register() {

    return (
      <div className="w-full max-w-xs mx-auto pt-4">
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email-id"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Set Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"/>
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"/>
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
    )
  }
  
export default Register;
  