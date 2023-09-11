function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (typeof isIndex == "boolean" && isIndex === true) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard";
    }
}