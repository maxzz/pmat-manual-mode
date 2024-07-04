import { proxy } from 'valtio';
import type { ScriptItem, SrcriptItemUnsaved } from '../script-items-types';
import { gScriptState } from './2-script-state';
import { uuid } from '@/utils';

export type ItemMeta = {
    uuid: number;
};

export type EditorState = { // in mem data
    selectedIdx: number;
    metaItems: ItemMeta[];
};

function initEditorState(scriptItems: ScriptItem[]): EditorState {
    const metaItems = scriptItems.map<SrcriptItemUnsaved>((_item) => ({ uuid: uuid.asRelativeNumber() }));
    return {
        selectedIdx: 0,
        metaItems: metaItems,
    };
}

export const gEditorState = proxy<EditorState>(initEditorState(gScriptState.scriptItems));
