import { NormalEditor } from "../01-normal";
import { ScriptEditor } from "../02-script";
// import { TestAllIcons } from "@/components/ui/icons/icons-test";

export function SectionMain() {
    return (
        <div>
            <NormalEditor />
            <ScriptEditor />
            {/* <TestAllIcons /> */}
        </div>
    );
}
