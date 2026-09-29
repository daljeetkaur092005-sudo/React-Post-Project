import React, { useContext, useEffect, useState } from "react";
import { MyStore } from "../../Hooks/useContext";

const PostPage = ({ post }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const { addToFav } = useContext(MyStore);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="bg-[#111018] border border-white/10 p-6 text-white shadow-lg hover:border-purple-500/40 transition duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400">User #{post.userId}</p>

          <p className="text-xs text-gray-600">Post #{post.id}</p>
        </div>

        <button
          onClick={() => {
            handleFavourite();
            addToFav(post.id);
          }}
          className={`px-3 py-2 rounded-lg text-sm transition ${
            isFavourite
              ? "bg-red-500/20 text-red-400"
              : "bg-white/5 text-gray-400 hover:text-red-400"
          }`}
        >
          {isFavourite ? "❤️ Favourite" : "🤍 Add to Favourite"}
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

      <p className="text-gray-400 leading-7 text-sm">{post.body}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <div className="flex gap-4 text-sm">
          <span className="text-green-400">👍 {post.reactions.likes}</span>

          <span className="text-red-400">👎 {post.reactions.dislikes}</span>
        </div>

        <span className="text-gray-500 text-sm">👁 {post.views}</span>
      </div>
    </div>
  );
};

export default PostPage;
