/**
 * This file was generated from ActionByKey.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, DynamicValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface ActionByKeyContainerProps extends CommonProps {
    keys?: DynamicValue<string>;
    onPressKey?: ActionValue;
    focusNextField: boolean;
    focusField?: DynamicValue<string>;
    onlyRunField?: DynamicValue<string>;
    focusFieldLast: boolean;
}

export interface ActionByKeyPreviewProps extends CommonProps {
    keys?: string;
    onPressKey?: ActionPreview;
    focusNextField: boolean;
    focusField?: string;
    onlyRunField?: string;
    focusFieldLast: boolean;
}

export interface VisibilityMap {
    keys: boolean;
    onPressKey: boolean;
    focusNextField: boolean;
    focusField: boolean;
    onlyRunField: boolean;
    focusFieldLast: boolean;
}
