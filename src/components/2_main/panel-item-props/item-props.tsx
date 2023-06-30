import { InputHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemField, SrcriptItemKey, SrcriptItemPos, SrcriptItemDelay, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/shared-styles";

function InputField({ label, className, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex flex-col space-y-1">
            <div className="text-xs">{label}</div>
            <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses, className)} {...rest} />
        </label>
    );
}

const propsBoxClasses = "px-4 space-y-4";

function PropsField({ item, ...rest }: { item: SrcriptItemField; } & HTMLAttributes<HTMLElement>) {
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

function PropsKey({ item, ...rest }: { item: SrcriptItemKey; } & HTMLAttributes<HTMLElement>) {
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

function PropsPos({ item, ...rest }: { item: SrcriptItemPos; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <div className="flex items-center space-x-2">
                <InputField className="w-12" label="x" value={`${snap.x}`} onChange={(e) => item.x = parseInt(e.target.value)} />
                <InputField className="w-12" label="y" value={`${snap.y}`} onChange={(e) => item.y = parseInt(e.target.value)} />
            </div>

            <div className="!mt-6 space-y-2">
                <div className="">Click on the preview window below to select the click point.</div>
                <div className="aspect-auto h-28 bg-primary-700 border-primary-400 border grid place-items-center cursor-pointer">
                    {/* TODO: zoom in/out buttons */}
                    {/* TODO: button: select the click point */}
                    <div className="text-[.65rem]">app preview</div>
                </div>
            </div>
        </div>
    );
}

function PropsDelay({ item, ...rest }: { item: SrcriptItemDelay; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputField label="Delay in ms" value={`${snap.n}`} onChange={(e) => item.n = parseInt(e.target.value)} />
        </div>
    );
}

export function getPropsView({ snap, item }: { snap: ScriptItem; item: ScriptItem; }): ReactNode {
    let rv: ReactNode | null = null;
    switch (snap.type) {
        case 'field': /**/ { rv = <PropsField item={item as SrcriptItemField} />; break; }
        case 'key':   /**/ { rv = <PropsKey item={item as SrcriptItemKey} />; break; }
        case 'pos':   /**/ { rv = <PropsPos item={item as SrcriptItemPos} />; break; }
        case 'delay': /**/ { rv = <PropsDelay item={item as SrcriptItemDelay} />; break; }
        default: {
            const really: never = snap;
            rv = null;
        }
    }
    return rv;
}
