import { ReactNode } from "react";
import { SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "@/store";
import { PropsDelay } from "./props-delay";
import { PropsField } from "./props-field";
import { PropsKey } from "./props-key";
import { PropsPos } from "./props-pos";

export function getPropsView({ snap, item }: { snap: ScriptItem; item: ScriptItem; }): ReactNode {
    let rv: ReactNode | null = null;
    switch (snap.type) {
        case 'field': /**/ { rv = <PropsField item={item as SrcriptItemField} />; break; }
        case 'key':   /**/ { rv = <PropsKey item={item as SrcriptItemKey} />; break; }
        case 'pos':   /**/ { rv = <PropsPos item={item as SrcriptItemPos} />; break; }
        case 'delay': /**/ { rv = <PropsDelay item={item as SrcriptItemDelay} />; break; }
        default: {
            const really: never = snap;
            rv = null;
        }
    }
    return rv;
}
