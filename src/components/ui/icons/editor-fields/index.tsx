import { HTMLAttributes } from "react";
import { classNames } from "@/utils";

// export function IconDelayFill({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
//     return (
//         <svg className={classNames("fill-current stroke-none", className)} viewBox="0 0 24 24" {...rest}>
//             {title && <title>{title}</title>}
//             <path d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Zm0-9Zm2.8 4.2l1.4-1.4l-3.2-3.2V8h-2v5.4l3.8 3.8ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4ZM12 20q2.925 0 4.963-2.038T19 13q0-2.925-2.038-4.963T12 6Q9.075 6 7.037 8.038T5 13q0 2.925 2.038 4.963T12 20Z" />
//         </svg>
//     );
// }

// export function IconKeyFill({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
//     return (
//         <svg className={classNames("fill-current stroke-none", className)} viewBox="0 0 24 24" {...rest}>
//             {title && <title>{title}</title>}
//             <path d="M7.75 8A2.75 2.75 0 0 0 5 10.75v2.5A2.75 2.75 0 0 0 7.75 16h.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25h.5a.75.75 0 0 0 0-1.5h-.5Zm3.75.75a.75.75 0 0 0-1.5 0V11h-.25a.75.75 0 0 0 0 1.5H10V14a2 2 0 0 0 2 2h.25a.75.75 0 0 0 0-1.5H12a.5.5 0 0 1-.5-.5v-1.5h.75a.75.75 0 0 0 0-1.5h-.75V8.75Zm8 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Zm-4 4.25a.5.5 0 0 1 .5-.5h.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V13ZM5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4H5.25ZM3.5 7.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5Z" />
//         </svg>
//     );
// }

export function IconDelay({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...rest}>
            {title && <title>{title}</title>}
            <path d="M12.13 7V5.32m-5.96 7.65H4.5" />
            <path d="M19.77 12.96c0 2.12-.75 3.93-2.23 5.42-1.48 1.48-3.28 2.22-5.42 2.22s-3.93-.74-5.42-2.22c-1.48-1.48-2.22-3.29-2.22-5.42s.74-3.93 2.22-5.42c1.48-1.48 3.29-2.23 5.42-2.23s3.93.75 5.42 2.23a7.37 7.37 0 0 1 2.23 5.42Z" />
            <path d="M6.17 12.96H4.49" />
            <path d="M12.13 7V5.32" />
            <path d="M19.77 12.96h-1.68" />
            <path d="M12.13 20.6v-1.67" />
            <path d="M12.13 8.68v4.28l3.39 3.68" />
            <path d="M6.41 3.66 2.57 7.5" />
            <path d="M21.43 7.24 17.59 3.4" />
        </svg>
    );
}

export function IconKey({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.81 11.72h2.46m6.08-2.97-.04 6.47m-10.05.08c-1.48 0-2.48-.81-2.46-2.25v-1.68 1.32-1.68c-.02-1.44.78-2.25 2.46-2.25m4.64 6.55c-1.86 0-2.17-.65-2.14-2.09V8.76m4.03 6.5v-1.4c-.02-1.44.31-2.09 1.45-2.09m-11.2 7.45h13.93a2.25 2.25 0 0 0 2.25-2.25V7.05a2.25 2.25 0 0 0-2.25-2.25H5.03a2.25 2.25 0 0 0-2.25 2.25v9.91a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
    );
}

export function IconPos({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9l5 12l1.774-5.226L21 14L9 9zm7.071 7.071l4.243 4.243M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
    );
}

export function IconField({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm1 2.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8" />
        </svg>
    );
}

export function IconCode({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
    );
}

export function IconTarget({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-current stroke-none", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path fill="currentColor" d="M11 2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2h-2.07A8 8 0 0 0 13 4.07V2m-2 4.08V8h2V6.09c2.5.41 4.5 2.41 4.92 4.91H16v2h1.91A6.01 6.01 0 0 1 13 17.92V16h-2v1.91A6.01 6.01 0 0 1 6.08 13H8v-2H6.09A6.01 6.01 0 0 1 11 6.08M12 11a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"/>
        </svg>
    );
}
