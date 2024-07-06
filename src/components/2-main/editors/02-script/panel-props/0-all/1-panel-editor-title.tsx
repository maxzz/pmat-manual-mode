import { ReactNode } from "react";
import { ScriptItem, ScriptItemKey } from "@/store/app-state/client-data/script-items-types";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { gropuTitleClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function PanelActionTitle() {
    return (
        <div className={classNames("h-7 flex items-end justify-between", gropuTitleClasses)}>
            <div className="pl-2">
                Action properties
            </div>
        </div>
    );
}

function itemNameAndIcon(type: ScriptItemKey): { name: string; icon: ReactNode; } {
    switch (type) {
        case 'field': /**/ return { name: "Field"     /**/, icon: <IconField /**/ className="ml-2 size-4" />, };
        case 'key':   /**/ return { name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 size-4" />, };
        case 'pos':   /**/ return { name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 size-4 mt-1" />, };
        case 'delay': /**/ return { name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 size-4" />, };
        default: {
            const really: never = type;
            return { name: '', icon: null };
        }
    }
}

const panelEditorTitleClasses = "\
px-2 py-2 text-sm font-semibold \
\
bg-primary-200/50 dark:bg-primary-700/50 \
border-primary-500 \
border-b \
\
flex items-center justify-between";

export function InPanelPropsTitle({ type }: { type: ScriptItemKey; }) {
    const { name, icon } = itemNameAndIcon(type);
    return (
        <div className="-mx-1 -mt-1">
            <div className={panelEditorTitleClasses}>
                <div>
                    {name}
                </div>

                {icon}
            </div>
        </div>
    );
}
