import { groupTitleClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";
import { MenuAddButton } from "./1-panel-title-menu";
import { panelEditorTitleClasses } from "../panel-props/0-all/1-editor-title";

export function PanelActionsTitle() {
    return (
        <div className="-mx-1 -mt-1">
            <div className={classNames("p-2 pr-1 h-9 flex items-center justify-between", panelEditorTitleClasses)}>
                <div>
                    Fill in actions
                </div>
                <MenuAddButton />
            </div>
        </div>
    );
}
