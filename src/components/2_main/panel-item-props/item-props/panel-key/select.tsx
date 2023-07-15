import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { IconChevronDown, IconDot } from '@/components/ui/icons';
import * as S from '@radix-ui/react-select';

const Item = forwardRef(({ value, children }: { value: string; children: ReactNode; }, forwardRef: ForwardedRef<HTMLDivElement>) => {
    return (
        <S.Item className="relative h-8 bg-primary-400 flex items-center" value={value} ref={forwardRef}>
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
                <S.Content className="">
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
