import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowToggle = overview.length > 200;

  return (
    <div className="w-full aspect-video pt-64 px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="py-6 text-lg w-1/3">
        {isExpanded || !shouldShowToggle
          ? overview
          : `${overview.substring(0, 200)}...`}
        {shouldShowToggle && (
          <span
            onClick={handleToggle}
            className="cursor-pointer ml-2"
          >
            {isExpanded ? "[-]" : "[+]"}
          </span>
        )}
      </div>
      <div>
        <button className="bg-white text-black text-lg py-2 px-10 rounded-lg hover:bg-opacity-60">
          ▶ Play
        </button>
        <button className="ml-4 bg-gray-500 text-white text-lg py-2 px-10 bg-opacity-50 rounded-lg hover:bg-opacity-60">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;


// import React from "react";

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="w-full aspect-video pt-64 px-20 absolute text-white bg-gradient-to-r from-black">
//       <h1 className="text-5xl font-bold">{title}</h1>
//       <p className="py-6 text-lg w-1/3">{overview}</p>
//       <div>
//         <button className="bg-white text-black text-lg py-2 px-10 rounded-lg hover:bg-opacity-60">
//           ▶ Play
//         </button>
//         <button className="ml-4 bg-gray-500 text-white text-lg py-2 px-10 bg-opacity-50 rounded-lg hover:bg-opacity-60">
//           ℹ More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;



