import React, { Fragment } from 'react';
import { classNames } from '@/utils';
import { IconAdd } from '../ui/icons';
import { Item } from '@/store/editor-types';
import { initialItems } from '@/store';

function ActionRow() {
    return (
        <div className=""></div>
    );
}

function ActionProps() {
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

const boxClasses = "px-2 py-1 border-primary-500 border rounded";

function PanelList() {
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

function PanelProps() {
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

export function SectionMain() {
    return (
        <div className="p-4 max-w-xl flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-4">
                <PanelList />
                <PanelProps />
            </div>
        </div>
    );
}
