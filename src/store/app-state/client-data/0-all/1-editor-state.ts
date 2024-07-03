import { proxy } from 'valtio';
import type { ScriptItem, SrcriptItemUnsaved } from '../script-items-types';
import { clientState } from './2-client-state';
import { uuid } from '@/utils';

export type ItemMeta = {
    uuid: number;
};

export type EditorState = { // in mem data
    selectedIdx: number;
    itemMeta: ItemMeta[];
};

function initEditorState(scriptItems: ScriptItem[]) {
    const items = scriptItems.map<SrcriptItemUnsaved>((_item) => ({ uuid: uuid.asRelativeNumber() }));
    
    return {
        selectedIdx: 0,
        itemMeta: items,
    };
}

export const editorState = proxy<EditorState>(initEditorState(clientState.scriptItems));

// if (editorState.selectedIdx > clientState.scriptItems.length) {
//     editorState.selectedIdx = 0;
// }
