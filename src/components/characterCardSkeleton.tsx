import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CharacterCardSkeleton() {
  return (
    <Card>
      <CardContent>
        <div className="aspect-square w-[400px]">
          <Skeleton className="h-full w-full rounded" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-14" />
      </CardFooter>
    </Card>
  )
}