import { ScriptItemKey } from "@/store/app-state/client-data/script-items-types";
import { getRowIconAndText } from "../../panel-actions/6-get-row-icon-and-text";

const panelEditorTitleClasses = "\
px-2 py-2 h-9 text-sm font-semibold \
\
bg-primary-200/50 dark:bg-primary-700/50 \
border-primary-500 \
border-b \
\
flex items-center justify-between";

function EmptyTitle() {
    return (
        <div className="-mx-1 -mt-1">
            <div className={panelEditorTitleClasses}>
                <span className="text-xs font-light">No action selected</span>
            </div>
        </div>
    );
}

export function InPanelPropsTitle({ type }: { type?: ScriptItemKey | undefined; }) {
    if (!type) {
        return <EmptyTitle />;
    }

    const { name, icon } = getRowIconAndText(type);
    return (
        <div className="-mx-1 -mt-1">
            <div className={panelEditorTitleClasses}>
                <div>
                    {name}{' '}
                    <span className="text-xs font-light">action properties</span>
                </div>

                {icon}
            </div>
        </div>
    );
}
