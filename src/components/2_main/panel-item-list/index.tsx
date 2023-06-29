import { ReactNode, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import { clientState, ScriptItem } from "@/store";
import { classNames, removeImm, swap } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./title";
import { ScrollList } from "./scroll-list";
import { IconField, IconKey, IconPos, IconDelay, IconMenu, IconArrowDown, IconArrowUp, IconClose, IconTrash } from "@/components/ui/icons";
import { rowClasses, rowSelectedClasses } from "@/components/shared-styles";
import { useClickAway } from "react-use";

function rowText(item: ScriptItem): { name: string; icon: ReactNode; details: string; } {
    switch (item.type) {
        case 'field': /**/ return { /**/ name: "Field"     /**/, icon: <IconField /**/ className="ml-2 w-4 h-4" />, details: `${item.id}` };
        case 'key':   /**/ return { /**/ name: "Keystroke" /**/, icon: <IconKey   /**/ className="ml-2 w-4 h-4" />, details: `${item.char}` };
        case 'pos':   /**/ return { /**/ name: "Position"  /**/, icon: <IconPos   /**/ className="ml-2 mt-1 w-4 h-4" />, details: `${`x: ${item.x}, y: ${item.x}`}` };
        case 'delay': /**/ return { /**/ name: "Delay"     /**/, icon: <IconDelay /**/ className="ml-2 w-4 h-4" />, details: `${item.n}` };
        default: {
            const really: never = item;
            return { icon: null, name: '', details: '' };
        }
    }
}

type MenuState = {
    onDelete: (event: React.MouseEvent) => void;
    onUp: (event: React.MouseEvent) => void;
    onDn: (event: React.MouseEvent) => void;
    hasUp: boolean;
    hasDn: boolean;
};

const submenuBoxClasses = "absolute -right-2 -top-[5px] px-2 py-1 \
text-primary-800 \
dark:text-primary-200 \
\
bg-primary-100 \
dark:bg-primary-800 \
\
border-primary-300/50 \
dark:border-primary-300/50 \
border shadow rounded-sm flex";

const submenuIconClasses = "p-1 w-5 h-5 hover:bg-primary-400 rounded";
const submenuDelClasses = "p-1 w-5 h-5 hover:text-white hover:bg-red-600 rounded";

function MenuButtons({ onClose, onDelete, onUp, onDn, hasUp, hasDn }: { onClose: (event: React.MouseEvent) => void; } & MenuState) {
    return (
        <div className={submenuBoxClasses}>
            <IconArrowUp className={classNames(submenuIconClasses, !hasUp && "invisible")} title="Move item up" onClick={onUp} />
            <IconArrowDown className={classNames(submenuIconClasses, !hasDn && "invisible")} title="Move item down" onClick={onDn} />
            <IconTrash className={submenuDelClasses} title="Delete item" onClick={onDelete} />
            <IconClose className={submenuIconClasses} onClick={onClose} />
        </div>
    );
}

function RowFieldCompound({ item, idx, menuState }: { item: ScriptItem; idx: number; menuState: MenuState }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); };
    const btnRef = useRef(null);
    useClickAway(btnRef, () => { setMenuOpen(false); });

    const { selectedIdx } = useSnapshot(clientState);
    const { icon, name, details } = rowText(item);
    return (
        <div
            className={classNames("py-0.5 grid grid-cols-[min-content,5rem,1fr,min-content] items-center", rowClasses, selectedIdx === idx && rowSelectedClasses)}
            onClick={() => { clientState.selectedIdx = idx; }}
        >
            {icon}

            <div className="px-2 font-semibold">
                {name}
            </div>

            <div className="px-4 text-xs">
                {details}
            </div>

            <button ref={btnRef} className="relative mr-1">
                <IconMenu
                    className="p-1 w-5 h-5 hover:text-white hover:bg-primary-500 rounded"
                    onClick={(event) => { event.preventDefault(); setMenuOpen(v => !v); }}
                />
                {menuOpen &&
                    <MenuButtons onClose={onClose} {...menuState} />
                }
            </button>
        </div>
    );
}

export function PanelList() {
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <Title />

            <ScrollList>
                <div className={classNames("", boxClasses)}>
                    {scriptItems.map((item, idx) => {
                        if (!item) {
                            return null;
                        }
                        const menuState: MenuState = {
                            onDelete: (event: React.MouseEvent) => { event.preventDefault(); delete clientState.scriptItems[idx]; },
                            onUp: (event: React.MouseEvent) => { event.preventDefault(); idx > 0 && swap(clientState.scriptItems, idx - 1, idx); },
                            onDn: (event: React.MouseEvent) => { event.preventDefault(); idx < scriptItems.length - 1 && swap(clientState.scriptItems, idx, idx + 1); },
                            hasUp: idx > 0,
                            hasDn: idx < scriptItems.length - 1,
                        };

                        return <RowFieldCompound item={item} idx={idx} menuState={menuState} key={idx} />;
                    })}
                </div>
            </ScrollList>
        </div>
    );
}
