import { editorFrameClasses, focusClasses } from "@/components/ui/shared-styles";
import { ItemPropsEditor } from "./2-item-props-editor";
import { classNames } from "@/utils";

export function PanelProps() {
    return (
        <div className={classNames("min-h-80 overflow-hidden", "text-xs select-none grid grid-rows-[auto,1fr] gap-2", editorFrameClasses, focusClasses)}>
            <ItemPropsEditor />
        </div>
    );
}
