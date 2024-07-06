import { useCallback, useEffect } from "react";
import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { PanelActionsTitle } from "./1-panel-title";
import { PanelActionsList } from "./2-panel-items";
import { selectedIdxAtom, selectItemAtom } from "@/store";

export function PanelActions() {

    const cb = useAtomCallback(
        useCallback(
            (get: Getter, set: Setter) => {
                console.log('PanelActions mounted');
                set(selectItemAtom, get(selectedIdxAtom), true);
            }, []
        )
    );

    useEffect(() => { cb(); }, []);

    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <PanelActionsTitle />
            <PanelActionsList />
        </div>
    );
};
