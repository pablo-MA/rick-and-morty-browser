import { CharacterCardSkeleton } from "@/components/characterCardSkeleton"
export function CharacterGridSkeleton() {

  // Constant 9 skeleton cards
  return (
    Array.from({ length: 9 }).map((_, i) => (
      <CharacterCardSkeleton key={i} />
    ))
  )
}