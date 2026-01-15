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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 18L12 22L8 18" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2L12 22" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </em>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {label} 
      <em className="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 18L12 22L8 18" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2L12 22" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </em>
    </button>
  );
}

