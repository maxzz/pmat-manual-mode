import { atom } from "jotai";
import { ref } from "valtio";
import { uuid } from "pm-manifest";
import type { ScriptItemKey, SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItemData, ScriptItem } from "../script-items-types";

function createScriptItemByType(type: ScriptItemKey): ScriptItemData {
    switch (type) {
        case "field": {
            const newItem: SrcriptItemField = {
                type: 'field',
                id: '444',
            };
            return newItem;
        }
        case "key": {
            const newItem: SrcriptItemKey = {
                type: 'key',
                char: 'Tab',
                repeat: 1,
                shift: 0,
                ctrl: 0,
                alt: 0,
            };
            return newItem;
        }
        case "pos": {
            const newItem: SrcriptItemPos = {
                type: 'pos',
                x: 10,
                y: 20,
            };
            return newItem;
        }
        case "delay": {
            const newItem: SrcriptItemDelay = {
                type: 'delay',
                n: 1000,
            };
            return newItem;
        }
        default: {
            const really: never = type;
            throw new Error(really);
        }
    }
}

export function createScriptItem(type: ScriptItemKey): ScriptItem {
    const rv: ScriptItem = {
        ...createScriptItemByType(type),
        unsaved: ref({
            id4: uuid.asRelativeNumber(),
            selectedAtom: atom(false),
        }),
    };
    return rv;
}
