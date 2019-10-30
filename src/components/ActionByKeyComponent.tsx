import { createElement, useEffect, Fragment, ReactElement } from "react";
import { ActionByKeyContainerProps } from "../../typings/ActionByKeyProps";

interface ActionByKeyComponentProps {
    doPressKey: () => void;
}

const ActionByKeyComponent = ({
    keys,
    doPressKey
}: ActionByKeyContainerProps & ActionByKeyComponentProps): ReactElement => {
    const keyArray = keys ? (keys.value ? keys.value.split(" ") : []) : [];

    useEffect((): void => {
        document.addEventListener("keydown", isKeyCode, false);
    }, []);

    const isKeyCode = (event: KeyboardEvent): void => {
        keyArray.map(key => event.keyCode === Number(key) && doPressKey());
    };

    return <Fragment />;
};

export default ActionByKeyComponent;
