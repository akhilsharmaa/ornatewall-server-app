const DesignCard = ({ imageSrc, altText, label }) => {
  return (
    <div className="relative group">
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-lg shadow-lg object-cover w-full h-full"
      />
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg font-medium p-2 rounded">
        {label}
      </div>
    </div>
  );
};

export default DesignCard;