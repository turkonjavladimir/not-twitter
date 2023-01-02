import Link from "next/link";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

type AvatarSize = "sm" | "md" | "lg";
const sizes = {
  sm: `w-8 h-8`,
  md: `w-10 h-10`,
  lg: `w-12 h-12`,
};

type AvatarProps = {
  size?: AvatarSize;
  imageUrl?: string;
  onClick?: (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => void;
  href?: string;
};

const Avatar = ({
  onClick,
  href = "",
  size = "sm",
  imageUrl = "",
}: AvatarProps) => {
  const sizeClasses = size === "sm" ? "w-8 h-8" : sizes[size];
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${sizeClasses} border-primary hover:border-secondary focus:border-secondary flex items-center justify-center rounded-full border-2 transition-colors ease-linear hover:cursor-pointer`}
    >
      {!imageUrl ? (
        <UserIcon className="h-6 w-6" />
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
