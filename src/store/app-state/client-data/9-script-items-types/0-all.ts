import { PrimitiveAtom } from "jotai";
import { SrcriptItemFld } from "./1-item-field";
import { SrcriptItemKey } from "./2-item-key";
import { SrcriptItemPos } from "./3-item-position";
import { SrcriptItemDly } from "./4-item-delay";

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
