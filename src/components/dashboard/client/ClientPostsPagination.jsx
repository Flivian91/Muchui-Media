import { GrNext, GrPrevious } from "react-icons/gr";

function ClientPostsPagination() {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="flex items-center gap-4">
        <button className="p-2 bg-surface border rounded disabled:cursor-not-allowed hover:border-secondary disabled:hover:border-text-secondary transition-all duration-200">
          <GrPrevious className="text-text" />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6 bg-purple-400 text-white hover:bg-secondary hover:text-white transition-all duration-200 flex font-bold items-center justify-center rounded-full font-mono">
            1
          </button>
          <button className="w-6 h-6 bg-surface font-bold flex hover:bg-secondary hover:text-white transition-all duration-200 items-center justify-center rounded-full font-mono">
            2
          </button>
          <button className="w-6 h-6 bg-surface font-bold flex hover:bg-secondary hover:text-white transition-all duration-200 items-center justify-center rounded-full font-mono">
            3
          </button>
          <button className="w-6 h-6 bg-surface font-bold flex hover:bg-secondary hover:text-white transition-all duration-200 items-center justify-center rounded-full font-mono">
            4
          </button>
        </div>
        <button className="p-2 bg-surface border rounded disabled:cursor-not-allowed hover:border-secondary disabled:hover:border-text-secondary transition-all duration-200">
          <GrNext className="text-text" />
        </button>
      </div>
    </div>
  );
}

export default ClientPostsPagination;
