
function Login() {

    return (
      <div className="w-full max-w-4xl mx-auto pt-4">
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-6 mb-4">
        <h1 className="text-xl font-bold leading-7 text-gray-700">Personal Information</h1>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">
                First name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your First Name"/>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">
                Last name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Last Name"/>
            </div>

            <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter id"/>
            </div>

            <div className="col-span-full">
            <label htmlFor="street-address" className="block text-gray-700 text-sm font-bold mb-2">
                Address line 1
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Address"/>
            </div>

            <div className="col-span-full">
            <label htmlFor="street-address" className="block text-gray-700 text-sm font-bold mb-2">
                Address line 2
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Address"/>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                Country
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Country where you live"/>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                City
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your City"/>
            </div>

            <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-gray-700 text-sm font-bold mb-2">
                State / Province
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your State"/>
            </div>

            <div className="sm:col-span-2">
            <label htmlFor="postal-code" className="block text-gray-700 text-sm font-bold mb-2">
                ZIP / Postal code
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Enter your Pincode"/>
            </div>
        </div>

        <div className="flex items-center justify-center mt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Next
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Cancel
            </button>
        </div>

      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
    )
  }
  
export default Login;
  