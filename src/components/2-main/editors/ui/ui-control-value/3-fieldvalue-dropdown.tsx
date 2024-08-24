import * as Menu from "@radix-ui/react-dropdown-menu";
import { IconChevronDown, IconDot } from "@/components/ui/icons";
import { classNames } from "@/utils";

const contentClasses = "\
px-1.5 py-1 max-h-[50vh] \
\
bg-primary-100 dark:bg-primary-600 \
border-primary-300 dark:border-primary-600 border \
\
radix-side-top:animate-slide-up \
radix-side-bottom:animate-slide-down \
\
rounded-lg shadow-md \
\
overflow-auto smallscroll smallscroll-light \
\
grid grid-cols-1"; //TODO: "overflow-auto smallscroll smallscroll-light" maybe have a separate popop for big list and add search; or simplescroll; more fields.. put on top?; scroll to view;

const rowClasses = "\
relative pl-8 pr-4 py-2 text-xs \
\
text-primary-700 dark:text-primary-300 \
\
data-highlighted:text-primary-100 dark:data-highlighted:text-primary-100 \
data-highlighted:bg-primary-600 dark:data-highlighted:bg-primary-700 \
\
rounded-md select-none outline-none cursor-default \
\
flex items-center";

const triggerClasses = "px-1 bg-primary-50 dark:bg-primary-700 border-primary-300 dark:border-primary-800 border-l outline-none group";
const triggerIconClasses = "p-1 size-5 border-primary-300 dark:border-primary-500 rounded group-focus-within:border";

type DropdownProps = {
    items: string[];
    selectedIndex: number;
    onSetIndex: (idx: number) => void;
};

export function Dropdown({ items, selectedIndex, onSetIndex }: DropdownProps) {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <button className={triggerClasses}>
                    <IconChevronDown className={triggerIconClasses} />
                </button>
            </Menu.Trigger>

            <Menu.Portal container={document.getElementById('portal')}>
                <Menu.Content className={contentClasses}>
                    {items.map(
                        (item, idx) => {
                            const isSelected = selectedIndex === idx;
                            const isSeparator = item === '-';
                            return isSeparator
                                ? (
                                    <Menu.Separator className="my-1 h-px bg-primary-200 dark:bg-primary-700" key={idx} />
                                )
                                : (
                                    <Menu.Item
                                        className={classNames(rowClasses, isSelected && "bg-primary-300 dark:bg-primary-500")}
                                        onSelect={() => onSetIndex(idx)}
                                        key={idx}
                                    >
                                        {isSelected && (
                                            <IconDot className="absolute left-2 size-5 fill-current stroke-[5]" />
                                        )}
                                        <span className="flex-grow">{item}</span>
                                    </Menu.Item>
                                );
                        })
                    }
                </Menu.Content>
            </Menu.Portal>
        </Menu.Root>
    );
}

export function isKeyToClearDefault(key: string) {
    return key === 'Backspace' || /^[a-z0-9]$/i.test(key);
}
