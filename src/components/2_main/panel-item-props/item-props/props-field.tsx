import { InputHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/shared-styles";
import { propsBoxClasses, InputField } from "./ui";

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
