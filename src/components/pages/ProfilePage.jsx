import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import ProfileLoadingSkeleton from "../LoadingSkeleton/ProfileLoadingSkeleton";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const { api } = useAxios();
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function fetchProfile() {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/candidate/profile`
        );
        console.log(response?.data.data);
        setUser(response?.data.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [api]);
  if (loading) {
    return <ProfileLoadingSkeleton />;
  }

  return (
    <>
      <main className="mt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src="./svg/user-3-fill.svg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md">
                <img
                  src="./svg/camera-fill.svg"
                  alt="Edit"
                  className="w-5 h-5"
                />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user?.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Senior UI/UX Designer
                  </p>
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <img
                      src="./svg/map-pin-2-line.svg"
                      alt="Location"
                      className="w-5 h-5 mr-2"
                    />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="./profile-edit.html"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
                  >
                    Edit Profile
                  </a>
                  <button className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg transition duration-200">
                    Share
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    142
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Connections
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    24
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Applied Jobs
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    8
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Saved Jobs
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    5
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Interviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                About
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Creative UI/UX designer with 8+ years of experience designing
                beautiful, functional interfaces for web and mobile
                applications. Passionate about user-centered design and creating
                intuitive experiences that solve real problems.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <img
                    src="./svg/mail-line.svg"
                    alt="Email"
                    className="w-5 h-5 mr-3 text-blue-500"
                  />
                  <span>alex.johnson@example.com</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="./svg/phone-line.svg"
                    alt="Phone"
                    className="w-5 h-5 mr-3 text-blue-500"
                  />
                  <span>(415) 555-0123</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="./svg/link.svg"
                    alt="Website"
                    className="w-5 h-5 mr-3 text-blue-500"
                  />
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    portfolio.example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src="./svg/linkedin-fill.svg"
                    alt="LinkedIn"
                    className="w-5 h-5 mr-3 text-blue-500"
                  />
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/alexjohnson
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Skills
                </h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  <img src="./svg/add-line.svg" alt="Add" className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="skill-tag transition duration-200">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                    UI/UX Design
                    <button className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100">
                      <img
                        src="./svg/close-line.svg"
                        alt="Remove"
                        className="w-3 h-3"
                      />
                    </button>
                  </span>
                </div>
                <div className="skill-tag transition duration-200">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                    Figma
                    <button className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100">
                      <img
                        src="./svg/close-line.svg"
                        alt="Remove"
                        className="w-3 h-3"
                      />
                    </button>
                  </span>
                </div>
                <div className="skill-tag transition duration-200">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                    User Research
                    <button className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100">
                      <img
                        src="./svg/close-line.svg"
                        alt="Remove"
                        className="w-3 h-3"
                      />
                    </button>
                  </span>
                </div>
                <div className="skill-tag transition duration-200">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                    Prototyping
                    <button className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100">
                      <img
                        src="./svg/close-line.svg"
                        alt="Remove"
                        className="w-3 h-3"
                      />
                    </button>
                  </span>
                </div>
                <div className="skill-tag transition duration-200">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                    HTML/CSS
                    <button className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100">
                      <img
                        src="./svg/close-line.svg"
                        alt="Remove"
                        className="w-3 h-3"
                      />
                    </button>
                  </span>
                </div>
                <div className="skill-tag transition duration-200">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                    JavaScript
                    <button className="ml-2 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100">
                      <img
                        src="./svg/close-line.svg"
                        alt="Remove"
                        className="w-3 h-3"
                      />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  <img src="./svg/add-line.svg" alt="Add" className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="profile-section p-4 rounded-lg">
                  <div className="flex items-start">
                    <img
                      src="./svg/building-3-fill.svg"
                      alt="Company"
                      className="w-12 h-12 mt-1 mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Senior UI/UX Designer
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          2019 - Present
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        TechSolutions Inc.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Lead designer for the company's flagship product.
                        Responsible for user research, wireframing, prototyping,
                        and collaborating with engineering teams to implement
                        designs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="profile-section p-4 rounded-lg">
                  <div className="flex items-start">
                    <img
                      src="./svg/building-3-fill.svg"
                      alt="Company"
                      className="w-12 h-12 mt-1 mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          UI Designer
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          2016 - 2019
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Digital Creations
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Designed interfaces for web and mobile applications.
                        Worked closely with product managers to translate
                        business requirements into intuitive user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  <img src="./svg/add-line.svg" alt="Add" className="w-5 h-5" />
                </button>
              </div>

              <div className="profile-section p-4 rounded-lg">
                <div className="flex items-start">
                  <img
                    src="./svg/graduation-cap-fill.svg"
                    alt="University"
                    className="w-12 h-12 mt-1 mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Master of Design
                      </h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2014 - 2016
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Stanford University
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Specialized in Human-Computer Interaction and User
                      Experience Design. Thesis on "Emotional Design in
                      Productivity Applications".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Portfolio Projects
                </h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  <img src="./svg/add-line.svg" alt="Add" className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform hover:scale-110"
                  onclick="moveCarousel(-1)"
                >
                  <img
                    src="./svg/arrow-left-line.svg"
                    alt="Previous"
                    className="w-5 h-5"
                  />
                </button>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform hover:scale-110"
                  onclick="moveCarousel(1)"
                >
                  <img
                    src="./svg/arrow-right-line.svg"
                    alt="Next"
                    className="w-5 h-5"
                  />
                </button>

                <div className="overflow-hidden">
                  <div
                    id="carouselTrack"
                    className="flex transition-transform duration-300"
                  >
                    <div className="min-w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
                          <img
                            src="https://placehold.co/600x400?text=E-commerce+Redesign"
                            alt="Project"
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              E-commerce Redesign
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Complete redesign of checkout flow increased
                              conversions by 28%
                            </p>
                            <div className="mt-3 flex items-center text-sm text-blue-600 dark:text-blue-400">
                              <img
                                src="./svg/link.svg"
                                alt="Link"
                                className="w-4 h-4 mr-1"
                              />
                              <a href="#" className="hover:underline">
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
                          <img
                            src="https://placehold.co/600x400?text=Fitness+App"
                            alt="Project"
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Fitness Mobile App
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Designed workout tracking experience with 94% user
                              satisfaction
                            </p>
                            <div className="mt-3 flex items-center text-sm text-blue-600 dark:text-blue-400">
                              <img
                                src="./svg/link.svg"
                                alt="Link"
                                className="w-4 h-4 mr-1"
                              />
                              <a href="#" className="hover:underline">
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
                          <img
                            src="https://placehold.co/600x400?text=Banking+App"
                            alt="Project"
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Banking App UI
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Redesigned mobile banking interface for better
                              usability
                            </p>
                            <div className="mt-3 flex items-center text-sm text-blue-600 dark:text-blue-400">
                              <img
                                src="./svg/link.svg"
                                alt="Link"
                                className="w-4 h-4 mr-1"
                              />
                              <a href="#" className="hover:underline">
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
                          <img
                            src="https://placehold.co/600x400?text=Dashboard+Design"
                            alt="Project"
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Analytics Dashboard
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Created data visualization dashboard for business
                              metrics
                            </p>
                            <div className="mt-3 flex items-center text-sm text-blue-600 dark:text-blue-400">
                              <img
                                src="./svg/link.svg"
                                alt="Link"
                                className="w-4 h-4 mr-1"
                              />
                              <a href="#" className="hover:underline">
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  <button
                    className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                    onclick="goToSlide(0)"
                  ></button>
                  <button
                    className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                    onclick="goToSlide(1)"
                  ></button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h2>

              <div className="space-y-4">
                <div className="flex items-start pb-4 border-b border-gray-200 dark:border-gray-700">
                  <img
                    src="./svg/briefcase-4-line.svg"
                    alt="Activity"
                    className="w-6 h-6 mt-1 mr-4 text-blue-500"
                  />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Applied
                      </span>
                      for Senior Product Designer at
                      <span className="text-blue-600 dark:text-blue-400">
                        CreativeMinds
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      2 days ago
                    </p>
                  </div>
                </div>

                <div className="flex items-start pb-4 border-b border-gray-200 dark:border-gray-700">
                  <img
                    src="./svg/bookmark-line.svg"
                    alt="Activity"
                    className="w-6 h-6 mt-1 mr-4 text-blue-500"
                  />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Saved
                      </span>
                      UI/UX Designer position at
                      <span className="text-blue-600 dark:text-blue-400">
                        DesignHub
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      1 week ago
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <img
                    src="./svg/user-received-line.svg"
                    alt="Activity"
                    className="w-6 h-6 mt-1 mr-4 text-blue-500"
                  />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Connected
                      </span>
                      with
                      <span className="text-blue-600 dark:text-blue-400">
                        Sarah Williams
                      </span>
                      , Recruiter at TechStart
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      2 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
