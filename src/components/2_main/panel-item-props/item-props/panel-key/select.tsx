import { IconChevronDown, IconDot } from '@/components/ui/icons';
import * as S from '@radix-ui/react-select';
import { ReactNode } from 'react';

function Item({ value, children }: { value: string; children: ReactNode; }) {
    return (
        <S.Item value="1">
            <S.ItemText>
                {children}
            </S.ItemText>
            <S.ItemIndicator>
                <IconDot className="w-4 h-4" />
            </S.ItemIndicator>
        </S.Item>
    );
}

export function SelectOne({ items }: { items: string[]; }) {
    return (
        <S.Root>
            <S.Trigger className="flex items-center space-x-2">
                <S.Value placeholder="select" />
                <S.Icon><IconChevronDown className="w-4 h-4" /> </S.Icon>
            </S.Trigger>

            <S.Portal>
                <S.Content className="w-10 h-10">
                    <S.Viewport>
                        <Item value="1">1</Item>
                        <Item value="2">2</Item>
                        <Item value="3">3</Item>
                    </S.Viewport>
                </S.Content>
            </S.Portal>
        </S.Root>
    );
}
