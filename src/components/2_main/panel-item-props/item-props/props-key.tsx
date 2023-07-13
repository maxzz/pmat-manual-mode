import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemKey } from "@/store";
import { propsBoxClasses, InputField } from "./ui";

export function PropsKey({ item, ...rest }: { item: SrcriptItemKey; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputField label="Key" value={`${snap.char}`} onChange={(e) => item.char = e.target.value} />
            <InputField label="Repeat" />
            <InputField label="Shift" />
            <InputField label="Control" />
            <InputField label="Alt" />
        </div>
    );
}
