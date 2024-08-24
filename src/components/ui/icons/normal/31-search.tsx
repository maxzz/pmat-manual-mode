import { HTMLAttributes, SVGAttributes } from "react";
import { classNames } from "@/utils";

export function IconSearch({ className, title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGAttributes<SVGSVGElement>) { // pkg-size.dev
    return (
        <svg viewBox="0 0 24 24" className={classNames("fill-none stroke-current stroke-[1.5]", className)} strokeLinecap="round" strokeLinejoin="round" {...rest}>
            {title && <title>{title}</title>}
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21l-4.3-4.3" />
        </svg>
    );
}
