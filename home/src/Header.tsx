import * as React from "react";

export interface IHeaderProps {
  name: String;
}

export default function Header(props: IHeaderProps) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Fidget Spinner World | {props.name}
    </div>
  );
}
