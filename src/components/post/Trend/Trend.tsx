import Dropdown from "../../ui/Dropdown";
import { MenuItem } from "../../ui/Dropdown/Dropdown";

import { formatNumber } from "../../../lib/format-number";

const TrendDropdownMenu = () => {
  return (
    <Dropdown>
      <div>
        <MenuItem text="hello" />
        <MenuItem text="hello" />
        <MenuItem text="hello" />
        <MenuItem text="hello" />
      </div>
    </Dropdown>
  );
};

type TrendProps = {
  text: string;
  topic: string;
  tweets: string;
};

const Trend = ({ text, topic, tweets }: TrendProps) => {
  if (!text) return null;

  return (
    /* @TODO: convert div to link */
    <div className="cursor-pointer transition-colors hover:bg-gray-100 hover:dark:bg-neutral-900">
      <div className="flex flex-col py-3 px-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{topic}</span>
          <TrendDropdownMenu />
        </div>
        <span className="font-bold">{text}</span>
        <span className="text-sm text-neutral-500">
          {formatNumber(tweets)} tweets
        </span>
      </div>
    </div>
  );
};

export default Trend;
