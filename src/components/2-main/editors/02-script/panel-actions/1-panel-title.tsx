import { ReactNode } from "react";
import { ScriptItemType, addScriptItem } from "@/store";
import * as Menu from '@radix-ui/react-dropdown-menu';
import { focusClasses, gropuTitleClasses, menuContentClasses, menuItemClasses } from "@/components/ui/shared-styles";
import { IconAdd, IconDelay, IconField, IconKey, IconPos } from "@/components/ui/icons";
import { classNames } from "@/utils";

function rowText(type: ScriptItemType): { name: string; icon: ReactNode; } {
    switch (type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 size-4" /> };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 size-4" /> };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 size-4" /> };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 size-4" /> };
        default: {
            const really: never = type;
            return { icon: null, name: '' };
        }
    }
}

function MenuRow({ type }: { type: ScriptItemType; }) {
    const { name, icon } = rowText(type);
    return (
        <Menu.Item className={classNames(menuItemClasses, "grid grid-cols-[auto,1fr] gap-x-2 items-center")} onClick={() => addScriptItem(type)}>
            {icon}
            <div className="">{name}</div>
        </Menu.Item>
    );
}

const buttonClasses = "\
p-2 w-9 \
border-primary-500 dark:shadow-primary-100/10 \
hover:bg-primary-200 \
dark:hover:bg-primary-700 \
border rounded shadow outline-none \
grid place-items-center";

function ButtonAdd() {
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <button className={classNames(buttonClasses, focusClasses)}>
                    <IconAdd className="w-3 h-3" />
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

export function PanelTitle() {
    return (
        <div className="h-7 flex items-end justify-between">
            <div className={classNames("pl-2", gropuTitleClasses)}>
                Fill in actions
            </div>

            <ButtonAdd />
        </div>
    );
}
