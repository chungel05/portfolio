interface ArmitageProps {
    className?: string;
}

export default function Armitage({ className = "" }: ArmitageProps) {
    return (
        <svg
            className={`fill-green-500 w-16 h-16 ${className}`}
            viewBox="0 0 128 128"
            xmlnsXlink="http://www.w3.org/2000/svg"
        >
            <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)">
                <path d="M552 1140 c-125 -27 -182 -103 -182 -247 l0 -83 64 0 64 0 4 80 c3 71 6 83 31 107 24 24 35 28 88 28 56 0 63 -3 90 -33 25 -28 29 -40 29 -91 l0 -58 -72 -58 c-40 -32 -111 -84 -159 -115 -106 -72 -144 -115 -165 -187 -22 -74 -15 -182 14 -240 43 -82 139 -125 236 -103 60 13 92 34 127 84 l29 39 0 -56 0 -57 90 0 91 0 -18 33 c-16 29 -19 73 -23 422 l-5 390 -27 47 c-21 35 -41 53 -81 72 -60 30 -156 41 -225 26z m178 -792 c-14 -49 -60 -94 -105 -102 -104 -20 -162 67 -135 199 14 68 37 95 160 193 l85 68 3 -161 c2 -94 -1 -175 -8 -197z"></path>
            </g>
        </svg>
    );
}
