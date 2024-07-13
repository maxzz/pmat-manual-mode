import { useSnapshot } from "valtio";
import { SrcriptItemKey, actionKeys } from "@/store";
import { InputSelect } from "../../ui";

const keyNames = actionKeys.map(([diplayName]) => diplayName);

export function InputKey({ item }: { item: SrcriptItemKey; }) {
    const snap = useSnapshot(item);
    return (
        <InputSelect
            items={keyNames}
            label="Key"
            labelClasses="min-w-[9ch]"
            horizontal
            value={snap.char}
            onValueChange={(value) => item.char = value}
            title="Key for this action" />
    );
}
