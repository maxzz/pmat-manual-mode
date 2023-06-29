import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { IconArrowUp, IconArrowDown, IconTrash, IconClose, IconMenu } from "@/components/ui/icons";

export type MenuState = {
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
border-primary-500/50 \
dark:border-primary-100/50 \
border shadow rounded flex";

const submenuIconClasses = "p-1 w-5 h-5 hover:bg-primary-400 rounded";
const submenuDelClasses = "p-1 w-5 h-5 hover:text-white hover:bg-red-600 rounded";

function MenuButtons({ menuState, onClose }: { menuState: MenuState; onClose: (event: React.MouseEvent) => void; }) {
    const { onDelete, onUp, onDn, hasUp, hasDn } = menuState;
    return (
        <div className={submenuBoxClasses}>
            <IconArrowUp className={classNames(submenuIconClasses, !hasUp && "invisible")} title="Move item up" onClick={onUp} />
            <IconArrowDown className={classNames(submenuIconClasses, !hasDn && "invisible")} title="Move item down" onClick={onDn} />
            <IconTrash className={submenuDelClasses} title="Delete item" onClick={onDelete} />
            <IconClose className={submenuIconClasses} onClick={onClose} />
        </div>
    );
}

export function RowMenuButton({ item, idx, menuState }: { item: ScriptItem; idx: number; menuState: MenuState; }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); };
    const btnRef = useRef(null);
    useClickAway(btnRef, () => { setMenuOpen(false); });
    return (
        <button ref={btnRef} className="relative mr-1">
            <IconMenu
                className="p-1 w-5 h-5 hover:text-white hover:bg-primary-500 rounded"
                onClick={(event) => { event.preventDefault(); setMenuOpen(v => !v); }}
            />
            {menuOpen &&
                <MenuButtons onClose={onClose} menuState={menuState} />
            }
        </button>
    );
}
