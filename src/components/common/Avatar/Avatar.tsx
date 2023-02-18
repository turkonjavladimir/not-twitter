import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg";
const sizes = {
  sm: `w-8 h-8`,
  md: `w-10 h-10`,
  lg: `w-12 h-12`,
};

type AvatarProps = {
  label?: string;
  size?: AvatarSize;
  imageUrl?: string;
};

const getInitials = (label: string) => {
  label = label.trim();

  if (label.length <= 3) return label;

  return (
    label
      ?.split(/\s+/)
      .map((w) => [...w][0])
      .slice(0, 3)
      .join("") ?? ""
  );
};

const Avatar = ({ label = "", size = "sm", imageUrl = "" }: AvatarProps) => {
  const sizeClasses = sizes[size] || sizes.sm;

  return (
    <span
      className={`${sizeClasses} inline-flex items-center justify-center rounded-full border-2 border-neutral-100 bg-gradient-to-tl from-slate-300 transition-colors ease-linear hover:cursor-pointer dark:border-neutral-700 dark:from-neutral-500 md:text-sm`}
    >
      {!imageUrl ? (
        <span className="text-xs font-medium leading-none text-black dark:text-neutral-200">
          {getInitials(label)}
        </span>
      ) : (
        <Image
          className="w-12 rounded-full object-cover"
          alt="profile-image"
          width={50}
          height={50}
          src={imageUrl}
        />
      )}
    </span>
  );
};

export default Avatar;
