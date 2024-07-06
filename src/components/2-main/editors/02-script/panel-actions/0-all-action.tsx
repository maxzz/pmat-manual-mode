import { useCallback, useEffect } from "react";
import { Getter, Setter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { PanelActionsTitle } from "./1-panel-title";
import { PanelActionsList } from "./2-panel-items";
import { selectedIdxAtom, selectItemAtom, useInitSelectedIdx } from "@/store";

export function PanelActions() {
    const cb = useInitSelectedIdx();
    useEffect(() => { cb(); }, []);
    return (
        <div className="h-full min-h-[20rem] flex flex-col space-y-1 select-none">
            <PanelActionsTitle />
            <PanelActionsList />
        </div>
    );
};
