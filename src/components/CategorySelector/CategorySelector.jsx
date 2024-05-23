import React from "react";
import * as S from "./CategorySelector.styled";
import { getTopicStyle, topicsData } from "../../lib/topic";

export default function CategorySelector({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <S.CategorySelectorContainer>
      <S.CategoriesTitle>Категория</S.CategoriesTitle>
      <S.CategoriesThemes>
        {topicsData.map((category) => (
          <S.CategoryTheme
            key={category.name}
            $style={getTopicStyle(category.name)}
            checked={selectedCategory === category.name}
          >
            <input
              type="radio"
              name="category"
              value={category.name}
              checked={selectedCategory === category.name}
              onChange={() => onCategoryChange(category.name)}
            />
            <p>{category.name}</p>
          </S.CategoryTheme>
        ))}
      </S.CategoriesThemes>
    </S.CategorySelectorContainer>
  );
}
