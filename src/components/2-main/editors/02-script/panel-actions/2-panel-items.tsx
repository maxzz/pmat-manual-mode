import { useSnapshot } from "valtio";
import { gScriptState, removeScriptItem, swapScriptItems } from "@/store";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { SingleRow } from "./3-single-row";
import { MenuState } from "./5-row-popup-menu";
import { classNames } from "@/utils";

import { moveSelectedAtom, selectAtom, selectedRefAtom } from "@/store/app-state/client-data/0-all/5-selected-atom";
import { useSetAtom } from "jotai";

// import { ScrollList } from "./scroll-list";

export function PanelActionsList() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    // const { selectedIdx } = useSnapshot(rightPanel);

    const setSelectedRef = useSetAtom(selectedRefAtom);
    const moveSelected = useSetAtom(moveSelectedAtom);
    const selectItem = useSetAtom(selectAtom);

    function onKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        moveSelected(event.key);
        // const newIdx = moveScriptCursor(setSelectedRef, gEditorState.metaItems.length, event.key);
        // if (newIdx !== undefined) {
        //     gEditorState.metaItems[setSelectedRef].isSelected = false;
        //     gEditorState.metaItems[newIdx].isSelected = true;
        //     rightPanel.selectedIdx = newIdx;
        // }
    }

    // const setSelectedIdx = (idx: number) => {
    //     setSelectedRef(idx);
    // };

    // const setSelectedIdx = (idx: number) => {
    //     gEditorState.metaItems[selectedIdx].isSelected = false;
    //     gEditorState.metaItems[idx].isSelected = true;
    //     rightPanel.selectedIdx = idx;
    // };

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
                        onDelete: () => {
                            removeScriptItem(gScriptState, idx);
                        },
                        onUp: () => {
                            if (idx > 0) {
                                swapScriptItems(gScriptState, idx, idx - 1);
                            }
                        },
                        onDn: () => {
                            if (idx < lastItemIdx) {
                                swapScriptItems(gScriptState, idx, idx + 1);
                            }
                        },
                        hasUp: idx > 0,
                        hasDn: idx < lastItemIdx,
                    };

                    return (
                        <SingleRow
                            scriptItemSnap={scriptItemSnap}
                            menuState={menuState}
                            idx={idx}
                            onClick={() => {
                                // setSelectedIdx(idx);
                                setSelectedRef(idx);
                                selectItem(scriptItemSnap.unsaved.selectedAtom, true);
                            }}
                            key={scriptItemSnap.unsaved.id4}
                        />
                    );
                })
            }
            {/* </ScrollList> */}
        </div>

        {/* </ScrollList> */}
    </>);
}
