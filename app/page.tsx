"use client";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

// Default Meta Tag Data
const defaultData = {
  title: "WebWunder - Websites That Deliver More Sales & Lower Costs",
  metaDescription:
    "Boost sales & cut costs with WebWunder's managed websites. Book a call today!",
  metaKeywords:
    "WebWunder, subscription website, web design, boost revenue, reduce costs, website management, SEO, design services, affordable web design, business website design",
  ogDescription:
    "Turn your website into a revenue driver with WebWunder’s expert, subscription-based design.",
};

// Default German Meta Tag Data
const defaultGermanData = {
  title: "WebWunder - Websites, die mehr Umsatz und geringere Kosten liefern",
  metaDescription:
    "Steigern Sie den Umsatz und senken Sie die Kosten mit den verwalteten Websites von WebWunder. Buchen Sie noch heute ein Gespräch!",
  metaKeywords:
    "WebWunder, Abo-Website, Webdesign, Umsatzsteigerung, Kostensenkung, Website-Management, SEO, Design-Dienstleistungen, erschwingliches Webdesign, Unternehmenswebdesign",
  ogDescription:
    "Verwandeln Sie Ihre Website mit dem abonnementbasierten Design von WebWunder in einen Umsatztreiber.",
};

// Character limit
const charLimit = 155;

export default function MetaTagsEditor() {
  const [metaData, setMetaData] = useState(defaultData);
  const [germanMetaData, setGermanMetaData] = useState(defaultGermanData);
  const [activeTab, setActiveTab] = useState("english"); // Active tab state

  useEffect(() => {
    const savedData = localStorage.getItem("metaData");
    const savedGermanData = localStorage.getItem("germanMetaData");

    if (savedData) {
      setMetaData(JSON.parse(savedData));
    }

    if (savedGermanData) {
      setGermanMetaData(JSON.parse(savedGermanData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("metaData", JSON.stringify(metaData));
  }, [metaData]);

  useEffect(() => {
    localStorage.setItem("germanMetaData", JSON.stringify(germanMetaData));
  }, [germanMetaData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (activeTab === "english") {
      setMetaData({ ...metaData, [name]: value });
    } else {
      setGermanMetaData({ ...germanMetaData, [name]: value });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const checkLimit = (text: string) =>
    text.length > charLimit ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#8076a3" }}>
        Meta Tags Information
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === "english" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("english")}
        >
          English
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "german" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("german")}
        >
          German
        </button>
      </div>

      {/* Form based on active tab */}
      {activeTab === "english" ? (
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Page Title
            </h2>
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
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Meta Description
            </h2>
            <textarea
              maxLength={155}
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
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Meta Keywords
            </h2>
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
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Open Graph Description
            </h2>
            <textarea
              maxLength={155}
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
      ) : (
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Seitentitel
            </h2>
            <input
              type="text"
              name="title"
              value={germanMetaData.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border rounded"
            />
            <button
              className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => copyToClipboard(germanMetaData.title)}
            >
              Copy
            </button>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Meta-Beschreibung
            </h2>
            <textarea
              maxLength={155}
              name="metaDescription"
              value={germanMetaData.metaDescription}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border rounded"
            />
            <p className={checkLimit(germanMetaData.metaDescription)}>
              {germanMetaData.metaDescription.length}/{charLimit}
            </p>
            <button
              className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => copyToClipboard(germanMetaData.metaDescription)}
            >
              Copy
            </button>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Meta-Schlüsselwörter
            </h2>
            <input
              type="text"
              name="metaKeywords"
              value={germanMetaData.metaKeywords}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border rounded"
            />
            <button
              className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => copyToClipboard(germanMetaData.metaKeywords)}
            >
              Copy
            </button>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold" style={{ color: "#7c677f" }}>
              Open Graph-Beschreibung
            </h2>
            <textarea
              maxLength={155}
              name="ogDescription"
              value={germanMetaData.ogDescription}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border rounded"
            />
            <p className={checkLimit(germanMetaData.ogDescription)}>
              {germanMetaData.ogDescription.length}/{charLimit}
            </p>
            <button
              className="bg-purple-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => copyToClipboard(germanMetaData.ogDescription)}
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
