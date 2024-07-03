import { proxy } from 'valtio';
import type { ScriptItem, SrcriptItemUnsaved } from '../script-items-types';
import { gClientState } from './2-client-state';
import { uuid } from '@/utils';

export type ItemMeta = {
    uuid: number;
};

export type EditorState = { // in mem data
    selectedIdx: number;
    itemMetas: ItemMeta[];
};

function initEditorState(scriptItems: ScriptItem[]): EditorState {
    const items = scriptItems.map<SrcriptItemUnsaved>((_item) => ({ uuid: uuid.asRelativeNumber() }));
    return {
        selectedIdx: 0,
        itemMetas: items,
    };
}

export const gEditorState = proxy<EditorState>(initEditorState(gClientState.scriptItems));
