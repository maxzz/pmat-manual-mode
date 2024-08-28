import { type PrimitiveAtom } from "jotai";
import { type SrcriptItemFld } from "./1-item-field";
import { type SrcriptItemKey } from "./2-item-key";
import { type SrcriptItemPos } from "./3-item-position";
import { type SrcriptItemDly } from "./4-item-delay";

export type ScriptItemData = SrcriptItemFld | SrcriptItemKey | SrcriptItemPos | SrcriptItemDly;

export type ScriptItemMeta = {
    unsaved: {
        id4: number;                            // session unique id as key for react
        selectedAtom: PrimitiveAtom<boolean>;   // is atom selected now
    };
};

export type ScriptItem = ScriptItemData & ScriptItemMeta;

export type ScriptItemKey = { // "field" | "key" | "pos" | "delay"
    [K in keyof ScriptItem]: ScriptItem[K];
}['type'];
