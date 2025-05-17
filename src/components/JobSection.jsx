export default function JobSection() {
  return (
    <>
      <section className="my-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold dark:text-white">Featured Jobs</h2>
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
    </>
  );
}
