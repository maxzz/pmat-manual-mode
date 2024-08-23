import { SpyAllIcons } from "@/utils/spy-all-icons";
import { NormalEditor } from "../01-normal";
import { ScriptEditor } from "../02-script";

export function SectionMain() {
    return (
        <div>
            <NormalEditor />
            <ScriptEditor />
            <SpyAllIcons includeSvgSymbols={false} />
        </div>
    );
}
