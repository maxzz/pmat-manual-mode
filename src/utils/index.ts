export * from './classnames';
export * from './debounce';
export * from './disableHiddenChildren';
export * from './merge-options';
export * from './spy-all-icons';
export * from './uuid';
export * from './valtio-array';

export function plural(n: number, word: string) {
    return `${word}${n === 1 ? '' : 's'}`;
}
