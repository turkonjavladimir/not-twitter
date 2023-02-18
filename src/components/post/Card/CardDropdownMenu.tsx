import Icon from "../../common/Icon";
import Dropdown from "../../ui/Dropdown";
import { MenuItem } from "../../ui/Dropdown/Dropdown";

const CardDropdownMenu = () => {
  return (
    <Dropdown>
      <div className="py-1">
        <MenuItem
          text="Edit"
          icon={<Icon name="pencilSquare" className="h-5 w-5" />}
        />
        <MenuItem
          text="Unfollow"
          icon={<Icon name="xCircle" className="h-5 w-5" />}
        />
      </div>
      <div className="py-1">
        <MenuItem
          text="Block"
          icon={<Icon name="noSymbol" className="h-5 w-5" />}
        />
        <MenuItem
          text="Mute"
          icon={<Icon name="bellSlash" className="h-5 w-5" />}
        />
        <MenuItem
          text="Report"
          icon={<Icon name="flag" className="h-5 w-5" />}
        />
      </div>

      <div className="py-1">
        <MenuItem
          icon={
            <Icon
              name="trash"
              className="h-5 w-5 text-red-400 group-hover:text-gray-500"
            />
          }
          text="Delete"
        />
      </div>
    </Dropdown>
  );
};

export default CardDropdownMenu;
