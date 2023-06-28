import { proxy } from 'valtio';
import { ScriptItem } from '@/store/editor-script-types';
import { loadUiInitialState, watchClientStateCnages } from './storage-client-data';

export * from './add-item';
export * from './initial-items';

export type ClientState = {
    scriptItems: ScriptItem[];
    selectedIdx: number;
};

export const clientState = proxy<ClientState>(loadUiInitialState());

watchClientStateCnages();
