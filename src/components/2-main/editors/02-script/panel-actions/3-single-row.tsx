import { HTMLAttributes } from "react";
import { useAtomValue } from "jotai";
import { ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { rowClasses, rowSelectedClasses } from "@/components/ui/shared-styles";
import { MenuState, RowMenuButton } from "./4-row-popup-menu";
import { rowColumnDetails } from "./5-get-row-icon-and-details";

type SingleRowProps = HTMLAttributes<HTMLDivElement> & {
    scriptItemSnap: ScriptItem;
    menuState: MenuState;
    idx: number;
};

const singleRowClasses = "py-0.5 grid grid-cols-[min-content,5rem,1fr,min-content] items-center";

export function SingleRow({ scriptItemSnap, menuState, idx, ...rest }: SingleRowProps) {

    const isSelected = useAtomValue(scriptItemSnap.unsaved.selectedAtom);
    
    const { icon, name, details } = rowColumnDetails(scriptItemSnap);
    return (
        <div className={classNames(singleRowClasses, rowClasses, isSelected && rowSelectedClasses)} {...rest}>
            {icon}

            <div className="pl-3 pr-2 text-xs">
                {name}
            </div>

            <div className="px-4 text-[.65rem] font-light">
                {details}
            </div>

            <RowMenuButton menuState={menuState} />
        </div>
    );
}
