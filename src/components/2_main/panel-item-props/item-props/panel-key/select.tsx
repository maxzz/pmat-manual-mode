import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { IconChevronDown, IconDot } from '@/components/ui/icons';
import * as S from '@radix-ui/react-select';

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

const itemClasses = "data-[highlighted]:text-red-300 data-[highlighted]:bg-green-200";

const Item = forwardRef(({ value, children }: { value: string; children: ReactNode; }, forwardRef: ForwardedRef<HTMLDivElement>) => {
    return (
        <S.Item className={`relative h-8 pr-8 pl-6 bg-primary-400 flex items-center ${itemClasses}`} value={value} ref={forwardRef}>
            <S.ItemIndicator className="abosulte left-0 ">
                <IconDot className="w-6 h-6" />
            </S.ItemIndicator>
            <S.ItemText className="pl-8">
                {children}
            </S.ItemText>
        </S.Item>
    );
});

export function SelectOne({ items }: { items: string[]; }) {
    return (
        <S.Root>
            <S.Trigger className="flex items-center space-x-2">
                <S.Value placeholder="select" />
                <S.Icon><IconChevronDown className="w-4 h-4" /> </S.Icon>
            </S.Trigger>

            <S.Portal>
                <S.Content className="select-none">
                    <S.Viewport>
                        {items.map((item) => (
                            <Item value={item} key={item}>{item}</Item>
                        ))}
                    </S.Viewport>
                </S.Content>
            </S.Portal>
        </S.Root>
    );
}
