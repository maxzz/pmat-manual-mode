import { proxy } from 'valtio';
import { ScriptItem } from '@/store/editor-script-types';
import { loadUiInitialState, watchClientStateCnages } from './storage-client-data';

export * from './add-item';
export * from './initial-items';

export type ClientState = { // stored data
    scriptItems: ScriptItem[];
};

export type EditorState = { // in mem data
    selectedIdx: number;
};

export const clientState = proxy<ClientState>(loadUiInitialState());
export const editorState = proxy<EditorState>({
    selectedIdx: 0,
});

if (editorState.selectedIdx > clientState.scriptItems.length) {
    editorState.selectedIdx = 0;
}

watchClientStateCnages();
