import { useSetAtom } from "jotai";
import { useSnapshot } from "valtio";
import { gScriptState, doSelectByKeyAtom, doSelectItemAtom, doSwapItemsAtom, doDeleteItemAtom } from "@/store";
import { SingleRow } from "./3-single-row";
import { MenuState } from "./4-row-popup-menu";
import { rowParentActiveClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";
// import { ScrollList } from "./scroll-list";

export function PanelActionsList() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    const selectByKey = useSetAtom(doSelectByKeyAtom);
    const selectItem = useSetAtom(doSelectItemAtom);
    const deleteItem = useSetAtom(doDeleteItemAtom);
    const swapItems = useSetAtom(doSwapItemsAtom);

    return (<>
        {/* <ScrollList> */}
        <div className={classNames("min-h-10 outline-none", rowParentActiveClasses)} tabIndex={0} onKeyDown={(e) => selectByKey(e.key)}>

            {/* <ScrollList> */}
            {scriptItemsSnap.map(
                (scriptItemSnap, idx) => {
                    const lastItemIdx = scriptItemsSnap.length - 1;

                    const menuState: MenuState = {
                        onDelete: (e) => { e.stopPropagation(); deleteItem(idx); },
                        onUp: (e) => { e.stopPropagation(); swapItems(idx, idx - 1); },
                        onDn: (e) => { e.stopPropagation(); swapItems(idx, idx + 1); },
                        hasUp: idx > 0,
                        hasDn: idx < lastItemIdx,
                    };

                    return (
                        <SingleRow
                            scriptItemSnap={scriptItemSnap}
                            menuState={menuState}
                            idx={idx}
                            onClick={(e) => selectItem(idx, (v) => e.ctrlKey ? !v : true)}
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
