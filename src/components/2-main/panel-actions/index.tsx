import { useSnapshot } from "valtio";
import { clientState, editorState, moveScriptCursor, removeScriptItem, ScriptItem, swapScriptItems } from "@/store";
import { classNames } from "@/utils";
import { editorFrameClasses, focusClasses } from "../../ui/shared-styles";
import { PanelActionsTitle } from "./caption";
import { ScrollList } from "./scroll-list";
import { rowClasses, rowSelectedClasses } from "@/components/ui/shared-styles";
import { MenuState, RowMenuButton } from "./row-popup-menu";
import { rowDetails } from "./row-details";

function RowFieldCompound({ item, idx, menuState }: { item: ScriptItem; idx: number; menuState: MenuState; }) {
    const { selectedIdx } = useSnapshot(editorState);
    const { icon, name, details } = rowDetails(item);
    return (
        <div
            className={classNames("py-0.5 grid grid-cols-[min-content,5rem,1fr,min-content] items-center", rowClasses, selectedIdx === idx && rowSelectedClasses)}
            onClick={() => { editorState.selectedIdx = idx; }}
        >
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

function PanellItems() {
    const { scriptItems } = useSnapshot(clientState);
    const { itemMeta } = useSnapshot(editorState);
    return (<>
        {/* <ScrollList> */}
        <div
            className={classNames("min-h-[38px]", editorFrameClasses, focusClasses)}
            tabIndex={0}
            onKeyDown={(event) => moveScriptCursor(event.key)}
        >
            {/* <ScrollList> */}
            {scriptItems.map((item, idx) => {
                if (!item) {
                    return null;
                }

                const menuState: MenuState = {
                    onDelete: () => { removeScriptItem(idx); },
                    onUp: () => { idx > 0 && swapScriptItems(idx, idx - 1); },
                    onDn: () => { idx < scriptItems.length - 1 && swapScriptItems(idx, idx + 1); },
                    hasUp: idx > 0,
                    hasDn: idx < scriptItems.length - 1,
                };

                return <RowFieldCompound item={item} idx={idx} menuState={menuState} key={itemMeta[idx].uuid} />;
            })}
            {/* </ScrollList> */}
        </div>
        {/* </ScrollList> */}
    </>);
}

export function PanelActions() {
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <PanelActionsTitle />
            <PanellItems />
        </div>
    );
}
