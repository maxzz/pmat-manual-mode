import React, { Fragment } from 'react';

type ItemType = 'key' | 'pos' | 'delay';

type ItemKey = {
    type: 'key',
    char: string;
};

type ItemPos = {
    type: 'pos',
    x: number;
    y: number;
};

type ItemDelay = {
    type: 'delay',
    n: number;
};

type Item = ItemKey | ItemPos | ItemDelay;

const items: Item[] = [
    {
        type: 'key', char: 'a',
    },
    {
        type: 'key', char: 'a',
    },
    {
        type: 'key', char: 'a',
    },
    {
        type: 'key', char: 'a',
    },
];

function List() {
    return (
        <div className="">
            <div className="py-2">Items</div>
            <div className="px-2 py-1 border-primary-500 border rounded">
                {items.map((item, idx) =>
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
        <div className="p-4 max-w-xl">
            <List />
        </div>
    );
}
