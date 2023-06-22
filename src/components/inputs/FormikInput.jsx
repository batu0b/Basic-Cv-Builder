import React from "react";

export const FormikInput = ({
  children,
  Containerclass,
  InputClass,
  label,
  type = "text",
  inputType = "text",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${Containerclass && Containerclass} `}>
      <label className="font-medium" htmlFor={props?.id}>
        {label}
      </label>
      {type === "textArea" ? (
        <textarea
          className={`border px-3 shadow-md py-2 text-base rounded-md ${
            InputClass && InputClass
          }`}
          {...props}
        ></textarea>
      ) : (
        <input
          className={`border px-3 shadow-md py-2 text-base rounded-md ${
            InputClass && InputClass
          }`}
          type={inputType}
          {...props}
        />
      )}

      {children ? children : null}
    </div>
  );
};
