export * from './classnames';
export * from './debounce';
export * from './disableHiddenChildren';
export * from './uuid';
export * from './merge-options';
export * from './valtio-array';

export function plural(n: number, word: string) {
    return `${word}${n === 1 ? '' : 's'}`;
}
