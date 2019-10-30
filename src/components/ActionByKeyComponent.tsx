import { createElement, useEffect, Fragment, ReactElement } from "react";
import { ActionByKeyContainerProps } from "../../typings/ActionByKeyProps";

const ActionByKeyComponent = ({ keys, onPressKey }: ActionByKeyContainerProps): ReactElement => {
    const keyArray = keys ? (keys.value ? keys.value.split(" ") : []) : [];

    useEffect((): void => {
        document.addEventListener("keydown", isKeyCode, false);
    }, [onPressKey && onPressKey.canExecute]);

    const doPressKey = (): void => {
        if (onPressKey && onPressKey.canExecute) {
            onPressKey.execute();
        }
    };

    const isKeyCode = (event: KeyboardEvent): void => {
        if (onPressKey && !onPressKey.isExecuting) {
            keyArray.map(key => event.keyCode === Number(key) && doPressKey());
        }
    };

    return <Fragment />;
};

export default ActionByKeyComponent;
