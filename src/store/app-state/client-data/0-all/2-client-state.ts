import { proxy } from 'valtio';
import type { ScriptItem } from '../script-items-types';
import { loadUiInitialState, watchClientStateChanges } from './3-client-storage';

export type ClientState = { // stored data
    scriptItems: ScriptItem[];
};

export const gClientState = proxy<ClientState>(loadUiInitialState());

watchClientStateChanges();

