import React from "react";

type LayoutType = {
  children: React.ReactNode;
};

// interface Layout {
//   children: React.ReactNode;
// }

function Layout({ children }: LayoutType) {
  console.log(window.Node);

  return <section className="layout">{children}</section>;
}

export default Layout;
