'use client'
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Default Meta Tag Data
const defaultData = {
  title: "WebWunder - Websites That Deliver More Sales & Lower Costs",
  metaDescription: "Boost sales & cut costs with WebWunder's managed websites. Book a call today!",
  metaKeywords: "WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design",
  ogDescription: "Turn your website into a revenue driver with WebWunder’s expert, subscription-based design.",
};

// Character limit
const charLimit = 145;

export default function MetaTagsEditor() {
  const [metaData, setMetaData] = useState(defaultData);

  useEffect(() => {
    const savedData = localStorage.getItem('metaData');
    if (savedData) {
      setMetaData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('metaData', JSON.stringify(metaData));
  }, [metaData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMetaData({ ...metaData, [name]: value });
  };
  

  const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const checkLimit = (text:string) => text.length > charLimit ? 'text-red-500' : 'text-green-500';

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6" style={{ color: '#8076a3' }}>Meta Tags Information</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold" style={{ color: '#7c677f' }}>Page Title</h2>
        <input
          type="text"
          name="title"
          value={metaData.title}
          onChange={handleInputChange}
          className="w-full p-2 mt-2 border rounded"
        />
        <button 
          className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => copyToClipboard(metaData.title)}
        >
          Copy
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold" style={{ color: '#7c677f' }}>Meta Description</h2>
        <textarea
          maxLength={145}
          name="metaDescription"
          value={metaData.metaDescription}
          onChange={handleInputChange}
          className="w-full p-2 mt-2 border rounded"
        />
        <p className={checkLimit(metaData.metaDescription)}>
          {metaData.metaDescription.length}/{charLimit}
        </p>
        <button 
          className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => copyToClipboard(metaData.metaDescription)}
        >
          Copy
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold" style={{ color: '#7c677f' }}>Meta Keywords</h2>
        <input
          type="text"
          name="metaKeywords"
          value={metaData.metaKeywords}
          onChange={handleInputChange}
          className="w-full p-2 mt-2 border rounded"
        />
        <button 
          className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => copyToClipboard(metaData.metaKeywords)}
        >
          Copy
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold" style={{ color: '#7c677f' }}>Open Graph Description</h2>
        <textarea
                    maxLength={145}

          name="ogDescription"
          value={metaData.ogDescription}
          onChange={handleInputChange}
          className="w-full p-2 mt-2 border rounded"
        />
        <p className={checkLimit(metaData.ogDescription)}>
          {metaData.ogDescription.length}/{charLimit}
        </p>
        <button 
          className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => copyToClipboard(metaData.ogDescription)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
