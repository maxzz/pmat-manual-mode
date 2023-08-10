import { gropuTitleClasses } from "@/components/ui/shared-styles";
import { classNames } from "@/utils";

export function PanelActionTitle() {
    return (
        <div className={classNames("h-7 flex items-end justify-between", gropuTitleClasses)}>
            <div className="pl-2">
                Action properties
            </div>
        </div>
    );
}
