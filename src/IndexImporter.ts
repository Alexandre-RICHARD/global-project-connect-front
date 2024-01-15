// =============================================================================
// ? Components
import App from "@components/App";
import Login from "@components/Login/Login";
import Register from "@components/Register/Register";

export {
    App,
    Login,
    Register
};

// =============================================================================

// ? Functions middlewares
import {errorSaver} from "@utilities/errorSaver";

export {errorSaver};

// =============================================================================

// ? Store and slice
import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {mainActions, mainState} from "@slices/mainSlice";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    mainActions,
    mainState,
    renderWithProviders,
    setupStore,
    useAppDispatch,
    useAppSelector
};

// =============================================================================

// ? Types and interfaces
import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch, AppStore, RootState
};

// =============================================================================
