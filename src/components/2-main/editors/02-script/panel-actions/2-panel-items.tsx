import { useSetAtom } from "jotai";
import { useSnapshot } from "valtio";
import { gScriptState, selectByKeyAtom, selectItemAtom, swapItemsAtom, deleteItemAtom } from "@/store";
import { SingleRow } from "./3-single-row";
import { MenuState } from "./4-row-popup-menu";
import { rowParentActiveClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";
// import { ScrollList } from "./scroll-list";

export function PanelActionsList() {
    const { scriptItems: scriptItemsSnap } = useSnapshot(gScriptState);

    const selectByKey = useSetAtom(selectByKeyAtom);
    const selectItem = useSetAtom(selectItemAtom);
    const deleteItem = useSetAtom(deleteItemAtom);
    const swapItems = useSetAtom(swapItemsAtom);

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
                            onClick={() => selectItem(idx, (v) => /*!v*/true)}
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
