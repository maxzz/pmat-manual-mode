import { useSnapshot } from "valtio";
import { gScriptState, gEditorState, moveScriptCursor, removeScriptItem, swapScriptItems } from "@/store";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { SingleRow } from "./3-single-row";
import { MenuState } from "./5-row-popup-menu";
import { classNames } from "@/utils";
// import { ScrollList } from "./scroll-list";

export function PanelActionsList() {
    const { scriptItems } = useSnapshot(gScriptState);
    const { itemMetas } = useSnapshot(gEditorState);
    return (<>
        {/* <ScrollList> */}

        <div
            className={classNames("min-h-[38px]", editorFrameClasses, focusClasses)}
            tabIndex={0}
            onKeyDown={
                (event) => {
                    const newIdx = moveScriptCursor(gEditorState.selectedIdx, gEditorState.itemMetas.length, event.key);
                    if (newIdx !== undefined) {
                        gEditorState.selectedIdx = newIdx;
                    }
                }
            }
        >
            {/* <ScrollList> */}
            {scriptItems.map(
                (item, idx) => {
                    if (!item) {
                        return null;
                    }
                    const menuState: MenuState = {
                        onDelete: () => { removeScriptItem(gScriptState, gEditorState, idx); },
                        onUp: () => { idx > 0 && swapScriptItems(gScriptState, gEditorState, idx, idx - 1); },
                        onDn: () => { idx < scriptItems.length - 1 && swapScriptItems(gScriptState, gEditorState, idx, idx + 1); },
                        hasUp: idx > 0,
                        hasDn: idx < scriptItems.length - 1,
                    };

                    return <SingleRow item={item} idx={idx} menuState={menuState} key={itemMetas[idx].uuid} />;
                })
            }
            {/* </ScrollList> */}
        </div>

        {/* </ScrollList> */}
    </>);
}
