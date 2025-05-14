import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  function submitForm(formData) {
    console.log(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
          <label
            for="fullname"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left"
          >
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-user text-gray-400"></i>
            </div>
            <input
              type="text"
              id="fullname"
              name="full_name"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              {...register("full_name", {
                required: "Full Name is required",
              })}
            />
          </div>
        </div>
        {errors.full_name && (
          <p className="text-red-500 text-left mt-1">
            {errors.full_name.message}
          </p>
        )}
        <div className="mb-4">
          <label
            for="email"
            className="text-left block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-envelope text-gray-400"></i>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-left mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            for="password"
            className="text-left block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-lock text-gray-400"></i>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be 8 characters",
                },
              })}
            />
            <button
              type="button"
              id="togglePassword"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <i className="fas fa-eye text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"></i>
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-left mt-1">
              {errors.password.message}
            </p>
          )}
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>Password Strength</span>
              <span id="strengthText">Weak</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
              <div
                id="passwordStrength"
                className="password-strength bg-red-500 rounded-full h-1"
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label
            for="confirmPassword"
            className="text-left block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-lock text-gray-400"></i>
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
            <button
              type="button"
              id="toggleConfirmPassword"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <i className="fas fa-eye text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"></i>
            </button>
          </div>
          <p id="passwordMatch" className="hidden text-xs text-red-500 mt-1">
            <i className="fas fa-exclamation-circle mr-1"></i> Passwords do not
            match
          </p>
        </div>

        <div className="flex items-center mb-6">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
          />
          <label
            for="terms"
            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 mb-4"
        >
          Create Account
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
            OR
          </span>
          <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            className="social-btn flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200"
          >
            <i className="fab fa-google text-red-500 mr-2"></i>
            Google
          </button>
          <button
            type="button"
            className="social-btn flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200"
          >
            <i className="fab fa-linkedin text-blue-600 mr-2"></i>
            LinkedIn
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Sign in
          </Link>
        </div>
      </form>
    </>
  );
}
