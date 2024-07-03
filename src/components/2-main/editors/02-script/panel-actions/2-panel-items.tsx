import { useSnapshot } from "valtio";
import { clientState, editorState, moveScriptCursor, removeScriptItem, swapScriptItems } from "@/store";
import { classNames } from "@/utils";
import { editorFrameClasses, focusClasses } from "../../../../ui/shared-styles";
// import { ScrollList } from "./scroll-list";
import { MenuState } from "./5-row-popup-menu";
import { SingleRow } from "./3-single-row";

export function PanellItems() {
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
            {scriptItems.map(
                (item, idx) => {
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

                    return <SingleRow item={item} idx={idx} menuState={menuState} key={itemMeta[idx].uuid} />;
                })
            }
            {/* </ScrollList> */}
        </div>

        {/* </ScrollList> */}
    </>);
}
