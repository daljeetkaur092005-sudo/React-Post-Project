const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="bg-[#111018] rounded-xl p-4 animate-pulse"
        >
          {/* Image */}
          <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>

          {/* Title */}
          <div className="h-5 bg-gray-700 rounded w-3/4 mb-3"></div>

          {/* Description */}
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>

          {/* Price */}
          <div className="h-5 bg-gray-700 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;