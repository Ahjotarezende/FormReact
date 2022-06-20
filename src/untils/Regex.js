export const emailRegex = new RegExp(
    /^[a-z 0-9.]+@[a-z-0-9](?:[a-z-0-9]{0,61}[a-z-0-9])?(?:.[a-z-0-9](?:[a-z-0-9]{0,61}[a-z-0-9])?)*$/
);

export const nameRegex = new RegExp (
    /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
);