import React, { useEffect } from "react";
import Routing from "./routing/Routing";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrent } from "./store/slices/auth.slice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dispatch(fetchCurrent());
    return () => unsubscribe();
  }, []);

  const loading = useSelector((store) => store.authSlice.loading);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center bg-red-100 text-2xl text-red-500">
          Loading...
        </div>
      ) : (
        <Routing />
      )}
    </>
  );
};

export default App;
