import { HTMLAttributes } from 'react';
import { classNames } from '@/utils';

export function IconStar({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M 0 12 c 12 0 12 0 12 -12 c 0 12 0 12 12 12 c -12 0 -12 0 -12 12 c 0 -12 0 -12 -12 -12" />
        </svg>
    );
}
