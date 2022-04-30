import React, { useState } from "react";
import { CategoryFilter } from "../../components";

export const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <main className="wrapper">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </main>
  );
};
