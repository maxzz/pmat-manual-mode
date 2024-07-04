import { ReactNode } from "react";
import type { SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "@/store";
import { PropsEditorDelay } from "./panel-delay";
import { PropsEditorField } from "./panel-field";
import { PropsEditorKey } from "./panel-key";
import { PropsEditorPos } from "./panel-pos";

export function getPropsEditor({ snap, item }: { snap: ScriptItem; item: ScriptItem; }): ReactNode {
    switch (snap.type) {
        case 'field': /**/ return <PropsEditorField item={item as SrcriptItemField} />;
        case 'key':   /**/ return <PropsEditorKey item={item as SrcriptItemKey} />;
        case 'pos':   /**/ return <PropsEditorPos item={item as SrcriptItemPos} />;
        case 'delay': /**/ return <PropsEditorDelay item={item as SrcriptItemDelay} />;
        default: {
            const really: never = snap;
            return  null;
        }
    }
}
