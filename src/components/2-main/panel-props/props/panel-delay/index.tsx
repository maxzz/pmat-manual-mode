import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemDelay } from "@/store";
import { propsBoxClasses, InputField } from "../../ui";

export function InputDelay({ item }: { item: SrcriptItemDelay; }) {
    const snap = useSnapshot(item, { sync: true });
    return (
        <div className="flex items-end space-x-1" title="Delay in ms before performing the next action">
            <InputField className="w-12" label="Delay" horizontal
                value={`${snap.n}`}
                onChange={(e) => {
                    let n = parseInt(e.target.value);
                    if (Number.isNaN(n)) {
                        n = 1;
                    }
                    item.n = n;
                }}
            />
            <div className="pb-1">ms</div>
        </div>
    );
}

export function PropsDelay({ item, ...rest }: { item: SrcriptItemDelay; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputDelay item={item} />
        </div>
    );
}
