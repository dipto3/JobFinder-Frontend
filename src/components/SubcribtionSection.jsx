export default function SubcribtionSection() {
  return (
    <>
      <section className="my-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Subscribe to our newsletter to receive the latest job opportunities
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 pr-32 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <select className="h-full px-4 border-l border-gray-300 dark:border-gray-600 rounded-r-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none">
                  <option>All Categories</option>
                  <option>Tech</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
