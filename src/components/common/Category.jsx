import { useEffect, useState } from "react";
import CategoryAddItem from "./CategoryAddItem";
import { supabase } from "../../supabase/supabaseClient";

function Category() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState("");
  // Fetch categories
  async function fetchCategories() {
    const { data, error } = await supabase.from("Categories").select("*");
    if (error) return;
    setCategories(data);
  }
  useEffect(function () {
    fetchCategories();
  }, []);
  // Create new categoty
  async function createCategory(data) {
    const { error } = await supabase.from("Categories").insert(data);
    fetchCategories();
    if (error) {
      console.log(error.message);
    }
  }

  // Handle Update
  async function updateCategory(data, id) {
    const { error } = await supabase
      .from("Categories")
      .update({ name: data })
      .eq("id", id);
    fetchCategories();
    if (error) {
      console.log(error.message);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (category) {
      !isEditing && createCategory({ name: category });
      setCategory("");
    }
  }
  // Handle delete posts
  async function deleteCategory(id) {
    await supabase.from("Categories").delete().eq("id", id);
    fetchCategories();
  }
  function handleUpdate(id) {
    setIsEditing((prev) => !prev);
    const categoryItem = categories.find((category) => category.id === id);
    setUpdatedCategory(categoryItem.name);
    // const updatedCategory = { ...categoryItem, name: category };
    updateCategory(category, id);
  }

  return (
    <div className="px-2">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Add Category</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center py-2"
        >
          {isEditing ? (
            <input
              onChange={(e) => setUpdatedCategory(e.target.value)}
              type="text"
              value={updatedCategory}
              placeholder="Enter category name..."
              required
              className="rounded-l border border-accent flex-grow focus:ring-0 outline-none focus:outline-none focus:border-accent/80"
            />
          ) : (
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              value={category}
              placeholder="Enter category name..."
              required
              className="rounded-l border border-accent flex-grow focus:ring-0 outline-none focus:outline-none focus:border-accent/80"
            />
          )}
          <button className="px-5 py-2 bg-green-500 border text-white font-semibold border-transparent rounded-r">
            Add Category
          </button>
        </form>
        <ul className="px-3 pt-2 flex flex-col gap-2">
          {categories.map((category) => (
            <CategoryAddItem
              key={category.id}
              category={category}
              onUpdate={handleUpdate}
              onDelete={deleteCategory}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
