import { PanelActions } from '../panel-actions';
import { PanelProps } from '../panel-props';

export function ScriptEditor() {
    return (
        <div className="p-4 max-w-3xl flex flex-col gap-2">
            <div className="h-full grid grid-cols-[minmax(250px,1fr),minmax(180px,1fr)] gap-4">
                <PanelActions />
                <PanelProps />
            </div>
        </div>
    );
}
