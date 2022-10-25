export function Search() {
  return (
    <div className="container mt-[72px] flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base-subtitle text-lg">Publicações</h3>
        <span className="text-base-span text-sm">6 publicações</span>
      </div>
      <div>
        <input
          className="w-full outline-none duration-200 rounded-md px-4 py-3 bg-base-input text-base-text border border-base-border placeholder-base-label focus:border-blue"
          type="text"
          placeholder="Buscar conteúdo"
        />
      </div>
    </div>
  );
}
