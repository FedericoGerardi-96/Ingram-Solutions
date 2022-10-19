import style from '../../styles/component/buttons/ButtonOrange.module.css';

interface Props {
    text: string;
    href: string;
  }

export const ButtonOrange = ({ text, href = "" }: Props) => {
    return (
      <a
        className={`${style.button_orange} button_orange text-decoration-none`}
        href={href}
      >
        <button className={`btn fw-bold px-4 fs-3 py-2 mt-3`}>{text}</button>
      </a>
    );
  };
  export const ButtonOrangeBlank = ({ text, href = "", }: Props) => {
      return (
          <a
            className={`${style.button_orange} button_orange text-decoration-none`}
            target="_blank"
            href={href}
          >
            <button className={`btn fw-bold px-4 fs-3 py-2 mt-3`}>{text}</button>
          </a>
        );
  };
