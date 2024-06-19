import styles from "./BaseInput.module.scss";

interface BaseInputProps {
  type?: string;
  label: string;
  value: string | number;
  onInput: (value: string) => void;
}

const BaseInput = ({
  type = "text",
  label,
  value,
  onInput,
}: BaseInputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.wrapper}>{label}</label>
      <input
        className={styles.input}
        type={type}
        defaultValue={value}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          onInput(target.value);
        }}
      />
    </div>
  );
};

export default BaseInput;
