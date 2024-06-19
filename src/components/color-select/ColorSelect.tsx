"use client";

import styles from "./ColorSelect.module.scss";
import React, { useState } from "react";

import { default as colors } from "@/data/selectorColors";

interface ColorSelectProps {
  setColor: (color: string) => void;
}

const ColorSelect = ({ setColor }: ColorSelectProps) => {
  const [chosenItemId, setChosenItemId] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelector = () => {
    setIsDropdownOpen(true);
  };

  const handleSelectorElement = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const id = Number(target.id);
    setIsDropdownOpen(false);
    setChosenItemId(id);
    setColor(colors[id]);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Цвет</label>
      <div className={styles.select} onClick={handleSelector}>
        <div
          className={styles.select_content}
          style={{ background: colors[chosenItemId] }}
        ></div>
      </div>
      <div
        className={
          isDropdownOpen
            ? `${styles.dropdown} ${styles["dropdown-active"]}`
            : styles.dropdown
        }
      >
        {colors.map((color, index) => {
          return (
            <div
              className={styles.select_elem}
              key={index}
              onClick={(e) => handleSelectorElement(e)}
              style={{ background: color }}
              id={index.toString()}
            >
              {index === chosenItemId && (
                <div className={styles.selected}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelect;
