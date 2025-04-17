import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ReactNode } from "react";
import { CustomLink } from "@components/ui/link";
import clsx from "clsx";

type OptionType = { label: string; href: string };

type DropDownProps = {
  options: OptionType[];
  type: "icon" | "text";
  icon?: ReactNode;
  label?: string;
  className?: string;
  action?: () => void;
};

export function DropDown({
  options,
  type,
  icon,
  label,
  className,
}: DropDownProps) {
  return (
    <Popover className={clsx("relative", className)}>
      {({ close }) => (
        <>
          <PopoverButton className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none h-10 min-w-[40px]">
            {type === "icon" ? icon : label}
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
          >
            <PopoverPanel
              anchor="bottom"
              className="absolute -ml-1 mt-4 z-50 flex w-48 flex-col rounded-lg bg-white p-2 shadow-xl border border-black m-1"
            >
              {options.map((option: OptionType) => (
                <CustomLink
                  key={option.href}
                  href={option.href}
                  className="rounded-md px-4 py-2 text-sm text-gray-700"
                  action={close}
                >
                  {option.label}
                </CustomLink>
              ))}
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
