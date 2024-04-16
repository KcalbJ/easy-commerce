'use client'
import { useState } from "react";

function ProductPageSort() {

 const [sortBy, setSortBy] = useState("created_at");

  const SortDropdown = () => (
    <select
      className="px-2 mt-4 text-sm font-medium  text-white bg-black border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600"
      onChange={(e) => handleSortChange(e.target.value)}
      value={sortBy}
    >
      <option value="poppular">Most poppular</option>
      <option value="newest">Whats new</option>
      <option value="high">Price hight to low</option>
      <option value="low">Price low to high</option>
    </select>
  );
  return (
    <><SortDropdown/></>
  )
}

export default ProductPageSort