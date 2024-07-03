import { gEditorState } from "../0-all";

// export function moveScriptCursor0(key: string) {
//     const totalItems = gEditorState.itemMetas.length;
//     let selectedIdx = gEditorState.selectedIdx;
//     if (totalItems) {
//         switch (key) {
//             case 'ArrowUp': {
//                 (selectedIdx > 0) && gEditorState.selectedIdx--;
//                 break;
//             }
//             case 'ArrowDown': {
//                 (selectedIdx < totalItems - 1) && gEditorState.selectedIdx++;
//                 break;
//             }
//             case 'Home': {
//                 gEditorState.selectedIdx = 0;
//                 break;
//             }
//             case 'End': {
//                 gEditorState.selectedIdx = totalItems - 1;
//                 break;
//             }
//         }
//     }
// }

export function moveScriptCursor(selectedIdx: number, totalItems: number, key: string): number | undefined {
    let rv: number | undefined;
    if (totalItems) {
        switch (key) {
            case 'ArrowUp': {
                (selectedIdx > 0) && (rv = selectedIdx - 1);
                break;
            }
            case 'ArrowDown': {
                (selectedIdx < totalItems - 1) && (rv = selectedIdx + 1);
                break;
            }
            case 'Home': {
                rv = 0;
                break;
            }
            case 'End': {
                rv = totalItems - 1;
                break;
            }
        }
    }
    return rv;
}
