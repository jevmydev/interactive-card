export const CardIcon = () => {
    return (
        <svg width="84" height="47" fill="none">
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" />
        </svg>
    );
};

export const CompleteIcon = () => {
    return (
        <svg width="80" height="80" fill="none">
            <circle cx="40" cy="40" r="40" fill="url(#a)" />
            <path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" />
            <defs>
                <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6348FE" />
                    <stop offset="1" stopColor="#610595" />
                </linearGradient>
            </defs>
        </svg>
    );
};
