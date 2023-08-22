import { ReactNode } from "react";
import { SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "@/store";
import { PropsDelay } from "./panel-delay";
import { PropsField } from "./panel-field";
import { PropsKey } from "./panel-key";
import { PropsPos } from "./panel-pos";

export function getPropsViewComponent({ snap, item }: { snap: ScriptItem; item: ScriptItem; }): ReactNode {
    switch (snap.type) {
        case 'field': /**/ return <PropsField item={item as SrcriptItemField} />;
        case 'key':   /**/ return <PropsKey item={item as SrcriptItemKey} />;
        case 'pos':   /**/ return <PropsPos item={item as SrcriptItemPos} />;
        case 'delay': /**/ return <PropsDelay item={item as SrcriptItemDelay} />;
        default: {
            const really: never = snap;
            return  null;
        }
    }
}
