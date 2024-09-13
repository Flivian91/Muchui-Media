import { useEffect, useState } from "react";
import FAQAdminItems from "../../common/FAQAdminItems";
import AddFAQModel from "../../common/AddFAQModel";
import { supabase } from "../../../supabase/supabaseClient";
import LoadingSpinner from "../../common/LoadingSpinner";
import EditFAQModel from "../../common/EditFAQModel";

function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [faqUpdate, setFaqUpdate] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [query, setQuery] = useState("");
  let searchResults = faqs

  // Fetch the available faqs
  async function fetchFaqs() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("Faqs").select("*");
      if (error) {
        console.log(error.message);
      }
      setFaqs(data || []);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(function () {
    fetchFaqs();
  }, []);

  // Create New Faq
  async function createNewFaq(data) {
    const { error } = await supabase.from("Faqs").insert(data);
    if (error) {
      console.log(error.message);
    }
    fetchFaqs();
  }

  function handleAddFaq(record) {
    createNewFaq(record);
  }

  // Function to handle delete
  async function deleteFaqs(id) {
    const { error } = await supabase.from("Faqs").delete().eq("id", id);
    if (error) {
      console.log(error.message);
    }
    fetchFaqs();
  }
  // Functionality to handle loading
  async function updateFaqs(data) {
    const { error } = await supabase.from("Faqs").upsert(data);
    if (error) {
      console.log(error.message);
    }
    fetchFaqs();
  }

  function handleFaqUpdate(id) {
    setIsEditing(true);
    const record = faqs.find((faq) => faq.id === id);
    setFaqUpdate(record);
  }

  // Function to handle search functionality
  function handleSearchQuery(text) {
    if (text.length < 2) return;
    searchResults = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(text.toLowerCase())
    );
  }
  handleSearchQuery(query)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">FAQ`s</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search faqs..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3 py-2  text-white  sm:text-base text-sm font-bold bg-secondary hover:bg-secondary/80 transition-all duration-200 rounded uppercase "
        >
          Add FAQ
        </button>
        <AddFAQModel
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSubmit={handleAddFaq}
        />

        <EditFAQModel
          isOpen={isEditing}
          onRequestClose={() => setIsEditing(false)}
          onSubmit={updateFaqs}
          data={faqUpdate}
        />
      </div>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {searchResults.length === 0 ? (
              <div className="flex items-center justify-center py-10">
                <p className="text-text font-bold text-xl">No record 😪😪☠️</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {searchResults.map((faq, i) => (
                  <FAQAdminItems
                    index={i}
                    key={faq.id}
                    faq={faq}
                    onDelete={deleteFaqs}
                    onUpdate={handleFaqUpdate}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FAQs;
