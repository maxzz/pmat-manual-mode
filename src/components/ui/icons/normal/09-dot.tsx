import { HTMLAttributes } from "react";
import { classNames } from "@/utils";

export function IconDot({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <circle cx="12.1" cy="12.1" r="1" />
        </svg>
    );
}
