export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (typeof isIndex == "boolean" && isIndex === true) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard";
    }
}

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong>";
}
