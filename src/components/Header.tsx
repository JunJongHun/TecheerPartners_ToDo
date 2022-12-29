import React from "react";

type HeaderType = {
  handleChangeType: (type: string) => void;
  handleAllDeleteTodoList: () => void;
};

function Header({ handleChangeType, handleAllDeleteTodoList }: HeaderType) {
  return (
    <header className="layout__header">
      <div onClick={() => handleChangeType("ALL")}>모두보기</div>
      <div onClick={() => handleChangeType("ACTIVE")}>완료</div>
      <div onClick={() => handleChangeType("INACTIVE")}>미완료</div>
      <div onClick={handleAllDeleteTodoList}>모두 지우기</div>
    </header>
  );
}

export default Header;
