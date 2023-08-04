import { InputHTMLAttributes } from "react";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/shared-styles";

export function InputField({ label, horizontal = false, className, labelClasses, ...rest }: { label: string; horizontal?: boolean; labelClasses?: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={classNames("flex", horizontal ? "items-center space-x-2" : "flex-col space-y-1")}>
            <div className={classNames("text-xs", labelClasses)}>{label}</div>
            <input className={classNames("px-2 py-1 bg-primary-200 dark:bg-primary-700/50 rounded", focusClasses, className)} {...rest} />
        </label>
    );
}
