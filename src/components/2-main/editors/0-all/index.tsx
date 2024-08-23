import { TestAllIcons } from "@/components/ui/icons/icons-test";
import { NormalEditor } from "../01-normal";
import { ScriptEditor } from "../02-script";

export function SectionMain() {
    return (
        <div>
            <NormalEditor />
            <ScriptEditor />
            <TestAllIcons />
        </div>
    );
}
