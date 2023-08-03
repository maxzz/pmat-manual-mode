import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import { clientState, editorState, moveScriptCursor, removeScriptItem, ScriptItem, SrcriptItemDelay, SrcriptItemField, SrcriptItemKey, SrcriptItemPos, swapScriptItems } from "@/store";
import { classNames, plural } from "@/utils";
import { editorFrameClasses, focusClasses } from "../../shared-styles";
import { Title } from "./panel-title";
import { ScrollList } from "./scroll-list";
import { IconField, IconKey, IconPos, IconDelay } from "@/components/ui/icons";
import { rowClasses, rowSelectedClasses } from "@/components/shared-styles";
import { MenuState, RowMenuButton } from "./row-popup-menu";

const detailKeyClasses = "px-1 py-px min-w-[1.5rem] text-[.55rem] leading-4 text-center border-primary-500 border rounded-sm";

const detailsFld = (item: SrcriptItemField) => `${item.id}`;
const detailsPos = (item: SrcriptItemPos) => `${`x: ${item.x}, y: ${item.y}`}`;
const detailsDly = (item: SrcriptItemDelay) => `${item.n}`;
const detailsKey = (item: SrcriptItemKey) => (<div className="flex items-center space-x-1">
    <div className={detailKeyClasses}>{item.char}</div> <div>{item.repeat} {plural(item.repeat, 'time')}</div>
</div>);

function rowText(item: ScriptItem): { name: string; icon: ReactNode; details: ReactNode; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 w-4 h-4" />, details: detailsFld(item) };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 w-4 h-4" />, details: detailsKey(item) };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, details: detailsPos(item) };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 w-4 h-4" />, details: detailsDly(item) };
        default: {
            const really: never = item;
            return { icon: null, name: '', details: '' };
        }
    }
}

function RowFieldCompound({ item, idx, menuState }: { item: ScriptItem; idx: number; menuState: MenuState; }) {
    const { selectedIdx } = useSnapshot(editorState);
    const { icon, name, details } = rowText(item);
    return (
        <div
            className={classNames("py-0.5 grid grid-cols-[min-content,5rem,1fr,min-content] items-center", rowClasses, selectedIdx === idx && rowSelectedClasses)}
            onClick={() => { editorState.selectedIdx = idx; }}
        >
            {icon}

            <div className="px-2 font-semibold">
                {name}
            </div>

            <div className="px-4 text-[.65rem]">
                {details}
            </div>

            <RowMenuButton item={item} idx={idx} menuState={menuState} />
        </div>
    );
}

export function PanelList() {
    const { scriptItems } = useSnapshot(clientState);
    const { itemMeta } = useSnapshot(editorState);
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <Title />

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
        </div>
    );
}
