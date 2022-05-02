import { createElement, useEffect, Fragment, ReactElement } from "react";
import { ActionByKeyContainerProps } from "../../typings/ActionByKeyProps";

const ActionByKeyComponent = ({
    keys,
    focusField,
    focusFieldLast,
    focusNextField,
    onlyRunField,
    onNoNext,
    onPressKey
}: ActionByKeyContainerProps): ReactElement => {
    const keyArray = keys ? (keys.value ? keys.value.split(" ") : []) : [];

    useEffect(() => {
        document.addEventListener("keydown", isKeyCode, false);

        return () => {
            document.removeEventListener("keydown", isKeyCode, false);
        };
    }, [onPressKey && onPressKey.canExecute, onNoNext && onNoNext.canExecute]);

    const doPressKey = (event: KeyboardEvent): void => {

        if (onPressKey && onPressKey.canExecute && !onPressKey.isExecuting) {

            if (focusNextField) {
                const triggerElement = document.activeElement as HTMLInputElement;
                const wrappers = document.getElementsByTagName("input");
                const arr = [].slice.call(wrappers);
                
                onPressKey.execute();
                
                arr.forEach((element, index) => {
                    if (triggerElement === element) {
                        const nextElement = wrappers[index + 1];

                        if (nextElement) {
                            event.preventDefault();
                            nextElement.focus();
                        } else {
                            event.preventDefault();

                            if (onNoNext && onNoNext.canExecute && !onNoNext.isExecuting) {
                                onNoNext.execute();
                            }
                        }
                    }
                });
            } 
            else {
                if (onlyRunField && onlyRunField.value) {
                    const triggerElement = document.activeElement as HTMLInputElement;

                    if (triggerElement &&
                        triggerElement.classList.contains(onlyRunField.value) ||
                        triggerElement.parentElement &&
                        ((triggerElement.parentElement.classList.contains(onlyRunField.value)) ||
                            (triggerElement.parentElement.parentElement &&
                            triggerElement.parentElement.parentElement.classList.contains(onlyRunField.value)))
                    ) {
                        onPressKey.execute();
                        event.preventDefault();
                    }
                }
                else {
                    onPressKey.execute();
                    event.preventDefault();
                }

                if (focusField && focusField.value) {
                    const wrappers = document.getElementsByClassName(`${focusField && focusField.value}`);
                    const wrapperLength = wrappers.length;
                    const wrapper = wrappers[focusFieldLast ? wrapperLength - 1 : 0];
                    const div = wrapper && wrapper.lastChild;
                    const input = div && (div.firstChild as HTMLInputElement);
                    
                    if (input) {
                        input.focus();
                    }
                }
            }
        }
    };

    const isKeyCode = (event: KeyboardEvent): void => {
        keyArray.map(key => event.keyCode === Number(key) && doPressKey(event));
    };

    return <Fragment />;
};

export default ActionByKeyComponent;
