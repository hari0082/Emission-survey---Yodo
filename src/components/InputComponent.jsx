import React, { useState } from "react";
import axios from "axios";

const InputComponent = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkCarbonFootprint = async () => {
    try {
      const response = await axios.get(
        `https://api.websitecarbon.com/b?url=${url}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult("Data error - try again or contact us here: wcc@mail.org");
    }
  };

  return (
    <div className="m-4 p-4 flex flex-col">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Insert URL"
        className="border-2 border-black p-2 w-full"
      />
      <button
        onClick={checkCarbonFootprint}
        className="mt-2 p-2 bg-black text-white"
      >
        Try it out
      </button>
      {result && (
        <div className="mt-4">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default InputComponent;
