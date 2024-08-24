import { HTMLAttributes, SVGAttributes } from "react";
import { classNames } from "@/utils";

export function IconLibra({ className, title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGAttributes<SVGSVGElement>) { // pkg-size.dev
    return (
        <svg viewBox="0 0 24 24" className={classNames("fill-none stroke-current stroke-[1.5]", className)} strokeLinecap="round" strokeLinejoin="round" {...rest}>
            {title && <title>{title}</title>}
            <path d="m16 16 3-8 3 8a5 5 0 0 1-6 0ZM2 16l3-8 3 8a5 5 0 0 1-6 0Zm5 5h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
    );
}
