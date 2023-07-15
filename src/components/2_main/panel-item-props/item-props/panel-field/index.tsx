import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemField } from "@/store";
import { propsBoxClasses, InputField } from "../ui";

export function PropsField({ item, ...rest }: { item: SrcriptItemField; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputField label="Field label" value={`${snap.id}`} onChange={(e) => item.id = e.target.value} />
            <InputField label="Type" />
            <InputField label="Reference" />
            <InputField label="Value" />
        </div>
    );
}
