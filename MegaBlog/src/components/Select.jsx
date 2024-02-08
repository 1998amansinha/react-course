import React, { useId } from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();

  return (
  <div className="w-full">{label && <label htmlFor={id}></label>}
    <select {...props} id={id} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {options?.map((option) =>
            <options key={option} value={option}>
                {option}
            </options>    
        )}
    </select>
  </div>

)
};

export default React.forwardRef(Select);
