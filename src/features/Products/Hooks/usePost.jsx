import { useQuery } from "@tanstack/react-query";
import { getPost, singlePost } from "../Api/postApi";
import { useEffect, useState } from "react";

export const usePost = () => {
  const { data, isPending } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });

  return { data, isPending };
};
