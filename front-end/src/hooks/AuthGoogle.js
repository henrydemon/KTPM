import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { saveProfileUserGoogle } from "../store/features/google/action";

export const AuthGoogle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const loginGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      navigate("/home");
    });
  }, [navigate]);

  const logoutGoogle = useCallback(() => {
    signOut(auth);
  }, []);

  useEffect(() => {
    const dataUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      dispatch(saveProfileUserGoogle(currentUser));
    });
    return () => {
      dataUser();
    };
  }, [dispatch]);

  return { loginGoogle, user, logoutGoogle };
};
