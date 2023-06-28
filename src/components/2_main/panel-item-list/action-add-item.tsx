import { IconAdd } from "@/components/ui/icons";
import * as Menu from '@radix-ui/react-dropdown-menu';

const contentClasses = "p-1 min-w-[14ch] text-sm \
text-primary-200 dark:text-primary-800 bg-primary-200 dark:bg-primary-400 \
rounded-sm select-none \
";
// "\
// data-[side=top]:animate-slideDownAndFade \
// data-[side=right]:animate-slideLeftAndFade \
// data-[side=bottom]:animate-slideUpAndFade \
// data-[side=left]:animate-slideRightAndFade \
// "

const itemClasses = "px-2 py-1 rounded-sm outline-none \
data-[highlighted]:text-primary-100 data-[highlighted]:bg-primary-700 \
dark:data-[highlighted]:text-primary-100 dark:data-[highlighted]:bg-primary-700 \
";

// "\
// group \
// text-[13px] \
// leading-none \
// \
// text-violet11 \
// \
// rounded-[3px] \
// flex \
// items-center \
// \
// h-[25px] \
// px-[5px] \
// relative \
// pl-[25px] \
// select-none \
// outline-none \
// \
// data-[disabled]:text-mauve8 \
// data-[disabled]:pointer-events-none \
// data-[highlighted]:bg-violet9 \
// data-[highlighted]:text-violet1 \
// "

function ButtonAdd() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <button className="p-1 border-primary-500 border rounded">
                    <IconAdd className="w-3 h-3" />
                </button>
            </Menu.Trigger>
            <Menu.Portal container={document.getElementById('portal')}>
                <Menu.Content className={contentClasses} sideOffset={4} side="bottom" align="end">
                    <Menu.Item className={itemClasses}>Keystroke</Menu.Item>
                    <Menu.Item className={itemClasses}>Position</Menu.Item>
                    <Menu.Item className={itemClasses}>Field</Menu.Item>
                    <Menu.Item className={itemClasses}>Delay</Menu.Item>
                </Menu.Content>
            </Menu.Portal>
        </Menu.Root>
    );
}

export function Title() {
    return (
        <div className="h-7 flex items-end justify-between">
            <div className="">Fill in actions</div>
            <ButtonAdd />
        </div>
    );
}
