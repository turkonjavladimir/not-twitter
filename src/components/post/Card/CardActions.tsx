import Icon from "../../common/Icon";

const CardActions = () => {
  return (
    <div className="my-3 flex max-w-md justify-between gap-3">
      <button className="min-w-0" aria-label="reply to tweet">
        <div className="flex min-w-0 items-center gap-1 rounded-full text-neutral-500 transition-colors hover:text-sky-600">
          <Icon className="h-5 w-5 shrink-0" name="chatBubbleOvalLeft" />
          <span className="truncate text-xs">1,669</span>
        </div>
      </button>

      <button className="min-w-0" aria-label="retweet">
        <div className="flex items-center gap-1 text-neutral-500 transition-colors hover:text-green-600 ">
          <Icon className="h-5 w-5 shrink-0" name="arrowPathRoundedSquare" />
          <span className="truncate text-xs">14.9k</span>
        </div>
      </button>

      <button className="min-w-0" aria-label="like tweet">
        <div className="flex items-center gap-1 text-neutral-500 transition-colors hover:text-red-600 ">
          <Icon className="h-5 w-5 shrink-0" name="heart" />
          <span className="truncate text-xs">359</span>
        </div>
      </button>

      <button
        aria-label="share tweet"
        className="text-neutral-500 transition-colors hover:text-blue-500 "
      >
        <Icon className="h-5 w-5 shrink-0" name="share" />
      </button>
    </div>
  );
};

export default CardActions;
