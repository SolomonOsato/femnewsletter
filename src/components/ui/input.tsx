import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormField } from "./form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { invalid } = useFormField();
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-neutral-slate/50 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-slate/60 focus-visible:outline-none focus-visible:border-neutral-slate focus-visible:ring-1 focus-visible:ring-neutral-charcoal disabled:cursor-not-allowed disabled:opacity",
          `${invalid ? "border-primary-tomato focus-visible:border-primary-tomato focus-visible:ring-1 focus-visible:ring-primary-tomato text-primary-tomato placeholder:text-primary-tomato/60" : ""}`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
