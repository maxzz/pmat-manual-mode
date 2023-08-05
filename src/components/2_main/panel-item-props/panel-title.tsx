import { gropuTitleClasses } from "@/components/shared-styles";
import { classNames } from "@/utils";

export function Title() {
    return (
        <div className={classNames("h-7 flex items-end justify-between", gropuTitleClasses)}>
            <div className="pl-2">Action properties</div>
        </div>
    );
}
