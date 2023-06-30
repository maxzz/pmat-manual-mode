import { InputHTMLAttributes } from "react";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/shared-styles";

export function InputField({ label, className, ...rest }: { label: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex flex-col space-y-1">
            <div className="text-xs">{label}</div>
            <input className={classNames("px-2 py-1 bg-primary-700/50 rounded", focusClasses, className)} {...rest} />
        </label>
    );
}

export const propsBoxClasses = "px-4 space-y-4";
