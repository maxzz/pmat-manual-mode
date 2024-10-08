import { useSetAtom } from "jotai";
import { ScriptItemKey, doCreateItemAtom } from "@/store";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { focusClasses, menuContentClasses, menuItemClasses } from "@/components/ui/shared-styles";
import { getRowIconAndText } from "./6-get-row-icon-and-text";
import { IconAdd } from "@/components/ui/icons";
import { classNames } from "@/utils";

function MenuRow({ type }: { type: ScriptItemKey; }) {
    const createItem = useSetAtom(doCreateItemAtom);
    const { icon, name } = getRowIconAndText(type);
    return (
        <Menu.Item
            className={classNames(menuItemClasses, "text-xs grid grid-cols-[auto,1fr] gap-x-2 items-center")}
            onClick={() => createItem(type)}
        >
            {icon}

            <div>
                {name}
            </div>
        </Menu.Item>
    );
}

const buttonClasses = "\
w-7 h-6 \
hover:bg-primary-200 dark:hover:bg-primary-700 \
border-primary-500/50 \
border rounded outline-none \
shadow-sm dark:shadow-primary-900 \
grid place-items-center";

export function MenuAddButton() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <button className={classNames(buttonClasses, focusClasses)}>
                    <IconAdd className="size-3" />
                </button>
            </Menu.Trigger>

            <Menu.Portal container={document.getElementById('portal')}>
                <Menu.Content className={menuContentClasses} sideOffset={1} alignOffset={-8} side="bottom" align="end">
                    <MenuRow type="key" />
                    <MenuRow type="pos" />
                    <MenuRow type="field" />
                    <MenuRow type="delay" />
                </Menu.Content>
            </Menu.Portal>
        </Menu.Root>
    );
}
