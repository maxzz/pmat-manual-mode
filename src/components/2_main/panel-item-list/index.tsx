import { useSnapshot } from "valtio";
import { clientState, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./action-add-item";
import { Fragment } from "react";

function RowField({ item }: { item: ScriptItem; }) {
    switch (item.type) {
        case 'field': {
            return <>
                <div className="">Field</div>
                <div className="">{item.id}</div>
            </>;
        }
        case 'key': {
            return <>
                <div className="">Keystroke</div>
                <div className="">{item.char}</div>
            </>;
        }
        case 'pos': {
            return <>
                <div className="">Position</div>
                <div className="">{item.x}</div>
            </>;
        }
        case 'delay': {
            return <>
                <div className="">Delay</div>
                <div className="">{item.n}</div>
            </>;
        }
        default: {
            const really: never = item;
            console.error(really);
        }
    }
}

export function PanelList() {
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="min-h-[20rem] flex flex-col space-y-1 select-none">
            <Title />

            <div className={classNames("grid grid-cols-[min-content,auto] gap-x-4", boxClasses)}>
                {scriptItems.map((item, idx) =>
                    <Fragment key={idx}>
                        <RowField item={item} />
                    </Fragment>
                )}
            </div>
        </div>
    );
}
