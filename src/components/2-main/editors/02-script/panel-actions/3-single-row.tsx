import { useSnapshot } from "valtio";
import { gEditorState, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { rowClasses, rowSelectedClasses } from "@/components/ui/shared-styles";
import { MenuState, RowMenuButton } from "./5-row-popup-menu";
import { rowColumnDetails } from "./4-row-column-details";

const singleRowClasses = "py-0.5 grid grid-cols-[min-content,5rem,1fr,min-content] items-center";

export function SingleRow({ item, idx, menuState }: { item: ScriptItem; idx: number; menuState: MenuState; }) {
    const { selectedIdx } = useSnapshot(gEditorState);
    const setSelectedIdx = () => { gEditorState.selectedIdx = idx; };
    const { icon, name, details } = rowColumnDetails(item);
    return (
        <div className={classNames(singleRowClasses, rowClasses, selectedIdx === idx && rowSelectedClasses)} onClick={setSelectedIdx}>
            {icon}

            <div className="pl-3 pr-2 text-xs">
                {name}
            </div>

            <div className="px-4 text-[.65rem]">
                {details}
            </div>

            <RowMenuButton item={item} idx={idx} menuState={menuState} />
        </div>
    );
}
