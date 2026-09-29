import React, { lazy, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const PostPage = lazy(() => import("../Components/PostPage"));
import { usePost } from "../../Hooks/usePost";
const MainPage = () => {
  const { data } = usePost();
  let navigate = useNavigate();

  return (
    <div className="grid grid-col-4 gap-2 bg-black border hover:border-purple-500/40  p-2 text-3xl transition duration-300">
      <div className="flex justify-between pl-3">
        <h1 className="text-white text-center   border border-purple-500/40  p-2 text-3xl transition duration-300">
          Posts
        </h1>
        <span onClick={() => navigate("/product/favourite")}>🤍</span>
      </div>
      {data?.map((item) => {
        return <PostPage key={item.id} post={item} />;
      })}
    </div>
  );
};

export default MainPage;
