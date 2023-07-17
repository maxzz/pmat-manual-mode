import { PanelList } from './panel-script-item-list';
import { PanelProps } from './panel-item-props';

export function SectionMain() {
    return (
        <div className="p-4 max-w-[720px] flex flex-col gap-2">
            <div className="h-full grid grid-cols-2 gap-4">
                <PanelList />
                <PanelProps />
            </div>
        </div>
    );
}
