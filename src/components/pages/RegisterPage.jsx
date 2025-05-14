import RegistrationForm from "../auth/RegistrationForm";

export default function RegisterPage() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen p-4">
        <div className="register-container w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-blue-600 dark:bg-blue-700 p-6 text-center">
            <i className="fas fa-user-plus text-white text-4xl mb-3"></i>
            <h1 className="text-2xl font-bold text-white">
              Create Your Account
            </h1>
            <p className="text-blue-100">Join our community today</p>
          </div>

          <div className="p-6 sm:p-8">
           <RegistrationForm/>
          </div>
        </div>
      </main>
    </>
  );
}
