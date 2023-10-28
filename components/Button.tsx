import Image from "next/image";
import React from "react";

interface BtnProps {
  btnText: string;
  type: "button" | "submit";
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = (props: BtnProps) => {
  const { btnText, type, icon, variant, full } = props;
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={btnText} height={24} width={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {btnText}
      </label>
    </button>
  );
};

export default Button;
