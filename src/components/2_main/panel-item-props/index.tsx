import { initialItems } from "@/store";
import { boxClasses } from "..";

function ActionProps() {
    return (
        <div className=""></div>
    );
}

export function PanelProps() {
    return (
        <div className="space-y-1">
            <div className="h-7 flex items-end justify-between">
                <div className="">Action properties</div>
            </div>

            <div className={boxClasses}>
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
