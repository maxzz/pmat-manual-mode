import { ScriptItemKey } from "@/store/app-state/client-data/script-items-types";
import { groupTitleClasses } from "@/components/ui/shared-styles";
import { getRowIconAndText } from "../../panel-actions/6-get-row-icon-and-text";
import { classNames } from "@/utils";

export function PanelActionTitle() {
    return (
        <div className={classNames("h-7 flex items-end justify-between", groupTitleClasses)}>
            <div className="pl-2">
                Action properties
            </div>
        </div>
    );
}

const panelEditorTitleClasses = "\
px-2 py-2 text-sm font-semibold \
\
bg-primary-200/50 dark:bg-primary-700/50 \
border-primary-500 \
border-b \
\
flex items-center justify-between";

export function InPanelPropsTitle({ type }: { type?: ScriptItemKey | undefined; }) {
    if (!type) {
        return (
            <div className="-mx-1 -mt-1">
                <div className={panelEditorTitleClasses}>
                    No action selected
                </div>
            </div>
        );
    }
    const { name, icon } = getRowIconAndText(type);
    return (
        <div className="-mx-1 -mt-1">
            <div className={panelEditorTitleClasses}>
                <div>
                    {'<'}{name}{'>'} action properties
                </div>

                {icon}
            </div>
        </div>
    );
}
