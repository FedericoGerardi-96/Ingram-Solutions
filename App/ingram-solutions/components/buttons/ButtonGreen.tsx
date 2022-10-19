import style from "../../styles/component/buttons/ButtonGreen.module.css";

interface Props {
  text: string;
  href: string;
}

export const ButtonGreen = ({ text, href = "" }: Props) => {
  return (
    <a
      className={`${style.button_green} button_green text-decoration-none`}
      href={href}
    >
      <button
        className={`btn fw-bold px-4 fs-3 py-2 mt-3`}
      >
        {text}
      </button>
    </a>
  );
};
export const ButtonGreenBlank = ({ text, href = "" }: Props) => {
  return (
    <a
      className={`${style.button_green} button_green text-decoration-none`}
      target="_blank"
      href={href}
    >
      <button
        className={`btn fw-bold px-4 fs-3 py-2 mt-3`}
      >
        {text}
      </button>
    </a>
  );
};
