import { SrcriptItemField } from "./1-item-field";
import { SrcriptItemKey } from "./2-item-key";
import { SrcriptItemPos } from "./3-item-position";
import { SrcriptItemDelay } from "./4-item-delay";

// Common type

export type ScriptItem = Prettify<
    & (SrcriptItemField | SrcriptItemKey | SrcriptItemPos | SrcriptItemDelay)
    & {
        uuid: number;
    }
>;

// export type ScriptItem = Prettify<
//     | SrcriptItemField & { uuid: number; }
//     | SrcriptItemKey & { uuid: number; }
//     | SrcriptItemPos & { uuid: number; }
//     | SrcriptItemDelay & { uuid: number; }
// >;

export type ScriptItemKey = { //  "field" | "key" | "pos" | "delay"
    [K in keyof ScriptItem]: ScriptItem[K];
}['type'];

// export type SrcriptItemUnsaved = {
//     uuid: number;
// };
