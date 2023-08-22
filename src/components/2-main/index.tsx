import { NormalEditor } from './editors/01-normal';
import { ScriptEditor } from './editors/02-script';

export function SectionMain() {
    return (
        <div>
            <NormalEditor />
            <ScriptEditor />
        </div>
    );
}
