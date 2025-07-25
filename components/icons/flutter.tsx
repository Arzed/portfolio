import clsx from "clsx";
import { SVGAttributes, forwardRef } from "react";
import { iconStyle } from "./iconStyle";

const FlutterLogo = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg className={clsx(iconStyle, className)} xmlns="http://www.w3.org/2000/svg" aria-label="Flutter" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="512" height="512" rx="15%" fill="#ffffff"></rect> <defs> <linearGradient id="f" x1="249" x2="321" y1="401" y2="358" gradientUnits="userSpaceOnUse"> <stop stop-opacity=".4"></stop> <stop stop-color="#000000" stop-opacity="0" offset="1"></stop> </linearGradient> </defs> <g fill="#000000"> <path d="M191.45,342.89,249.11,401,407.75,241.12H292.4Z"></path> <path d="M292.4,66.69H407.75L162.61,313.82l-57.7-58.13Z"></path> </g> <path fill="#000000" d="M249.11,401l43.29,43.59H407.75L306.8,342.89Z"></path> <path d="M334.67,371.16,306.8,342.89,249.11,401Z" fill="url(#f)"></path> <path d="M191.45,342.87l57.69-58.18,57.7,58.15L249.14,401Z" fill="#000000"></path> </g></svg>
    );
  }
);

FlutterLogo.displayName = "Flutter Logo";

export { FlutterLogo };