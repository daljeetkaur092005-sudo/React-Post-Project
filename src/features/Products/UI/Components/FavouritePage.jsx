import React, { useContext } from "react";
import { MyStore } from "../../Hooks/useContext";

const FavouritePage = () => {
  const { fav, removeToFav } = useContext(MyStore);
  return (
    <div className="min-h-screen bg-[#08070c] text-white px-6 py-10 ">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold">❤️ Favourite Posts</h1>

        <p className="text-gray-400 mt-2">Your saved posts are here</p>
      </div>
      <div className="flex flex-6 flex-wrap gap-2 justify-center">
        {fav?.map((newpost) => {
          return (
            <div className="max-w-xl ">
              {/* Post Card */}
              <div className="bg-[#111018] border border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition duration-300">
                {/* Top */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400">{newpost.id}</p>

                    <p className="text-xs text-gray-600">{newpost.id}</p>
                  </div>

                  <button
                    onClick={() => removeToFav(newpost.id)}
                    className="text-red-400 text-xl hover:scale-110 transition"
                  >
                    ❤️
                  </button>
                </div>

                <h2 className="text-xl font-semibold mb-3">{newpost?.title}</h2>

                {/* Body */}
                <p className="text-gray-400 text-sm leading-7 line-clamp-3">
                  {newpost?.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    {newpost?.tags}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    #future
                  </span>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <div className="flex gap-4 text-sm">
                    <span className="text-green-400">👍 192</span>

                    <span className="text-red-400">👎 25</span>
                  </div>

                  <span className="text-gray-500 text-sm">
                    {newpost?.views}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavouritePage;
