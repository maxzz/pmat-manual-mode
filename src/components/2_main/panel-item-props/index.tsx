import { useSnapshot } from "valtio";
import { clientState } from "@/store";
import { boxClasses } from "..";

function ActionProps() {
    return (
        <div className=""></div>
    );
}

export function PanelProps() {
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="space-y-1 select-none">
            <div className="h-7 flex items-end justify-between">
                <div className="">Action properties</div>
            </div>

            <div className={boxClasses}>
                {scriptItems.map((item, idx) => {
                    if (!item) {
                        return null;
                    }
                    return (
                        <div className="grid grid-cols-[min-content,auto] gap-x-2" key={idx}>
                            <div className="">{item.type}</div>
                            <div className="">{'char' in item && item.char}</div>
                        </div>);
                }
                )}
            </div>
        </div>
    );
}
