import { useSnapshot } from "valtio";
import { ScriptItem } from "@/store/editor-types";
import { clientState } from "@/store";
import { classNames } from "@/utils";
import { IconAdd } from "@/components/ui/icons";
import { boxClasses } from "..";

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

// function RowField({ item }: { item: ScriptItem; }) {
//     return (<>
//         {
//             item.type === 'field'
//                 ? (<>
//                     <div className="">Field</div>
//                     <div className="">{item.id}</div>
//                 </>)
//                 : item.type === 'key'
//                     ? (<>
//                         <div className="">Keystroke</div>
//                         <div className="">{item.char}</div>
//                     </>)
//                     : item.type === 'pos'
//                         ? (<>
//                             <div className="">Position</div>
//                             <div className="">{item.x}</div>
//                         </>)
//                         : item.type === 'delay'
//                             ? (<>
//                                 <div className="">Delay</div>
//                                 <div className="">{item.n}</div>
//                             </>)
//                             : null
//         }
//     </>);
// }

function Row2() {
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
    const { scriptItems } = useSnapshot(clientState);
    return (
        <div className="space-y-1">
            <div className="h-7 flex items-end justify-between">
                <div className="">Fill in actions</div>
                <ButtonAdd />
            </div>

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
