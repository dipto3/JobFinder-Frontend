import DefaultLogo from "../assets/svg/category-svgrepo-com.svg";

export default function CategoryCard({ category }) {
  return (
    <>
      <a href="#" className="category-card">
        <div className="h-full p-6 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center text-center">
          <img
            src={category.logo ?? DefaultLogo}
            alt="Remote"
            className="w-14 h-14 mb-4"
          />
          <h3 className="text-lg font-medium dark:text-white">
            {category.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            125 jobs
          </p>
        </div>
      </a>
    </>
  );
}
