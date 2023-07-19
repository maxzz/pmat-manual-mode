import { useState } from "react";
import { useSnapshot } from "valtio";
import { buildState, PointXY } from "@/store";
import { classNames } from "@/utils";
import { IconTarget } from "@/components/ui/icons";

function PositionIcon() {
    const [iconVisible, setIconVisible] = useState(true);

    function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
        const elm = event.target as HTMLDivElement;

        // event.preventDefault();
        // elm.classList.add("cursor-tm-target")

        elm.setPointerCapture(event.pointerId);
        setIconVisible(false);
    }

    function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
        setIconVisible(true);
    }

    function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
        if (iconVisible) {
            return;
        }

        const point: PointXY = { x: roundInt(event.pageX), y: roundInt(event.pageY) };
        buildState.getPosProgress.point = point;
    }

    function onPointerCancel(event: React.PointerEvent<HTMLDivElement>) {
        setIconVisible(true);
    }
//, iconVisible ? "cursor-pointer" : "cursor-tm-target"
    return (
        <div
            className={classNames("w-12 h-12 bg-primary-900 rounded")}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerMove={onPointerMove}
            onPointerCancel={onPointerCancel}
        >
            <IconTarget className={classNames("text-primary-200", !iconVisible && "invisible")} />
        </div>

    );
}

function round2(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
function roundInt(num: number) {
    return Math.round(num);
}

export function TargetPositionIcon() {
    const { getPosProgress } = useSnapshot(buildState);
    return (
        <div className="flex items-end space-x-2">
            <div className="">Test get target position:</div>

            <PositionIcon />

            {getPosProgress &&
                <div className="">{getPosProgress.point?.x}, {getPosProgress.point?.y}</div>
            }
        </div>
    );
}
//TODO: add center dot to cursor icon
//TODO: add contrast outline to cursor icon
