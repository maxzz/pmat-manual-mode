import { proxy, subscribe } from 'valtio';
import { ItemUnsaved, ScriptItem } from '@/store/editor-script-types';
import { loadUiInitialState, watchClientStateCnages } from './storage-client-data';
import { uuid } from '@/utils';

export * from './add-item';
export * from './initial-items';

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
    itemMeta: clientState.scriptItems.map<ItemUnsaved>((item) => ({ uuid: uuid.asRelativeNumber() })),
});

if (editorState.selectedIdx > clientState.scriptItems.length) {
    editorState.selectedIdx = 0;
}

watchClientStateCnages();

(function watchClientStateCnages() {
    subscribe(editorState, () => {
        console.log('editorState', JSON.stringify(editorState));
    });
})();
