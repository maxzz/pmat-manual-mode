import { PanelList } from './panel-item-list';
import { PanelProps } from './panel-item-props';

export const boxClasses = "px-2 py-1 border-primary-500 border rounded";

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
