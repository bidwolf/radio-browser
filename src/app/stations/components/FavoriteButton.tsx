import FavoriteStarIcon from "@/components/icons/favoriteStar";
import { twMerge } from "tailwind-merge";

export type FavoriteButtonProps = {
  active: boolean;
  toggleFavoriteStatus: () => void;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ active, toggleFavoriteStatus }) => {
  return (
    <div className="group relative">
      <button data-tooltip-target="tooltip-favorite" data-tooltip-placement="top" className="flex items-center justify-center peer:" onClick={toggleFavoriteStatus}>
        <FavoriteStarIcon
          className={twMerge(
            "stroke-muted self-start shrink-0 group-active:fill-tertiary-500 group-active:stroke-tertiary-500",
            active ? "fill-tertiary-500 stroke-tertiary-500" : ""
          )}
        />
      </button>
      <div id="tooltip-favorite" role="tooltip" className={twMerge("z-10 bottom-full group-hover:visible group-hover:opacity-100 px-3 invisible absolute text-nowrap py-0.5 text-[0.5rem] font-medium transition-opacity duration-300  rounded-lg shadow-xs opacity-0 tooltip",
        active
          ? 'bg-red-200 border border-red-300 text-red-500'
          : 'bg-tertiary-500 border border-primary-500 text-primary-500'
      )}>
        {active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>

  );
};