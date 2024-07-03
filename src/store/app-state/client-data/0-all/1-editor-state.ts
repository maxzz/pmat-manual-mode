import { proxy } from 'valtio';
import { SrcriptItemUnsaved } from '../script-items-types';
import { clientState } from './2-client-state';
import { uuid } from '@/utils';

export type ItemMeta = {
    uuid: number;
};

export type EditorState = { // in mem data
    selectedIdx: number;
    itemMeta: ItemMeta[];
};

export const editorState = proxy<EditorState>({
    selectedIdx: 0,
    itemMeta: clientState.scriptItems.map<SrcriptItemUnsaved>((_item) => ({ uuid: uuid.asRelativeNumber() })),
});

if (editorState.selectedIdx > clientState.scriptItems.length) {
    editorState.selectedIdx = 0;
}
