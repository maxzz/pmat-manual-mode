import { SrcriptItemField } from "./1-item-field";
import { SrcriptItemKey } from "./2-item-key 2";
import { SrcriptItemPos } from "./3-item-position";
import { SrcriptItemDelay } from "./4-item-delay";

// Common type

export type ScriptItem = SrcriptItemField | SrcriptItemKey | SrcriptItemPos | SrcriptItemDelay;

export type ScriptItemKey = { //  "field" | "key" | "pos" | "delay"
    [K in keyof ScriptItem]: ScriptItem[K];
}['type'];

export type SrcriptItemUnsaved = {
    uuid: number;
};
