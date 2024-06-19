import React from "react";

export interface IconProps {
  isHover: boolean;
}

export interface BaseButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}
