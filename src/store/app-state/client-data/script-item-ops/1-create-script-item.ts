import type { ScriptItemKey, ScriptItem, SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay } from "../script-items-types";

export function createScriptItem(type: ScriptItemKey): ScriptItem {
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
