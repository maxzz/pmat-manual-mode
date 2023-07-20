import { HTMLAttributes, useEffect } from "react";
import { subscribe, useSnapshot } from "valtio";
import { SrcriptItemPos, buildState } from "@/store";
import { propsBoxClasses, InputField } from "../../ui";
import { IconColorPicker, IconTarget } from "@/components/ui/icons";
import { PositionIcon } from "./target-pos";

export function TargetPositionDisplay() {
    const { getPosProgress } = useSnapshot(buildState);
    return (
        <div className="flex items-end space-x-2">
            <PositionIcon />

            <div className="">Test get target position:</div>

            {getPosProgress &&
                <div className="">{getPosProgress.point?.x}, {getPosProgress.point?.y}</div>
            }
        </div>
    );
}

function eventNumber(e: React.ChangeEvent<HTMLInputElement>, defValue: number = 0) {
    let n = parseInt(e.target.value);
    if (Number.isNaN(n)) {
        n = defValue;
    }
    return n;
}

export function PropsPos({ item, ...rest }: { item: SrcriptItemPos; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    useEffect(() => {
        const unsubscribe = subscribe(buildState.getPosProgress, () => {
            item.x = buildState.getPosProgress.point?.x || 0;
            item.y = buildState.getPosProgress.point?.y || 0;
        });
        return unsubscribe;
    }, []);
    return (
        <div className={propsBoxClasses} {...rest}>
            <div className="flex items-center space-x-2">
                <InputField className="w-12" label="x" horizontal={true} value={`${snap.x}`} onChange={(e) => item.x = eventNumber(e)} />
                <InputField className="w-12" label="y" horizontal={true} value={`${snap.y}`} onChange={(e) => item.y = eventNumber(e)} />
            </div>

            <div className="!mt-6 space-y-2">
                <div className="">
                    Click on the preview window below to select the click point.
                </div>

                <div className="aspect-auto h-28 bg-primary-700 border-primary-400 border grid place-items-center cursor-pointer">
                    {/* TODO: zoom in/out buttons */}
                    {/* TODO: button: select the click point */}
                    {/* app preview or drag with client rects recalculation */}

                    <div className="text-[.65rem]">
                        <IconTarget className="w-12 h-12" />
                    </div>
                </div>

<IconColorPicker className="w-8 h-8" />
                <TargetPositionDisplay />
            </div>
        </div>
    );
}
