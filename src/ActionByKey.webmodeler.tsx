import { createElement, Fragment } from "react";

declare function require(name: string): string;

export const preview = () => {
    return <Fragment />;
}

export function getPreviewCss(): string {
    return require("./ui/ActionByKey.css");
}
