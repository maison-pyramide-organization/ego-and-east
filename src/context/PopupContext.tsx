import { createContext, useState, ReactNode } from "react";

export interface IPopupContext {
    popup: string;
    setPopup: any;
}

export const PopupContext = createContext<IPopupContext | null>(null);

interface IProvider {
    children: ReactNode;
}
const PopupProvider = (props: IProvider) => {
    const { children } = props;
    const [popup, setPopup] = useState("");

    return <PopupContext.Provider value={{ popup, setPopup }}>{children}</PopupContext.Provider>;
};

export default PopupProvider;
