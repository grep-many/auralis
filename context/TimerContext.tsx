import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface TimerContextProps {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (context === undefined) {
        throw new Error("useTimer must be used within TimerProvider");
    }
    return context; // ✅ return context so you can use {duration, setDuration}
};

interface TimerProviderProps {
    children: ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
    const [duration, setDuration] = useState(10);

    return (
        <TimerContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    );
};