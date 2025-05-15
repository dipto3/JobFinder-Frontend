export default function HomePage() {
  return (
    <>
      <main className="mt-28 px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <section className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Search through thousands of job opportunities and take the next step
            in your career
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src="./svg/search-line.svg"
                    alt="Search"
                    className="w-5 h-5 text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src="./svg/map-pin-line.svg"
                    alt="Location"
                    className="w-5 h-5 text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                Search Jobs
              </button>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-2xl font-bold text-center dark:text-white mb-10">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="#" className="category-card">
              <div className="h-full p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">
                <img
                  src="./svg/macbook-fill.svg"
                  alt="Remote"
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-lg font-medium dark:text-white">Remote</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  125 jobs
                </p>
              </div>
            </a>
            <a href="#" className="category-card">
              <div className="h-full p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">
                <img
                  src="./svg/briefcase-4-fill.svg"
                  alt="Full-Time"
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-lg font-medium dark:text-white">
                  Full-Time
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  342 jobs
                </p>
              </div>
            </a>
            <a href="#" className="category-card">
              <div className="h-full p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">
                <img
                  src="./svg/timer-2-fill.svg"
                  alt="Part-Time"
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-lg font-medium dark:text-white">
                  Part-Time
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  87 jobs
                </p>
              </div>
            </a>
            <a href="#" className="category-card">
              <div className="h-full p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">
                <img
                  src="./svg/graduation-cap-fill.svg"
                  alt="Internship"
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-lg font-medium dark:text-white">
                  Internship
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  56 jobs
                </p>
              </div>
            </a>
          </div>
        </section>

        <section className="my-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold dark:text-white">
              Featured Jobs
            </h2>
            <a
              href="./all-jobs.html"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all jobs
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="./job-details.html" className="job-card">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-500">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <img
                      src="./svg/macbook-fill.svg"
                      alt="Company"
                      className="w-12 h-12 border border-gray-200 dark:border-gray-600 rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">
                        Software Developer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        TechCorp Inc.
                      </p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">
                    $10,000
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <img
                      src="./svg/map-pin-line.svg"
                      alt="Location"
                      className="w-4 h-4 mr-1"
                    />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <img
                      src="./svg/timer-2-line.svg"
                      alt="Type"
                      className="w-4 h-4 mr-1"
                    />
                    Full-Time
                  </span>
                </div>
              </div>
            </a>

            <div className="job-card">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:border-blue-500">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <img
                      src="./svg/macbook-fill.svg"
                      alt="Company"
                      className="w-12 h-12 border border-gray-200 dark:border-gray-600 rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">
                        UX Designer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        DesignHub
                      </p>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">
                    $8,500
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <img
                      src="./svg/map-pin-line.svg"
                      alt="Location"
                      className="w-4 h-4 mr-1"
                    />
                    Remote
                  </span>
                  <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <img
                      src="./svg/timer-2-line.svg"
                      alt="Type"
                      className="w-4 h-4 mr-1"
                    />
                    Contract
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter to receive the latest job
              opportunities
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
      </main>
    </>
  );
}
