import { SrcriptItemField } from "./1-item-field";
import { SrcriptItemKey } from "./2-item-key";
import { SrcriptItemPos } from "./3-item-position";
import { SrcriptItemDelay } from "./4-item-delay";

export type ScriptItemData = SrcriptItemField | SrcriptItemKey | SrcriptItemPos | SrcriptItemDelay;

export type ScriptItemMeta = {
    unsaved: {
        uuid: number;
    };
};

export type ScriptItem = ScriptItemData & ScriptItemMeta;

export type ScriptItemKey = { //  "field" | "key" | "pos" | "delay"
    [K in keyof ScriptItem]: ScriptItem[K];
}['type'];
