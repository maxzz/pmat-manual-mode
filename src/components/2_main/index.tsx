import { PanelList } from './panel-actions';
import { PanelProps } from './panel-item-props';

export function SectionMain() {
    return (
        <div className="p-4 max-w-[720px] flex flex-col gap-2">
            <div className="h-full grid grid-cols-[minmax(330px,1fr),minmax(200px,1fr)] gap-4">
                <PanelList />
                <PanelProps />
            </div>
        </div>
    );
}
