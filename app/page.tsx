'use client'
import { useState } from "react";

export default function MetaTagsPage() {
  // States for the meta tag contents
  const [metaTitle, setMetaTitle] = useState("WebWunder - Websites That Deliver More Sales & Lower Costs");
  const [metaDescription, setMetaDescription] = useState("Boost sales & cut costs with WebWunder's managed websites. Book a call today!");
  const [metaKeywords, setMetaKeywords] = useState("WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design");
  const [editMode, setEditMode] = useState(false);

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 140) {
      setMetaDescription(e.target.value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">SEO Meta Tags Information</h1>

        {/* Page Title Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Page Title</h2>
          {editMode ? (
            <textarea
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="mt-2 text-gray-600">{metaTitle}</p>
          )}
          <div className="mt-2 flex space-x-4">
            <button onClick={() => handleCopy(metaTitle)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Copy
            </button>
            <button onClick={() => setEditMode(!editMode)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              {editMode ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Meta Description Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Meta Description (Max 140 Characters)</h2>
          {editMode ? (
            <>
              <textarea
                value={metaDescription}
                onChange={handleDescriptionChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
              <p className={`mt-2 text-sm ${metaDescription.length <= 140 ? "text-green-600" : "text-red-600"}`}>
                {metaDescription.length} / 140 characters
              </p>
            </>
          ) : (
            <p className="mt-2 text-gray-600">{metaDescription}</p>
          )}
          <div className="mt-2 flex space-x-4">
            <button onClick={() => handleCopy(metaDescription)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Copy
            </button>
          </div>
        </div>

        {/* Meta Keywords Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Meta Keywords</h2>
          {editMode ? (
            <textarea
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="mt-2 text-gray-600">{metaKeywords}</p>
          )}
          <div className="mt-2 flex space-x-4">
            <button onClick={() => handleCopy(metaKeywords)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
