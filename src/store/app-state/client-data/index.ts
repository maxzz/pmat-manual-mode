import { proxy } from 'valtio';
import { ScriptItem } from '@/store/editor-script-types';
import { initialItems } from './initial-items';

export * from './add-item';
export * from './initial-items';

type ClientState = {
    scriptItems: ScriptItem[];
};

export const clientState = proxy<ClientState>({
    scriptItems: [...initialItems],
});
