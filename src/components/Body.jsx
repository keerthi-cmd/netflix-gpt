import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utls/userSlice";
import { auth } from "../utls/firebase";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged");
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default Body;
