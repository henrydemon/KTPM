import { createAction } from "@reduxjs/toolkit";

export const saveProfileUserGoogle = createAction(
  "SAVE_USER_GOOGLE",
  (user) => ({
    payload: { user },
  })
);

export const clearProfileUserGoogle = createAction("SAVE_USER_GOOGLE");
