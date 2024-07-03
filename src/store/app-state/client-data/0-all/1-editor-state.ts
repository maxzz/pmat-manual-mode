import { proxy } from 'valtio';
import { SrcriptItemUnsaved } from '../script-items-types';
import { clientState, EditorState } from './2-client-state';
import { uuid } from '@/utils';

export const editorState = proxy<EditorState>({
    selectedIdx: 0,
    itemMeta: clientState.scriptItems.map<SrcriptItemUnsaved>((_item) => ({ uuid: uuid.asRelativeNumber() })),
});

if (editorState.selectedIdx > clientState.scriptItems.length) {
    editorState.selectedIdx = 0;
}
