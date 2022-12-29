import React from "react";

type HeaderType = {
  handleChangeType: (type: string) => void;
};

function Header({ handleChangeType }: HeaderType) {
  return (
    <header className="layout__header">
      <div onClick={() => handleChangeType("ALL")}>모두보기</div>
      <div onClick={() => handleChangeType("ACTIVE")}>완료</div>
      <div onClick={() => handleChangeType("INACTIVE")}>미완료</div>
    </header>
  );
}

export default Header;
