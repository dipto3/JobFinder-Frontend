import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import CategoryCard from "./CategoryCard";
import CategoryCardSkeleton from "./LoadingSkeleton/CategoryCardSkeleton";

export default function CategorySection() {
  const { auth } = useAuth();
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);
  // console.log(auth);
  useEffect(() => {
    setCategoryLoading(true);
    async function getCategories() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/categories`
        );
        if (response.status == 200) {
          setCategory(response.data.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setCategoryLoading(false);
      }
    }
    getCategories();
  }, []);
  return (
    <>
      <section className="my-16">
        <h2 className="text-2xl font-bold text-center dark:text-white mb-10">
          Browse Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoryLoading ? (
            <>
              <CategoryCardSkeleton />
            </>
          ) : error ? (
            <p>Something went wrong.</p>
          ) : category.length > 0 ? (
            category.map((item) => (
              <CategoryCard key={item.id} category={item} />
            ))
          ) : (
            <p>Not Available</p>
          )}
        </div>
      </section>
    </>
  );
}
