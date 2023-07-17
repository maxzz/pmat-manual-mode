import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { IconCheck, IconChevronDown, IconChevronUp, IconDot } from '@/components/ui/icons';
import * as S from '@radix-ui/react-select';
import { focusClasses } from '@/components/shared-styles';
import { classNames } from '@/utils';

const item1Classes = 'text-[13px] \
leading-none \
text-violet11 \
rounded-[3px] \
flex \
items-center \
h-[25px] \
pr-[35px] \
pl-[25px] \
relative \
select-none \
data-[disabled]:text-mauve8 \
data-[disabled]:pointer-events-none \
data-[highlighted]:outline-none \
data-[highlighted]:bg-violet9 \
data-[highlighted]:text-violet1';

const itemClasses = "\
bg-primary-900 \
data-[highlighted]:text-primary-50 \
data-[highlighted]:bg-primary-700 \
data-[highlighted]:outline \
data-[highlighted]:outline-1 \
data-[highlighted]:outline-primary-500 \
";

const Item = forwardRef(({ value, children }: { value: string; children: ReactNode; }, forwardRef: ForwardedRef<HTMLDivElement>) => {
    return (
        <S.Item className={classNames("rounded", itemClasses)} value={value} ref={forwardRef}>
            <div className={classNames("relative h-6 pr-8 pl-6 py-2 flex items-center")}>
                <S.ItemText className="text-[.55rem] h-6">
                    {children}
                </S.ItemText>
                <S.ItemIndicator className="absolute left-1">
                    <IconCheck className="w-3 h-3" />
                </S.ItemIndicator>
            </div>
        </S.Item>
    );
});

const triggerClasses = "w-full px-2 py-1 border-primary-500 border rounded flex items-center justify-between";
const contentClasses = "text-xs text-primary-300 bg-primary-900 border-primary-500 border rounded-md shadow shadow-primary-500 overflow-hidden select-none";
const scrollButtonClasses = "h-4 text-primary-200 bg-primary-900 flex items-center justify-center";

export function SelectOne({ items, value, onValueChange }: { items: string[]; value: string; onValueChange: (value: string) => void; }) {
    return (
        <S.Root value={value} onValueChange={onValueChange}>
            <S.Trigger className={classNames(triggerClasses, focusClasses)}>
                <S.Value placeholder="select" />
                <S.Icon><IconChevronDown className="w-3 h-3" /> </S.Icon>
            </S.Trigger>

            <S.Portal>
                <S.Content className={contentClasses}>

                    <S.ScrollUpButton className={scrollButtonClasses}>
                        <IconChevronUp className="w-3 h-3" />
                    </S.ScrollUpButton>

                    <S.Viewport className="p-2">
                        {items.map((item) => (
                            <Item value={item} key={item}>{item}</Item>
                        ))}
                    </S.Viewport>

                    <S.ScrollDownButton className={scrollButtonClasses}>
                        <IconChevronDown className="w-3 h-3" />
                    </S.ScrollDownButton>

                </S.Content>
            </S.Portal>
        </S.Root>
    );
}
