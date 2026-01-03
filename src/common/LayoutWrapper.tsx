import BookLoader from "@/lib/BookLoader";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type LayoutWrapperType={
    children: React.ReactNode;
}

const LayoutWrapper =({children}: LayoutWrapperType)=>{
    return (
        <Provider store={store}>
            <PersistGate loading={<BookLoader/>} persistor={persistor}>
            {children}
            </PersistGate>
        </Provider>

    )
};

export default LayoutWrapper;