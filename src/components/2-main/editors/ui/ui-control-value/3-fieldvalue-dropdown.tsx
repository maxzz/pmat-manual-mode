import * as menu from '@radix-ui/react-dropdown-menu';
import { IconChevronDown, IconDot } from '@/components/ui/icons';
import { classNames } from '@/utils';

export function isKeyToClearDefault(key: string) {
    return key === 'Backspace' || /^[a-z0-9]$/i.test(key);
}

const contentClasses = [
    "px-1.5 py-1 max-h-[50vh] grid grid-cols-1 rounded-lg shadow-md",
    "bg-primary-100 dark:bg-primary-600",
    "border-primary-300 dark:border-primary-600 border",
    "overflow-auto smallscroll smallscroll-light", //TODO: maybe have a separate popop for big list and add search; or simplescroll; more fields.. put on top?; scroll to view;
    "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
].join(' ');

const rowClasses = [
    "relative pl-8 pr-4 py-2 text-xs flex items-center cursor-default select-none rounded-md outline-none",
    "text-primary-700 dark:text-primary-300",
    "data-highlighted:text-primary-100 dark:data-highlighted:text-primary-100 data-highlighted:bg-primary-600 dark:data-highlighted:bg-primary-700",
].join(' ');;

export function Dropdown({ items, selectedIndex, onSetIndex }: { items: string[], selectedIndex: number, onSetIndex: (idx: number) => void; }) {
    return (
        <menu.Root>
            <menu.Trigger asChild>
                <button className="px-1 bg-primary-50 dark:bg-primary-700 border-primary-300 dark:border-primary-800 border-l outline-none group">
                    <IconChevronDown className="p-1 w-5 h-5 border-primary-300 dark:border-primary-500 rounded group-focus-within:border" />
                </button>
            </menu.Trigger>

            <menu.Portal container={document.getElementById('portal')}>
                <menu.Content className={contentClasses}>
                    {items.map((item, idx) => {
                        const isSelected = selectedIndex === idx;
                        const isSeparator = item === '-';
                        return isSeparator
                            ? <menu.Separator className="my-1 h-px bg-primary-200 dark:bg-primary-700" key={idx} />
                            :
                            <menu.Item
                                className={classNames(rowClasses, isSelected && "bg-primary-300 dark:bg-primary-500")}
                                onSelect={() => onSetIndex(idx)}
                                key={idx}
                            >
                                {isSelected && <IconDot className="absolute left-2 w-5 h-5 fill-current stroke-[5]" />}
                                <span className="flex-grow">{item}</span>
                            </menu.Item>;
                    })}
                </menu.Content>
            </menu.Portal>
        </menu.Root>
    );
}
