
function Login() {

    const allSkills = [
        "Material Tailwind HTML",
        "Material Tailwind React",
        "Material Tailwind Vue",
        "Material Tailwind Angular",
        "Material Tailwind Svelte",
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "Java"
      ];

    return (
      <div className="w-full max-w-4xl mx-auto pt-4">
      <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-6 mb-4">
        <h1 className="text-xl font-bold leading-7 text-gray-700">Choose skills</h1>
        <div className="mb-4 pt-2 w-6/12">
            <button type="button" className="inline-flex justify-between items-center w-full rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Select Skills
            </button>
          
            <div className="z-10 mt-2 w-full rounded-md bg-white shadow-lg">
                <ul className="py-2 text-md text-gray-700">
                {allSkills.map((skill) => (
                    <li key={skill} className="px-4 py-2 hover:bg-gray-100">
                    <label className="inline-flex items-center">
                        <input
                        type="checkbox"
                        className="form-checkbox"
                        />
                        <span className="ml-2">{skill}</span>
                    </label>
                    </li>
                ))}
                </ul>
            </div>
          
        </div>
        
        

        <div className="flex items-center justify-center mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Previous
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
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
  