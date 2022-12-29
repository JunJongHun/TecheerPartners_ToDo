import React from "react";

type FooterType = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleAddTodo: () => void;
  text: string;
};

function Footer({ handleChange, text, handleAddTodo }: FooterType) {
  return (
    <footer className="layout__footer">
      <input
        className="layout__footer__input"
        type="text"
        name="todo"
        id=""
        placeholder="입력해주세요"
        value={text}
        onChange={handleChange}
      />
      <button className="layout__footer__button" onClick={handleAddTodo}>
        추가
      </button>
    </footer>
  );
}

export default Footer;
