import clsx from "clsx";
import { SVGAttributes, forwardRef } from "react";
import { iconStyle } from "./iconStyle";

const UnityLogo = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg className={clsx(iconStyle, className)} fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>unity</title> <path d="M25.94 25.061l-5.382-9.060 5.382-9.064 2.598 9.062-2.599 9.060zM13.946 24.191l-6.768-6.717h10.759l5.38 9.061-9.372-2.342zM13.946 7.809l9.371-2.342-5.379 9.061h-10.761zM30.996 12.917l-3.282-11.913-12.251 3.193-1.812 3.112-3.68-0.027-8.966 8.719 8.967 8.72 3.678-0.029 1.817 3.112 12.246 3.192 3.283-11.908-1.864-3.087z"></path> </g></svg>
    );
  }
);

UnityLogo.displayName = "Unity Logo";

export { UnityLogo };