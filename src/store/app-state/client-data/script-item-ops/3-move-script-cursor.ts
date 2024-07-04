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
