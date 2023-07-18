import { InputHTMLAttributes } from "react";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/shared-styles";

export function InputField({ label, horizontal = false, className, ...rest }: { label: string; horizontal?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={classNames("flex", horizontal ? "items-center space-x-2": "flex-col space-y-1")}>
            <div className="text-xs">{label}</div>
            <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses, className)} {...rest} />
        </label>
    );
}
