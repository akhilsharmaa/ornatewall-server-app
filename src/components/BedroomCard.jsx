const BedroomCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-lg shadow-lg object-cover w-full h-128 mb-4" // Fixed height for consistency
      />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default BedroomCard;
