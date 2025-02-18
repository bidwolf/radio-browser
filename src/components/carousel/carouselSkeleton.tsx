import { twMerge } from "tailwind-merge";

export const CarouselSkeleton = ({
  className
}: {
  className?: string
}) => {
  return (
    <div className={twMerge("relative group overflow-hidden rounded-md border border-muted shadow bg-gray-300 animate-pulse", className)}>
      <div className="flex transition-transform duration-700" style={{ transform: "translateX(0%)" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="min-w-full flex flex-col items-center p-8">
            <div className="w-48 h-48 bg-gray-200 rounded object-contain animate-pulse" />
            <div className="mt-2 w-32 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-1 h-1 rounded-full bg-gray-300" />
        ))}
      </div>

      <div className="hidden group-hover:block group-hover:absolute pr-1 left-4 top-1/2 transform -translate-y-1/2 bg-surface-lighter h-8 w-8 text-center rounded-full shadow-md" />
      <div className="hidden group-hover:block group-hover:absolute pl-1 right-4 top-1/2 transform -translate-y-1/2 bg-surface-lighter h-8 w-8 text-center rounded-full shadow-md" />
    </div>
  );
}