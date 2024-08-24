import { NormalEditor } from "../01-normal";
import { ScriptEditor } from "../02-script";
import { SpyAllIcons } from "@/utils";

export function SectionMain() {
    return (
        <div>
            <NormalEditor />
            <ScriptEditor />
            {/* <SpyAllIcons includeSvgSymbols={false} /> */}
        </div>
    );
}
