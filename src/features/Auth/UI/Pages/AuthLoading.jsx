const AuthLoading = () => {
  return (
    <div className="min-h-screen bg-[#08070c] flex items-center justify-center">
      <div className="text-center">

  
        <div className="w-20 h-20 mx-auto mb-5 rounded-full border-4 border-gray-700 border-t-purple-500 border-r-cyan-400 animate-spin"></div>

      
        <h2 className="text-xl font-semibold text-white">
          Checking Authentication
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Please wait...
        </p>

      </div>
    </div>
  );
};

export default AuthLoading;