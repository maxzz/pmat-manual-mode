import { proxy } from 'valtio';
import type { ScriptItem } from '../script-items-types';
import { gScriptState } from './2-script-state';
import { uuid } from '@/utils';

export type ItemMeta = {
    uuid: number;
    isSelected: boolean;
};

export type EditorState = { // in mem data
    selectedIdxRef: number;
    metaItems: ItemMeta[];
};

function initEditorState(scriptItems: ScriptItem[]): EditorState {
    const metaItems = scriptItems.map<ItemMeta>(
        (_item) => ({
            uuid: uuid.asRelativeNumber(),
            isSelected: false,
        })
    );
    return {
        selectedIdxRef: 0,
        metaItems: metaItems,
    };
}

export const gEditorState = proxy<EditorState>(initEditorState(gScriptState.scriptItems));
