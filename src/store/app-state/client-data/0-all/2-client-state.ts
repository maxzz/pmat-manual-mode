import { proxy } from 'valtio';
import { ScriptItem } from '../script-items-types';
import { loadUiInitialState, watchClientStateChanges } from './3-client-storage';

export type ClientState = { // stored data
    scriptItems: ScriptItem[];
};

export const clientState = proxy<ClientState>(loadUiInitialState());

watchClientStateChanges();

//(function watchClientStateCnages() { subscribe(editorState, () => console.log('editorState', JSON.stringify(editorState))); })();
