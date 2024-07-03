import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemDelay } from "@/store";
import { propsBoxClasses, InputField } from "../../ui";

export function InputDelay({ item }: { item: SrcriptItemDelay; }) {
    const snap = useSnapshot(item, { sync: true });

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        let n = +e.target.value;
        if (Number.isNaN(n)) {
            n = 1;
        }
        item.n = n;
    }

    return (
        <div className="flex items-end space-x-1" title="Delay in ms before performing the next action">
            <InputField
                className="w-12" horizontal
                label="Delay"
                value={`${snap.n}`}
                onChange={onChange}
            />

            <div className="pb-1">
                ms
            </div>
        </div>
    );
}

export function PropsEditorDelay({ item, ...rest }: { item: SrcriptItemDelay; } & HTMLAttributes<HTMLElement>) {
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputDelay item={item} />
        </div>
    );
}
