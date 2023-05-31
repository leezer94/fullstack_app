'use client';

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from 'react';

export const CategoryContext = createContext<string>('CSS-tricks');
export const SetCategoryContext = createContext<Dispatch<
  SetStateAction<string>
> | null>(null);

export function CategoryContextProvider({ children }: PropsWithChildren) {
  const [currentCategory, setCurrentCategory] = useState<string>('CSS-tricks');

  return (
    <CategoryContext.Provider value={currentCategory}>
      <SetCategoryContext.Provider value={setCurrentCategory}>
        {children}
      </SetCategoryContext.Provider>
    </CategoryContext.Provider>
  );
}
