import { ReactNode } from "react";

const panelEditorTitleClasses = "\
px-2 py-2 text-sm font-semibold \
\
bg-primary-200/50 dark:bg-primary-700/50 \
border-primary-500 \
border-b \
\
flex items-center justify-between";

export function InPanelPropsTitle({ name, icon }: { name: string; icon: ReactNode; }) {
    return (
        <div className="-mx-1 -mt-1">
            <div className={panelEditorTitleClasses}>
                <div>
                    {name}
                </div>

                {icon}
            </div>
        </div>
    );
}
