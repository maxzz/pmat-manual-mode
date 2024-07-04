import { ReactNode } from "react";
import type { SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "@/store";
import { PropsEditorDelay } from "./panel-delay";
import { PropsEditorField } from "./panel-field";
import { PropsEditorKey } from "./panel-key";
import { PropsEditorPos } from "./panel-pos";

export function getPropsEditor({ scriptItemSnap, scriptItem }: { scriptItemSnap: ScriptItem; scriptItem: ScriptItem; }): ReactNode {
    switch (scriptItemSnap.type) {
        case 'field': /**/ return <PropsEditorField item={scriptItem as SrcriptItemField} />;
        case 'key':   /**/ return <PropsEditorKey item={scriptItem as SrcriptItemKey} />;
        case 'pos':   /**/ return <PropsEditorPos item={scriptItem as SrcriptItemPos} />;
        case 'delay': /**/ return <PropsEditorDelay item={scriptItem as SrcriptItemDelay} />;
        default: {
            const really: never = scriptItemSnap;
            return  null;
        }
    }
}
