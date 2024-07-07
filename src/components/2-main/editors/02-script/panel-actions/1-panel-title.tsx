import { groupTitleClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";
import { MenuAddButton } from "./1-panel-title-menu";

export function PanelActionsTitle() {
    return (
        <div className="h-7 flex items-end justify-between">
            <div className={classNames("pl-2", groupTitleClasses)}>
                Fill in actions
            </div>

            <MenuAddButton />
        </div>
    );
}
