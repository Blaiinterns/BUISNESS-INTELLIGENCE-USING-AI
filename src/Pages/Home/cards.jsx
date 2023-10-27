// import React from 'react';

// const Card = ({ imageSrc, title, content }) => {
//   return (
//     <div className="col s12 m4">
//       <div className="card">
//         <div className="card-image">
//           <img src={imageSrc} alt={title} />
//           <span className="card-title">{title}</span>
//         </div>
//         <div className="card-content">
//           <p>{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

const Card = ({ imageSrc, title, content }) => {
  return (
    <div className="max-w-xs mx-2 mb-4 rounded overflow-hidden shadow-lg bg-white">
      <img className="w-26 mx-auto mt-4" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

export default Card;
