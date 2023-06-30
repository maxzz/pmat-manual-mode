import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { useSnapshot } from "valtio";
import { ClientState, ItemDelay, ItemField, ItemKey, ItemPos, ScriptItem, clientState, editorState } from "@/store";
import { editorFrameClasses, focusClasses } from "../../shared-styles";
import { classNames } from "@/utils";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { Title } from "./title";

function ActionProps() {
    return (
        <div className=""></div>
    );
}

function rowText(item: ScriptItem): { name: string; icon: ReactNode; details: string; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 w-4 h-4" />, details: `${item.id}` };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 w-4 h-4" />, details: `${item.char}` };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, details: `${`x: ${item.x}, y: ${item.x}`}` };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 w-4 h-4" />, details: `${item.n}` };
        default: {
            const really: never = item;
            return { icon: null, name: '', details: '' };
        }
    }
}

function InputField({ label, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex flex-col">
            <div className="text-xs">{label}</div>
            <input className="px-2 py-1 bg-primary-700/50 rounded" {...rest} />
        </label>
    );
}

function PropsField({ item, ...rest }: { item: ItemField; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className="space-y-2" {...rest}>
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
        <div className="space-y-2" {...rest}>
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
        <div className="space-y-2" {...rest}>
            <InputField label="x" value={`${snap.x}`} onChange={(e) => item.x = parseInt(e.target.value)} />
            <InputField label="y" value={`${snap.y}`} onChange={(e) => item.y = parseInt(e.target.value)} />
        </div>
    );
}

function PropsDelay({ item, ...rest }: { item: ItemDelay; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className="space-y-2" {...rest}>
            <InputField label="Delay in ms" value={`${snap.n}`} onChange={(e) => item.n = parseInt(e.target.value)} />
        </div>
    );
}

function ItemProps({ idx }: { idx: number; }) {
    const { scriptItems } = useSnapshot(clientState);
    const snap = scriptItems[idx];
    if (!snap) {
        return null;
    }
    const item = clientState.scriptItems[idx];

    let Comp: ReactNode | null = null;
    switch (snap.type) {
        case 'field': /**/ { Comp = <PropsField item={item as ItemField} />; break; }
        case 'key':   /**/ { Comp = <PropsKey item={item as ItemKey} />; break; }
        case 'pos':   /**/ { Comp = <PropsPos item={item as ItemPos} />; break; }
        case 'delay': /**/ { Comp = <PropsDelay item={item as ItemDelay} />; break; }
        default: {
            const really: never = snap;
            Comp = null;
        }
    }

    const title = rowText(snap);

    return (
        <div className="">
            <div className="mt-1 mb-4 font-semibold flex items-center justify-between">
                <div className="">{title.name}</div>
                {title.icon}
            </div>

            {Comp && Comp}
        </div>
    );
}

export function PanelProps() {
    const { selectedIdx } = useSnapshot(editorState);
    return (
        <div className="space-y-1 select-none">
            <Title />

            <div className={classNames("min-h-[20rem]", editorFrameClasses, focusClasses)} tabIndex={0}>
                <ItemProps idx={selectedIdx} />
            </div>
        </div>
    );
}
