"use client";

import { GlobalActionContext } from "@/context/GlobalActionContext";
import {
  ControllableSnackBar,
  ControllableSnackBarRef,
  ControllableSnackBarStateParams,
} from "../snackbar/ControllableSnackbar";
import { Provider as ReduxProvider } from "react-redux";
import { useEffect, useRef, useState } from "react";
import storeFactory from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import UserContext from "@/context/UserContext";
import { Profile } from "@/models/profile";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/components/layout/theme';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { store, persistor } = storeFactory();
  const snackBarRef = useRef<ControllableSnackBarRef>(null);
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  function showSnackBar(params: ControllableSnackBarStateParams) {
    snackBarRef.current?.open(params);
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  function updateUser(user: Profile | null) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
    } else setUser(null)
  }


  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
          <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
              <GlobalActionContext.Provider
                value={{
                  showSnackBar,
                }}
              >
                <UserContext.Provider
                  value={{
                    user,
                    updateUser,
                  }}
                >
                  <div>
                    {children}
                    {/* <AuthModal /> */}
                    <ControllableSnackBar ref={snackBarRef} />
                  </div>
                </UserContext.Provider>
              </GlobalActionContext.Provider>
            </PersistGate>
          </ReduxProvider>
      </ThemeProvider>
    </div>
  );
}
