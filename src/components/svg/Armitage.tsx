import * as React from "react";
import { SVGProps } from "react";

export default function ArmitageComponent(
    props: SVGProps<SVGSVGElement>
): React.JSX.Element {
    return (
        <svg
            viewBox="0 0 128 128"
            {...props}
        >
            <path d="M55.2 14C42.7 16.7 37 24.3 37 38.7V47h12.8l.4-8c.3-7.1.6-8.3 3.1-10.7 2.4-2.4 3.5-2.8 8.8-2.8 5.6 0 6.3.3 9 3.3 2.5 2.8 2.9 4 2.9 9.1v5.8l-7.2 5.8c-4 3.2-11.1 8.4-15.9 11.5-10.6 7.2-14.4 11.5-16.5 18.7-2.2 7.4-1.5 18.2 1.4 24 4.3 8.2 13.9 12.5 23.6 10.3 6-1.3 9.2-3.4 12.7-8.4l2.9-3.9V113h18.1l-1.8-3.3c-1.6-2.9-1.9-7.3-2.3-42.2l-.5-39-2.7-4.7c-2.1-3.5-4.1-5.3-8.1-7.2-6-3-15.6-4.1-22.5-2.6zM73 93.2c-1.4 4.9-6 9.4-10.5 10.2-10.4 2-16.2-6.7-13.5-19.9 1.4-6.8 3.7-9.5 16-19.3l8.5-6.8.3 16.1c.2 9.4-.1 17.5-.8 19.7z" />
        </svg>
    );
}
