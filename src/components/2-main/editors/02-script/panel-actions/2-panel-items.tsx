import { useSnapshot } from "valtio";
import { gScriptState, gEditorState, moveScriptCursor, removeScriptItem, swapScriptItems } from "@/store";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { SingleRow } from "./3-single-row";
import { MenuState } from "./5-row-popup-menu";
import { classNames } from "@/utils";
// import { ScrollList } from "./scroll-list";

export function PanelActionsList() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    function onKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        const newIdx = moveScriptCursor(gEditorState.selectedIdxRef, gEditorState.metaItems.length, event.key);
        if (newIdx !== undefined) {
            gEditorState.metaItems[gEditorState.selectedIdxRef].isSelected = false;
            gEditorState.metaItems[newIdx].isSelected = true;
            gEditorState.selectedIdxRef = newIdx;
        }
    }

    return (<>
        {/* <ScrollList> */}
        <div className={classNames("min-h-[38px]", editorFrameClasses, focusClasses)} tabIndex={0} onKeyDown={onKeydown}>

            {/* <ScrollList> */}
            {scriptItemsSnap.map(
                (scriptItemSnap, idx) => {
                    if (!scriptItemSnap) {
                        return null;
                    }

                    const lastItemIdx = scriptItemsSnap.length - 1;
                    
                    const menuState: MenuState = {
                        onDelete: () => { removeScriptItem(gScriptState, gEditorState, idx); },
                        onUp: () => { idx > 0 && swapScriptItems(gScriptState, gEditorState, idx, idx - 1); },
                        onDn: () => { idx < lastItemIdx && swapScriptItems(gScriptState, gEditorState, idx, idx + 1); },
                        hasUp: idx > 0,
                        hasDn: idx < lastItemIdx,
                    };

                    return <SingleRow scriptItemSnap={scriptItemSnap} idx={idx} menuState={menuState} key={scriptItemSnap.unsaved.uuid} />;
                })
            }
            {/* </ScrollList> */}
        </div>

        {/* </ScrollList> */}
    </>);
}
