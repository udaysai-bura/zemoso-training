import { Button } from "../atoms/Button/Button";
import { Text } from "../atoms/Text/Text";
type LikeButtonProps = {
  likes: number;
  onLike: () => void;
};

export const LikeButton = ({ likes, onLike }: LikeButtonProps) => {
  return (
    <div >
      <Text value={` Likes: ${likes}`} />
      <Button label="Like" onClick={onLike} />
    </div>
  );
};
