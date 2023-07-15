import * as S from '@radix-ui/react-select';

export function SelectOne({ items }: { items: string[]; }) {
    return (
        <S.Root>
            <S.Trigger className="">
                <S.Value placeholder="select" />
            </S.Trigger>

            <S.Portal>
                <S.Content className="w-10 h-10">
                    <S.Viewport>
                        <S.Item value="1">
                            <S.ItemText>
                                11
                            </S.ItemText>
                            <S.ItemText>
                                12
                            </S.ItemText>
                            <S.ItemText>
                                13
                            </S.ItemText>
                            <S.ItemText>
                                15
                            </S.ItemText>
                        </S.Item>
                    </S.Viewport>
                </S.Content>
            </S.Portal>
        </S.Root>
    );
}
