import { createElement, Fragment, ReactElement } from "react";

declare function require(name: string): string;

export const preview = (): ReactElement => {
    return <Fragment />;
};

export function getPreviewCss(): string {
    return require("./ui/ActionByKey.css");
}
