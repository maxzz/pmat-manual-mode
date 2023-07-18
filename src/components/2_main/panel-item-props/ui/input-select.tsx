import { InputHTMLAttributes } from "react";
import { StringValueChange, SelectOne, SelectItemText } from ".";
import { classNames } from "@/utils";

export function InputSelect({ items, label, labelClasses, title, horizontal = false, className, ...rest }: { items: SelectItemText[]; label: string; labelClasses?: string; horizontal?: boolean; } & StringValueChange & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={classNames("flex", horizontal ? "items-center space-x-2" : "flex-col space-y-1")} title={title}>
            <div className={classNames("text-xs", labelClasses)}>{label}</div>
            <SelectOne items={items} {...rest} />
        </div>
    );
}
