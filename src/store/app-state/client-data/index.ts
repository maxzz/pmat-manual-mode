import { proxy } from 'valtio';
import { SrcriptItemUnsaved, ScriptItem } from '@/store/app-state/client-data/script-items-types';
import { loadUiInitialState, watchClientStateCnages } from './storage-client-data';
import { uuid } from '@/utils';

export * from './script-items-access';
export * from './script-items-test-data';

export type ClientState = { // stored data
    scriptItems: ScriptItem[];
};

export type ItemMeta = {
    uuid: number;
};

export type EditorState = { // in mem data
    selectedIdx: number;
    itemMeta: ItemMeta[];
};

export const clientState = proxy<ClientState>(loadUiInitialState());

export const editorState = proxy<EditorState>({
    selectedIdx: 0,
    itemMeta: clientState.scriptItems.map<SrcriptItemUnsaved>((_item) => ({ uuid: uuid.asRelativeNumber() })),
});

if (editorState.selectedIdx > clientState.scriptItems.length) {
    editorState.selectedIdx = 0;
}

watchClientStateCnages();

//(function watchClientStateCnages() { subscribe(editorState, () => console.log('editorState', JSON.stringify(editorState))); })();
