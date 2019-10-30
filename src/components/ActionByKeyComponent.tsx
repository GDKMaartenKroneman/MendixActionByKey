import { createElement, useEffect, Fragment } from "react";
import { ActionByKeyContainerProps } from "../../typings/ActionByKeyProps";

interface ActionByKeyComponentProps {
    doPressKey: () => void;
}

const ActionByKeyComponent = ({ keys, doPressKey }: ActionByKeyContainerProps & ActionByKeyComponentProps) => {
    const keyArray = keys ? keys.value ? keys.value.split(' ') : [] : [];

    useEffect(() => {
        document.addEventListener("keydown", isKeyCode, false);
    }, []);

    const isKeyCode = (event: KeyboardEvent) => {
        keyArray.map((key) => {
            if (event.keyCode === parseInt(key)) {
                doPressKey();
            }
        });
    };

    return <Fragment />;
};

export default ActionByKeyComponent;
