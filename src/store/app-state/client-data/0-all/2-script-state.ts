import { proxy } from 'valtio';
import type { ScriptItem } from '../script-items-types';
import { loadUiInitialStateFromStorage, watchScriptStateChanges } from './3-script-storage';

export type ScriptState = { // stored data
    scriptItems: ScriptItem[];
};

export const gScriptState = proxy<ScriptState>(loadUiInitialStateFromStorage());

watchScriptStateChanges();

