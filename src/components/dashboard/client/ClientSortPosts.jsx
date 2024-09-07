function ClientSortPosts() {
  return (
    <div>
      <select className="rounded-[6px] font-mono text-lg border focus:border-secondary border-text-secondary" name="sortPosts" id="sortPosts">
        <option value="ascending">Accending Order</option>
        <option value="descending">Descending Order</option>
        <option value="date">Date Created</option>
      </select>
    </div>
  );
}

export default ClientSortPosts;
