import { InputHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { useSnapshot } from "valtio";
import { ItemField, ItemKey, ItemPos, ItemDelay, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/shared-styles";

function InputField({ label, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex flex-col space-y-1">
            <div className="text-xs">{label}</div>
            <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses)} {...rest} />
        </label>
    );
}

const propsBoxClasses = "px-4 space-y-4";

function PropsField({ item, ...rest }: { item: ItemField; } & HTMLAttributes<HTMLElement>) {
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

function PropsKey({ item, ...rest }: { item: ItemKey; } & HTMLAttributes<HTMLElement>) {
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

function PropsPos({ item, ...rest }: { item: ItemPos; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <InputField label="x" value={`${snap.x}`} onChange={(e) => item.x = parseInt(e.target.value)} />
            <InputField label="y" value={`${snap.y}`} onChange={(e) => item.y = parseInt(e.target.value)} />
        </div>
    );
}

function PropsDelay({ item, ...rest }: { item: ItemDelay; } & HTMLAttributes<HTMLElement>) {
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
        case 'field': /**/ { rv = <PropsField item={item as ItemField} />; break; }
        case 'key':   /**/ { rv = <PropsKey item={item as ItemKey} />; break; }
        case 'pos':   /**/ { rv = <PropsPos item={item as ItemPos} />; break; }
        case 'delay': /**/ { rv = <PropsDelay item={item as ItemDelay} />; break; }
        default: {
            const really: never = snap;
            rv = null;
        }
    }
    return rv;
}
