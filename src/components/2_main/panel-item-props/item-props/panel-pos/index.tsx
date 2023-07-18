import { HTMLAttributes } from "react";
import { useSnapshot } from "valtio";
import { SrcriptItemPos } from "@/store";
import { propsBoxClasses, InputField } from "../../ui";
import { IconTarget } from "@/components/ui/icons";
import { TargetPositionIcon } from "./target-pos";

export function PropsPos({ item, ...rest }: { item: SrcriptItemPos; } & HTMLAttributes<HTMLElement>) {
    const snap = useSnapshot(item);
    return (
        <div className={propsBoxClasses} {...rest}>
            <div className="flex items-center space-x-2">
                <InputField className="w-12" label="x" horizontal={true} value={`${snap.x}`} onChange={(e) => item.x = parseInt(e.target.value)} />
                <InputField className="w-12" label="y" horizontal={true} value={`${snap.y}`} onChange={(e) => item.y = parseInt(e.target.value)} />
            </div>

            <div className="!mt-6 space-y-2">
                <div className="">
                    Click on the preview window below to select the click point.
                </div>

                <div className="aspect-auto h-28 bg-primary-700 border-primary-400 border grid place-items-center cursor-pointer">
                    {/* TODO: zoom in/out buttons */}
                    {/* TODO: button: select the click point */}
                    {/* app preview or drag with client rects recalculation */}

                    <TargetPositionIcon />

                    <div className="text-[.65rem]">
                        <IconTarget className="w-12 h-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}
