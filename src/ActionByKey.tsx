import { createElement, ReactElement } from "react";
import { hot } from "react-hot-loader/root";
import { ActionByKeyContainerProps } from "../typings/ActionByKeyProps";

import "./ui/ActionByKey.css";
import ActionByKeyComponent from "./components/ActionByKeyComponent";

const ActionByKey = (props: ActionByKeyContainerProps): ReactElement => {
    const doPressKey = (): void => {
        if (props.onPressKey && props.onPressKey.canExecute) {
            props.onPressKey.execute();
        }
    };

    return <ActionByKeyComponent doPressKey={(): void => doPressKey()} {...props} />;
};

export default hot(ActionByKey);
