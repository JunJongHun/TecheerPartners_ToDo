import React from "react";

interface IProps {
  children: any;
}

function Layout(props: IProps) {
  return <section className="layout">{props.children}</section>;
}

export default Layout;
