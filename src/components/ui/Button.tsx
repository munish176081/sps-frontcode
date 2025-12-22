import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

export default function Button({
  label,
  href,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

