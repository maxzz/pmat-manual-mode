import { addScriptItem } from "@/store";
import { focusClasses, menuContentClasses, menuItemClasses } from "@/components/shared-styles";
import { IconAdd } from "@/components/ui/icons";
import { classNames } from "@/utils";
import * as Menu from '@radix-ui/react-dropdown-menu';

function ButtonAdd() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <button className={classNames("p-1 border-primary-500 border rounded outline-none", focusClasses)}>
                    <IconAdd className="w-3 h-3" />
                </button>
            </Menu.Trigger>
            <Menu.Portal container={document.getElementById('portal')}>
                <Menu.Content className={menuContentClasses} sideOffset={4} side="bottom" align="end">
                    <Menu.Item className={menuItemClasses} onClick={() => addScriptItem('key')}>Keystroke</Menu.Item>
                    <Menu.Item className={menuItemClasses} onClick={() => addScriptItem('pos')}>Position</Menu.Item>
                    <Menu.Item className={menuItemClasses} onClick={() => addScriptItem('field')}>Field</Menu.Item>
                    <Menu.Item className={menuItemClasses} onClick={() => addScriptItem('delay')}>Delay</Menu.Item>
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
