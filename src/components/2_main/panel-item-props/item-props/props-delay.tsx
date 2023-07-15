import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemDelay } from "@/store";
import { propsBoxClasses, InputField } from "./ui";

export function PropsDelay({ item, ...rest }: { item: SrcriptItemDelay; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputField className="w-12" horizontal={true} label="Delay in ms" value={`${snap.n}`} onChange={(e) => item.n = parseInt(e.target.value)} />
        </div>
    );
}
