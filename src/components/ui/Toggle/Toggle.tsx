import { Switch } from "@headlessui/react";
import cn from "classnames";

type ToggleProps = {
  onChange: () => void;
  enabled: boolean;
};

const Toggle = ({ onChange, enabled = false }: ToggleProps) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={cn(
        enabled ? "bg-green-600" : "bg-neutral-300 dark:bg-neutral-600",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={cn(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};

export default Toggle;
