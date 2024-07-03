import { HTMLAttributes, useEffect, useState } from "react";
import { proxy, snapshot, subscribe } from "valtio";
import { atomWithProxy } from "jotai-valtio";
import { CatalogItem, TransformValue } from "@/store/manifest";
import { FieldValueUi } from "./2-fieldvalue-ui";

type FieldValueBindingProps = HTMLAttributes<HTMLElement> & {
    proxyItem: CatalogItem;
};

export function FieldValueBinding({ proxyItem, ...rest }: FieldValueBindingProps) {
    const useIt = true;
    const choosevalue = undefined;

    const valueLifeProxy = useState(() => proxy(TransformValue.valueLife4Catalog(proxyItem)))[0];
    const valueLifeAtom = useState(() => atomWithProxy(valueLifeProxy, { sync: true }))[0];

    useEffect(() => {
        const unsubscribe = subscribe(valueLifeProxy, () => TransformValue.valueLife2Mani(snapshot(valueLifeProxy), proxyItem));
        return unsubscribe;
    }, [valueLifeProxy]);

    return (
        <FieldValueUi
            useIt={useIt}
            valueLifeAtom={valueLifeAtom}
            choosevalue={choosevalue}
            {...rest}
        />
    );
}
