export default function HeroSection() {
  return (
    <>
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
    </>
  );
}
