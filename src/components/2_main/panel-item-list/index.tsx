import { useSnapshot } from "valtio";
import { ScriptItem } from "@/store/editor-script-types";
import { clientState } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./action-add-item";

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

function Row2() {
    return (
        <div className=""></div>
    );
}

export function PanelList() {
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="space-y-1">
            <Title />

            <div className={classNames("min-h-[20rem]", boxClasses)}>
                {scriptItems.map((item, idx) =>
                    <div className="grid grid-cols-[min-content,auto] gap-x-2" key={idx}>
                        <RowField item={item} />
                    </div>
                )}
            </div>
        </div>
    );
}
