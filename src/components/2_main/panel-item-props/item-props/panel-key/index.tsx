import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemKey } from "@/store";
import { propsBoxClasses, InputField } from "../ui";
import { plural } from "@/utils";
import { SelectOne } from "./select";

const actionKeys: string[] = [
    'Tab',
    'Enter',
    'Esc',
    'Left arrow',
    'Right arrow',
    'Up arrow',
    'Down arrow',
    'Page Up',
    'Page Down',
    'Home',
    'End',
    'Ins',
    'Del',
    'Backspace',
    'Spacebar',
    'Shift / Control / Alt',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
];

export function PropsKey({ item, ...rest }: { item: SrcriptItemKey; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputField label="Key" value={`${snap.char}`} onChange={(e) => item.char = e.target.value} />

            <div className="flex items-end space-x-2">
                <InputField className="w-10" horizontal label="Repeat"
                    value={`${snap.repeat}`}
                    onChange={(e) => {
                        let n = parseInt(e.target.value);
                        if (Number.isNaN(n)) {
                            n = 1;
                        }
                        item.repeat = n;
                    }}
                />
                <div className="pb-1">{`${plural(item.repeat, 'time')}`}</div>
            </div>

            <SelectOne items={actionKeys} />

            <InputField label="Shift" />
            <InputField label="Control" />
            <InputField label="Alt" />
        </div>
    );
}
