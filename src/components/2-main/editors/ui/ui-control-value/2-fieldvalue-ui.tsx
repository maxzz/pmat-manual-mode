import { InputHTMLAttributes, KeyboardEvent } from "react";
import { PrimitiveAtom as PA, useAtom } from "jotai";
import { ValueAs, ValueLife } from "@/store/manifest";
import { getValueUiState, mapIndexToValueLife } from "./select-uitils";
import { Dropdown, isKeyToClearDefault } from "./3-fieldvalue-dropdown";
import { classNames } from "@/utils";

const containerClasses = "\
ring-primary-600 \
\
focus-within:ring-primary-600 dark:focus-within:ring-primary-400 \
focus-within:ring-offset-primary-200 dark:focus-within:ring-offset-primary-800 \
\
focus-within:ring-1 focus-within:ring-offset-1 \
\
grid grid-cols-[minmax(0,1fr)_auto] rounded-sm overflow-hidden";

type FieldValueUiProps = InputHTMLAttributes<HTMLInputElement> & {
    useIt: boolean;
    valueLifeAtom: PA<ValueLife>;
    choosevalue: string | undefined;
};

export function FieldValueUi({ useIt, valueLifeAtom, choosevalue, className, ...rest }: FieldValueUiProps) {
    const [valueLife, setValueLife] = useAtom(valueLifeAtom);

    const {
        dropdownAllItems,
        dropdownSelectedIndex,
        context,
        inputText,
        showAsRef,
        disabled,
        title,
    } = getValueUiState(valueLife, choosevalue);

    const showInputText = !useIt && !valueLife.isRef && !valueLife.value;

    function onSetDropdownIndex(idx: number) {
        setValueLife((v) => mapIndexToValueLife(idx, v, context));
    }

    function onSetText(value: string) {
        setValueLife((v) => ({ ...v, value, isRef: false, valueAs: ValueAs.askReuse, isNon: false, }));
    }

    function onSetKey(event: KeyboardEvent) {
        showAsRef && isKeyToClearDefault(event.key) &&
            setValueLife((v) => ({ ...v, value: '', isRef: false, valueAs: ValueAs.askReuse, isNon: true, }));
    }

    function onBlur() {
        showAsRef && !inputText &&
            setValueLife((v) => ({ ...v, value: '', isRef: false, valueAs: ValueAs.askReuse, isNon: false, }));
    }

    console.log('valueLife.isNon', valueLife.isNon, 'showAsRef', showAsRef);

    return (
        <div className={classNames(containerClasses, !useIt && "opacity-30 cursor-pointer", className)} {...rest}>
            <input
                className={classNames(
                    "px-2 py-1 text-primary-700 dark:text-primary-200 bg-primary-50 dark:bg-primary-700 outline-none",
                    showAsRef && !valueLife.isNon && "text-[0.65rem] tracking-tighter font-semibold dark:font-normal !text-blue-600 dark:!text-blue-400 cursor-default",
                    disabled && "pointer-events-none",
                )}
                value={showInputText ? '' : inputText}
                onChange={(event) => onSetText(event.target.value)}
                onKeyDown={onSetKey}
                onBlur={onBlur}
                readOnly={disabled}
                disabled={disabled}
                title={title}
                autoComplete="off" list="autocompleteOff" spellCheck={false}
            />

            {!!dropdownAllItems.length &&
                Dropdown({ items: dropdownAllItems, selectedIndex: dropdownSelectedIndex, onSetIndex: onSetDropdownIndex })
            }
        </div>
    );
}

//Note: Theoretically, two buttons cannot be selected. Only the first one will be pressed, but it depends on the application (submit vs. trigger).
