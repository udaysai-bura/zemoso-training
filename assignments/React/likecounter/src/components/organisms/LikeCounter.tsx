import { useState } from "react";
import { LikeButton } from "../molecules/LikeButton";
import "./LikeCounterCSS.css";
export const LikeCounter = () => {
  const [likes, setLikes] = useState<number>(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="Likes">
      <LikeButton likes={likes} onLike={handleLike} />
    </div>
  );
};
