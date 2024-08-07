import React from "react";

function Label({ label, onClick, classes }) {
  return (
    <span className={"text-sm text-gray-250 " + classes} onClick={onClick}>
      {label}
    </span>
  );
}

export default Label;
