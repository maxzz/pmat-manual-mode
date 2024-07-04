import { ReactNode } from "react";
import { ScriptItem } from "@/store/app-state/client-data/script-items-types";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";

function itemNameAndIcon(scriptItemSnap: ScriptItem): { name: string; icon: ReactNode; } {
    switch (scriptItemSnap.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 size-4" />, };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 size-4" />, };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 size-4" />, };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 size-4" />, };
        default: {
            const really: never = scriptItemSnap;
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

export function InPanelPropsTitle({ scriptItemSnap }: { scriptItemSnap: ScriptItem; }) {
    const { name, icon } = itemNameAndIcon(scriptItemSnap);
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
