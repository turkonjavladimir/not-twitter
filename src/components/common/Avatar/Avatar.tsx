import Link from "next/link";
import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg";
const sizes = {
  sm: `w-8 h-8`,
  md: `w-10 h-10`,
  lg: `w-12 h-12`,
};

type AvatarProps = {
  name?: string;
  href?: string;
  size?: AvatarSize;
  imageUrl?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => void;
};

const getInitials = (name: string) => {
  name = name.trim();

  if (name.length <= 3) return name;

  return name
    ?.split(/\s+/)
    .map((w) => [...w][0])
    .slice(0, 3)
    .join("");
};

const Avatar = ({
  onClick,
  name = "",
  href = "",
  size = "sm",
  imageUrl = "",
}: AvatarProps) => {
  const sizeClasses = size === "sm" ? "w-8 h-8" : sizes[size];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${sizeClasses} flex items-center justify-center rounded-full border-2 border-neutral-100 bg-gradient-to-tl from-slate-400 transition-colors ease-linear hover:cursor-pointer`}
    >
      {!imageUrl ? (
        getInitials(name)
      ) : (
        <Image
          className="w-12 rounded-full object-cover"
          alt="profile-image"
          width={50}
          height={50}
          src={imageUrl}
        />
      )}
    </Link>
  );
};

export default Avatar;
