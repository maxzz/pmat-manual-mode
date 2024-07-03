import { gEditorState } from "../0-all";

export function moveScriptCursor(key: string) {
    if (gEditorState.itemMetas.length) {
        switch (key) {
            case 'ArrowUp': {
                (gEditorState.selectedIdx > 0) && gEditorState.selectedIdx--;
                break;
            }
            case 'ArrowDown': {
                (gEditorState.selectedIdx < gEditorState.itemMetas.length - 1) && gEditorState.selectedIdx++;
                break;
            }
            case 'Home': {
                gEditorState.selectedIdx = 0;
                break;
            }
            case 'End': {
                gEditorState.selectedIdx = gEditorState.itemMetas.length - 1;
                break;
            }
        }
    }
}
