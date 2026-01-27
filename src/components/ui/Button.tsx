import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "white" | "black" | "outline";
  size?: "sm" | "md" | "lg" | "full";
  rounded?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  label,
  href,
  variant = "white",
  size = "md",
  rounded = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    rounded && "btn-rounded-full",
  ];
  const classes = [...baseClasses, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
        <em className="icon">
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L21 5L17 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </em>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
      <em className="icon">
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L21 5L17 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1 5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </em>
    </button>
  );
}