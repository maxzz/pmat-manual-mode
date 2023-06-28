import { proxy, subscribe } from 'valtio';
import { ScriptItem } from '@/store/editor-script-types';
import { initialItems } from './initial-items';
import { mergeDefaultAndLoaded } from '@/utils';
import { loadUiInitialState, watchClientStateCnages } from './storage-data';

export * from './add-item';
export * from './initial-items';

export type ClientState = {
    scriptItems: ScriptItem[];
};

export const clientState = proxy<ClientState>(loadUiInitialState());

watchClientStateCnages();