import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemKey } from "@/store";
import { propsBoxClasses, InputField } from "../ui";
import { classNames, plural } from "@/utils";
import { SelectOne } from "./select";
import { focusClasses } from "@/components/shared-styles";

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

const modifierKeys: string[] = [
    'None',
    'Any',
    'Left',
    'Right',
];

function Modifier({ label, name, item }: { label: string; name: string; item: SrcriptItemKey; }) {
    return (
        <div className={classNames("flex", "items-center space-x-2")}>
            <div className="text-xs">{label}</div>
            <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses)} />
        </div>
    );
}

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

            <SelectOne items={actionKeys} value={snap.char} onValueChange={(value) => item.char = value} />

            <Modifier label="Shift" name="shift" item={item}/>
            <Modifier label="Control" name="ctrl" item={item}/>
            <Modifier label="Alt" name="alt" item={item}/>
        </div>
    );
}
