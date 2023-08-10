import React from "react";

export const onClickHandler = (
  e: React.MouseEvent<HTMLElement>,
  callback?: () => void
) => {
  callback && callback();
};
