// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);

//     // Create a FormData object and append the image file
//     const formData = new FormData();
//     formData.append("file", file);

//     // Make a POST request to the Flask API
//     fetch("https://opthalmic.azurewebsites.net/predict", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Log the JSON output from the Flask API
//         console.log("Prediction:", data.prediction);
//         console.log("Predicted Probability:", data.predicted_probability);

//         // Get the image URL and pass it to the Predict component
//         const imageUrl = URL.createObjectURL(file);

//         // Navigate to the "Predict" component with image and prediction data as query parameters
//         navigate(`/predict?image=${imageUrl}&prediction=${data.prediction}&predicted_probability=${data.predicted_probability}`);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <div className="text-2xl font-bold text-black content-center mb-8">
//         <h1>RGVP Tours and Travels</h1>
//       </div>
//       <div className="bg-gray-200 p-8 rounded-lg shadow-lg text-center md:w-1/2 lg:w-1/3">
//         <h1 className="text-black mb-8">Upload an Image</h1>
//         <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
//           Upload Image
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="hidden"
//           />
//         </label>
//         {selectedImage && (
//           <div className="mt-4">
//             <img
//               src={URL.createObjectURL(selectedImage)}
//               alt="Selected Image"
//               className="max-w-full h-auto"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Card from "./cards"; // Assuming you have a Card component

const Home = () => {
  const cardData = [
    {
      imageSrc: "https://th.bing.com/th/id/OIP.0BeZFVYdliMD0BsneAgnogHaFj?pid=ImgDet&rs=1",
      title: "Shaniwar Wada",
      content:
        "A historical fortification in the heart of Pune, India. It was the seat of the Peshwas of the Maratha Empire until 1818.",
    },
    {
      imageSrc: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/08/14193934/14082017_AgaKhanPalace_01.jpg",
      title: "Aga Khan Palace",
      content:
        "A historical landmark in Pune, India. It was built by Sultan Muhammed Shah Aga Khan III in 1892.",
    },
    {
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sinhagad.jpg/375px-Sinhagad.jpg",
      title: "Sinhagad Fort",
      content:
        "A fortress located roughly 30 kilometers southwest of the city of Pune, India. It is a popular trekking destination.",
    },
    // Add more places in Pune as needed
  ];
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
