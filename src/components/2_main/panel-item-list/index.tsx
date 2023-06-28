import { useSnapshot } from "valtio";
import { clientState, ScriptItem } from "@/store";
import { classNames } from "@/utils";
import { boxClasses } from "..";
import { Title } from "./action-add-item";
import { Fragment } from "react";
import { ScrollList } from "./scroll-list";

const selectedItemClasses = "text-primary-800 bg-primary-200";

function RowField({ item, idx }: { item: ScriptItem; idx: number; }) {
    const { selectedIdx } = useSnapshot(clientState);
    switch (item.type) {
        case 'field': {
            return <>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>Field</div>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>{item.id}</div>
            </>;
        }
        case 'key': {
            return <>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>Keystroke</div>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>{item.char}</div>
            </>;
        }
        case 'pos': {
            return <>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>Position</div>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>{item.x}</div>
            </>;
        }
        case 'delay': {
            return <>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>Delay</div>
                <div className={classNames(selectedIdx === idx && selectedItemClasses)} onClick={() => { clientState.selectedIdx = idx; }}>{item.n}</div>
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

            <ScrollList>
                <div className={classNames("grid grid-cols-[min-content,auto] gap-x-4", boxClasses)}>
                    {scriptItems.map((item, idx) =>
                        <Fragment key={idx}>
                            <RowField item={item} idx={idx} />
                        </Fragment>
                    )}
                </div>
            </ScrollList>
        </div>
    );
}
