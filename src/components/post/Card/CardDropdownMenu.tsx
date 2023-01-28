import {
  BellSlashIcon,
  FlagIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "../../ui/Dropdown";
import { MenuItem } from "../../ui/Dropdown/Dropdown";

const CardDropdownMenu = () => {
  return (
    <Dropdown>
      <div className="py-1">
        <MenuItem
          text="Edit"
          icon={
            <PencilSquareIcon
              className="mr-3 h-5 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          }
        />
        <MenuItem
          text="Unfollow"
          icon={
            <XCircleIcon
              className="mr-3 h-5 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          }
        />
      </div>
      <div className="py-1">
        <MenuItem
          text="Block"
          icon={
            <NoSymbolIcon
              className="mr-3 h-5 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          }
        />
        <MenuItem
          text="Mute"
          icon={
            <BellSlashIcon
              className="mr-3 h-5 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          }
        />
        <MenuItem
          text="Report"
          icon={
            <FlagIcon
              className="mr-3 h-5 w-5 group-hover:text-gray-500"
              aria-hidden="true"
            />
          }
        />
      </div>

      <div className="py-1">
        <MenuItem
          icon={
            <TrashIcon
              className="mr-3 h-5 w-5 text-red-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          }
          text="Delete"
        />
      </div>
    </Dropdown>
  );
};

export default CardDropdownMenu;
