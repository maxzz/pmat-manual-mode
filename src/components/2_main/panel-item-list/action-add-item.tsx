import { IconAdd } from "@/components/ui/icons";
import { clientState } from "@/store";
import { ItemDelay, ItemField, ItemKey, ItemPos, ScriptItemType } from "@/store/editor-types";
import * as Menu from '@radix-ui/react-dropdown-menu';

function ButtonAdd() {
    function onClick(type: ScriptItemType) {
        switch (type) {
            case "field": {
                const newItem: ItemField = {
                    type: 'field',
                    id: '444',
                }
                clientState.scriptItems.push(newItem);
                break;
            }
            case "key": {
                const newItem: ItemKey = {
                    type: 'key',
                    char: 'Tab',
                }
                clientState.scriptItems.push(newItem);
                break;
            }
            case "pos": {
                const newItem: ItemPos = {
                    type: 'pos',
                    x: 10,
                    y: 20,
                }
                clientState.scriptItems.push(newItem);
                break;
            }
            case "delay": {
                const newItem: ItemDelay = {
                    type: 'delay',
                    n: 1000,
                }
                clientState.scriptItems.push(newItem);
                break;
            }
            default: {
                const really: never = type;
                console.error(really);
            }
        }
    }
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <button className="p-1 border-primary-500 border rounded">
                    <IconAdd className="w-3 h-3" />
                </button>
            </Menu.Trigger>
            <Menu.Portal container={document.getElementById('portal')}>
                <Menu.Content className={contentClasses} sideOffset={4} side="bottom" align="end">
                    <Menu.Item className={itemClasses} onClick={() => onClick('key')}>Keystroke</Menu.Item>
                    <Menu.Item className={itemClasses} onClick={() => onClick('pos')}>Position</Menu.Item>
                    <Menu.Item className={itemClasses} onClick={() => onClick('field')}>Field</Menu.Item>
                    <Menu.Item className={itemClasses} onClick={() => onClick('delay')}>Delay</Menu.Item>
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

const contentClasses = "p-1 min-w-[14ch] text-sm \
text-primary-200 dark:text-primary-800 bg-primary-200 dark:bg-primary-400 \
data-[side=top]:animate-slideDownAndFade \
data-[side=right]:animate-slideLeftAndFade \
data-[side=bottom]:animate-slideUpAndFade \
data-[side=left]:animate-slideRightAndFade \
rounded-sm select-none \
";

const itemClasses = "px-2 py-1 rounded-sm outline-none \
data-[highlighted]:text-primary-100 data-[highlighted]:bg-primary-700 \
dark:data-[highlighted]:text-primary-100 dark:data-[highlighted]:bg-primary-700 \
";
