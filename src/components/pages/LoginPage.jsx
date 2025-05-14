import LoginForm from "../auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen p-4">
        <div className="login-container w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-blue-600 dark:bg-blue-700 p-6 text-center">
            <i className="fas fa-search text-white text-4xl mb-3"></i>
            <h1 className="text-2xl font-bold text-white">
              Welcome to JobFinder
            </h1>
            <p className="text-blue-100">Sign in to access your account</p>
          </div>

          <div className="p-6 sm:p-8">
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
}
