import React from "react";
import style from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан

const SuperButton= (
    { red, className, ...restProps// все остальные пропсы попадут в объект restProps, там же будет children,
    }
) => {
    const finalClassName = `${red ? style.red : style.default} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default SuperButton;
