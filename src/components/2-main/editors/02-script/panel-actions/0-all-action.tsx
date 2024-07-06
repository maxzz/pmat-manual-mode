import { useAtomCallback } from "jotai/utils";
import { PanelActionsTitle } from "./1-panel-title";
import { PanelActionsList } from "./2-panel-items";
import { useCallback } from "react";
import { Getter } from "jotai";
import { Setter } from "jotai/experimental";
import { selectedIdxAtom, selectItemAtom } from "@/store";

export function PanelActions() {

    useAtomCallback(
        () => {
            useCallback(
                (get: Getter, set: Setter) => {
                    console.log('PanelActions mounted');
                    set(selectItemAtom, get(selectedIdxAtom), true);
                }, []
            );
        }, {}
    );

    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <PanelActionsTitle />
            <PanelActionsList />
        </div>
    );
};
