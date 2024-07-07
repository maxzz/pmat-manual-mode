import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { ScriptItemKey } from "@/store";
import { ReactNode } from "react";

export function getRowIconAndText(type: ScriptItemKey | undefined): { icon: ReactNode; name: string; } {
    if (!type) {
        return { icon: null, name: '' };
    }

    switch (type) {
        case 'field': /**/ return { name: "Field"     /**/, icon: <IconField /**/ className="ml-2 size-4" /> };
        case 'key':   /**/ return { name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 size-4" /> };
        case 'pos':   /**/ return { name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 size-4 mt-1" /> };
        case 'delay': /**/ return { name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 size-4" /> };
        default: {
            const really: never = type;
            return { icon: null, name: '' };
        }
    }
}
