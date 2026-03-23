import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "white" | "black" | "outline";
  size?: "sm" | "md" | "lg" | "full";
  rounded?: boolean;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  label,
  href,
  variant = "white",
  size = "md",
  rounded = false,
  showIcon = true,
  className = "",
  onClick,
  loading = false,
  disabled = false,
}: ButtonProps) {
  const baseClasses = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    rounded && "btn-rounded-full",
  ];
  const classes = [...baseClasses, className].filter(Boolean).join(" ");

  const ArrowIcon = showIcon ? (
    <em className="icon">
      <svg
        width="22"
        height="10"
        viewBox="0 0 22 10"
        fill="none"
      >
        <path
          d="M17 1L21 5L17 9"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 5H21"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </em>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {loading && <span className="spinner" />}
        {label}
        {ArrowIcon}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled || loading}>
      {loading && <span className="spinner" />}
      {label}
      {ArrowIcon}
    </button>
  );
}