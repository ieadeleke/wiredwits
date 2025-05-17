function trimText(text: string | undefined, maxLength = 30) {
    return typeof text === "string" ? text.length > maxLength ? text.slice(0, maxLength) + "..." : text : "";
}

export default trimText;