import { useSnapshot } from "valtio";
import { SrcriptItemKey, SrcriptItemModifiers, modifierKeys } from "@/store";
import { classNames } from "@/utils";
import { InputSelectUi } from "../../ui";

function Modifier({ label, name, item }: { label: string; name: SrcriptItemModifiers; item: SrcriptItemKey; }) {
    const snap = useSnapshot(item);
    return (
        <div className={classNames("max-w-[10rem] flex items-center space-x-2")}>
            <div className="min-w-[8ch] text-xs">{label}</div>
            <InputSelectUi items={modifierKeys} value={`${snap[name]}`} onValueChange={(value) => item[name] = +value} />
            {/* <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses)} /> */}
        </div>
    );
}

export function InputModifiers({ item }: { item: SrcriptItemKey; }) {
    return (
        <div className="-mx-2 pt-3">
            <div className="p-2 border-primary-400 dark:border-primary-700 border rounded flex flex-col space-y-1 relative">
                <div className="absolute left-1 -top-2.5 px-1 bg-primary-100 dark:bg-primary-800">
                    Key modifiers
                </div>

                <Modifier label="Shift" name="shift" item={item} />
                <Modifier label="Control" name="ctrl" item={item} />
                <Modifier label="Alt" name="alt" item={item} />
            </div>
        </div>
    );
}
