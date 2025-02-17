import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ItemProps = {
  href: string;
  isActive: boolean;
  icon: React.ReactElement;
  label: string;
  liClassName?: string;
  linkClassName?: string;
  iconClassName?: string;
  testId?: string;
}

export function Item({
  href,
  isActive,
  icon,
  label,
  testId,
  liClassName,
  linkClassName,
  iconClassName,
}: ItemProps) {
  const defaultLiClasses = "hover:text-primary-500 hover:bg-surface-darker/10 py-2 group transition-colors";
  const activeTextClass = isActive ? "text-on-surface" : "text-muted";

  const defaultLinkClasses = "font-body flex gap-2 items-center w-full px-4";

  const defaultIconClasses = "group-hover:fill-primary-500";
  const activeIconClass = isActive ? "fill-on-surface" : "fill-muted";

  return (
    <li className={twMerge(defaultLiClasses, activeTextClass, liClassName)} data-testid={testId}>
      <Link href={href} className={twMerge(defaultLinkClasses, linkClassName)}

      >
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: twMerge(
            defaultIconClasses,
            activeIconClass,
            (icon.props as { className?: string }).className,
            iconClassName
          ),
        })}
        {label}
      </Link>
    </li>
  );
}
