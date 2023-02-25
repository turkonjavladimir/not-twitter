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
  topic?: string;
  tweets?: string;
  className?: string;
};

const Trend = ({ text, topic, tweets, className }: TrendProps) => {
  return (
    <div
      className={`${className} cursor-pointer transition-colors hover:bg-gray-100 hover:dark:bg-neutral-900`}
    >
      <div className="flex items-center justify-between">
        {topic && <span className="text-sm text-neutral-500">{topic}</span>}
        <TrendDropdownMenu />
      </div>
      <span className="block font-bold">{text}</span>
      <span className="block text-sm text-neutral-500">
        {tweets && formatNumber(tweets)} tweets
      </span>
    </div>
  );
};

export default Trend;
