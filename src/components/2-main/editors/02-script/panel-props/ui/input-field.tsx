import { InputHTMLAttributes } from "react";
import { classNames } from "@/utils";
import { focusClasses } from "@/components/ui/shared-styles";

const inputTextClasses = "px-2 py-1 \
border-primary-400 border dark:border-none \
bg-primary-100 dark:bg-primary-700/50 rounded \
";

type InputFieldProps = {
    label: string;
    horizontal?: boolean;
    labelClasses?: string;
};

export function InputField({ label, horizontal = false, className, labelClasses, ...rest }: InputFieldProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={classNames("flex", horizontal ? "items-center space-x-2" : "flex-col space-y-1")}>
            <div className={classNames("text-xs", labelClasses)}>{label}</div>
            <input className={classNames(inputTextClasses, focusClasses, className)} {...rest} />
        </label>
    );
}
