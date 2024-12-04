import { Link } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';

const SignUp = () => {

  // const { emailPasswordSignUp, updateProfileData } = useContext(AuthContext)

  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password)


    // emailPasswordSignUp(email, password)
    //     .then((result) => {
    //         // console.log(result)
    //         notifySuccess()

    //         updateProfileData(name, photo)
    //             .then(() => {
    //                 // console.log("Name and Photo Update")
    //                 // navigate('/')
    //             })
    //             .catch(updateError => {
    //                 // console.log(updateError.message)
    //             })
    //         navigate('/')
    //     })
    //     .catch((error => {
    //         return toast.error(error.message)
    //         // return toast.error("Length must be at least 6 character")
    //     }))



  }
  return (
    <div>
      <div>
        <div className="flex justify-center items-center md:min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-8">
          {/* Form Container */}
          <div className="card w-full max-w-lg p-8 bg-white shadow-2xl rounded-xl border-t-4 border-purple-500">
            <h1 className="md:text-3xl text-xl text-center font-serif font-bold mb-6 text-purple-600">
              Register Your Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="form-control">
                <label className="label font-medium text-gray-700">
                  <span>Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                />
              </div>
              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label font-medium text-gray-700">
                  <span>Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                />
              </div>
              {/* Email Input */}
              <div className="form-control">
                <label className="label font-medium text-gray-700">
                  <span>Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                  required
                />
              </div>
              {/* Password Input */}
              <div className="form-control relative">
                <label className="label font-medium text-gray-700">
                  <span>Password</span>
                </label>
                <input
                  name="password"
                  type='text'
                  placeholder="Enter your password"
                  className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                  required
                />
              </div>
              {/* Submit Button */}
              <div className="form-control">
                <button className="btn w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-600">
                  Register
                </button>
              </div>
            </form>
            {/* Divider */}
            <div className="text-center my-4 text-gray-500 relative">
              <span className="bg-white px-3">OR</span>
              <hr className="absolute top-3 w-full border-gray-300" />
            </div>
            {/* Google Login Button */}
            <div className="flex justify-center">
              <GoogleSignIn />
            </div>
            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link to="/signIn" className="text-blue-500 font-semibold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignUp;