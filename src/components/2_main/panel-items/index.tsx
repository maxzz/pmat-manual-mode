import { initialItems } from "@/store";
import { classNames } from "@/utils";
import { IconAdd } from "@/components/ui/icons";
import { boxClasses } from "..";

function ActionRow() {
    return (
        <div className=""></div>
    );
}

function ButtonAdd() {
    return (
        <button className="p-1 border-primary-500 border rounded">
            <IconAdd className="w-3 h-3" />
        </button>
    );
}

export function PanelList() {
    return (
        <div className="space-y-1">
            <div className="h-7 flex items-end justify-between">
                <div className="">Fill in actions</div>
                <ButtonAdd />
            </div>

            <div className={classNames("min-h-[20rem]", boxClasses)}>
                {initialItems.map((item, idx) =>
                    <div className="grid grid-cols-[min-content,auto] gap-x-2" key={idx}>
                        <div className="">{item.type}</div>
                        <div className="">{'char' in item && item.char}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
