import { HTMLAttributes, InputHTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemKey, SrcriptItemModifiers } from "@/store";
import { propsBoxClasses, InputField } from "../../ui";
import { classNames, plural } from "@/utils";
import { SelectItemText, SelectOne, StringValueChange } from "../../ui";

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

export function InputSelect({ label, labelClasses, title, horizontal = false, className, ...rest }: { label: string; labelClasses?: string; horizontal?: boolean; } & StringValueChange & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={classNames("flex", horizontal ? "items-center space-x-2" : "flex-col space-y-1")} title={title}>
            <div className={classNames("text-xs", labelClasses)}>{label}</div>
            <SelectOne items={actionKeys} {...rest} />
        </div>
    );
}

export function InputRepeat({ item }: { item: SrcriptItemKey; }) {
    const snap = useSnapshot(item);
    return (
        <div className="flex items-end space-x-1">
            <InputField className="w-10" labelClasses="min-w-[9ch]" label="Repeat" horizontal
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
    );
}

const modifierKeys: SelectItemText[] = [
    ['None', '0'],
    ['Any', '3'],
    ['Left', '1'],
    ['Right', '2'],
];

function Modifier({ label, name, item }: { label: string; name: SrcriptItemModifiers; item: SrcriptItemKey; }) {
    const snap = useSnapshot(item);
    return (
        <div className={classNames("flex items-center space-x-2")}>
            <div className="min-w-[8ch] text-xs">{label}</div>
            <SelectOne items={modifierKeys} value={`${snap[name]}`} onValueChange={(value) => item[name] = +value} />
            {/* <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses)} /> */}
        </div>
    );
}

export function PropsKey({ item, ...rest }: { item: SrcriptItemKey; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputSelect label="Key" labelClasses="min-w-[9ch]" horizontal value={snap.char} onValueChange={(value) => item.char = value} title="Key for this action" />

            <InputRepeat item={item} />

            <div className="pt-4">
                <div className="p-2 border-primary-700 border rounded flex flex-col space-y-1 relative">
                    <div className="absolute left-1 -top-2.5 px-1 bg-primary-800">Key modifiers</div>
                    <Modifier label="Shift" name="shift" item={item} />
                    <Modifier label="Control" name="ctrl" item={item} />
                    <Modifier label="Alt" name="alt" item={item} />
                </div>
            </div>
        </div>
    );
}
