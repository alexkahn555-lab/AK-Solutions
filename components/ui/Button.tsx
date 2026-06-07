import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "inverted";
  children: ReactNode;
  href?: string;
}

const variants = {
  primary:
    "bg-brand text-white shadow-sm " +
    "hover:bg-brand-800 hover:shadow-md " +
    "active:scale-[0.98] active:shadow-sm",
  secondary:
    "border border-slate-200 bg-white text-slate-800 " +
    "hover:border-slate-300 hover:bg-slate-50 " +
    "active:scale-[0.98]",
  ghost:
    "text-brand hover:bg-brand-50 active:scale-[0.98]",
  inverted:
    "bg-white text-brand-900 shadow-sm " +
    "hover:bg-brand-50 hover:shadow-md " +
    "active:scale-[0.98]",
};

const base = [
  "inline-flex items-center justify-center rounded-lg",
  "px-6 py-3 text-[15px] font-medium leading-none tracking-[-0.01em]",
  "transition-all duration-[180ms] ease-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50",
].join(" ");

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href !== undefined) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
