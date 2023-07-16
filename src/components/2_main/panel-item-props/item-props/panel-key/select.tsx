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
data-[highlighted]:text-primary-50 \
data-[highlighted]:bg-primary-700 \
data-[highlighted]:outline \
data-[highlighted]:outline-1 \
data-[highlighted]:outline-primary-500 \
";

const Item = forwardRef(({ value, children }: { value: string; children: ReactNode; }, forwardRef: ForwardedRef<HTMLDivElement>) => {
    return (
        <S.Item className={`relative h-7 pr-8 pl-6 py-1 bg-primary-800 rounded flex items-center ${itemClasses}`} value={value} ref={forwardRef}>
            <S.ItemText className="">
                {children}
            </S.ItemText>
            <S.ItemIndicator className="absolute left-1 ">
                <IconCheck className="w-4 h-4" />
            </S.ItemIndicator>
        </S.Item>
    );
});

const scrollButtonClasses = "h-4 text-primary-200 bg-primary-800 flex items-center justify-center";

export function SelectOne({ items }: { items: string[]; }) {
    return (
        <S.Root>
            <S.Trigger className={classNames("w-full px-2 py-1 border-primary-500 border rounded flex items-center justify-between", focusClasses)}>
                <S.Value placeholder="select" />
                <S.Icon><IconChevronDown className="w-4 h-4" /> </S.Icon>
            </S.Trigger>

            <S.Portal>
                <S.Content className="text-xs text-primary-300 border-primary-500 border rounded-md overflow-hidden select-none">

                    <S.ScrollUpButton className={scrollButtonClasses}>
                        <IconChevronUp className="w-3 h-3" />
                    </S.ScrollUpButton>

                    <S.Viewport className="px-2 bg-primary-800">
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
