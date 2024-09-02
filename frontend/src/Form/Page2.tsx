
function Login() {

    return (
      <div className="w-full max-w-4xl mx-auto pt-4">
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-6 mb-4">
        {/* <h1 className="text-xl font-bold leading-7 text-gray-700">Upload upto 3 Files</h1> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-4">
            Upload upto 3 Files
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50" type="file" multiple />
          <p className="mt-3 text-sm text-gray-700">PNG or PDF.</p>
        </div>
        
        

        <div className="flex items-center justify-center mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Previous
            </button>
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
  