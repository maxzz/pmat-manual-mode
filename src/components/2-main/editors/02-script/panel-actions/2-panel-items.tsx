import { useSetAtom } from "jotai";
import { useSnapshot } from "valtio";
import { gScriptState, selectByKeyAtom, removeScriptItem, selectItemAtom, swapItemsAtom, swapScriptItems } from "@/store";
import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { SingleRow } from "./3-single-row";
import { MenuState } from "./5-row-popup-menu";
import { classNames } from "@/utils";
// import { ScrollList } from "./scroll-list";

export function PanelActionsList() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    const selectByKey = useSetAtom(selectByKeyAtom);
    const selectItem = useSetAtom(selectItemAtom);
    const swapItems = useSetAtom(swapItemsAtom);

    return (<>
        {/* <ScrollList> */}
        <div className={classNames("min-h-[38px]", editorFrameClasses, focusClasses)} tabIndex={0} onKeyDown={(e) => selectByKey(e.key)}>

            {/* <ScrollList> */}
            {scriptItemsSnap.map(
                (scriptItemSnap, idx) => {
                    const lastItemIdx = scriptItemsSnap.length - 1;

                    const menuState: MenuState = {
                        onDelete: () => {
                            removeScriptItem(gScriptState, idx);
                        },
                        onUp: () => {
                            if (idx > 0) {
                                swapItems(idx, idx - 1);
                            }
                        },
                        onDn: () => {
                            if (idx < lastItemIdx) {
                                swapItems(idx, idx + 1);
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
                            onClick={() => selectItem(idx, true)}
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
