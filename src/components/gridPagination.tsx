import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import type { Info } from "@/types/character"
type PaginationProps = {
  info: Info;
  currPage: number;
  changePage: (value: number) => void;
}

export function GridPagination({ info, currPage, changePage }: PaginationProps) {
  return (
    <div className="container">
      <Pagination className="pb-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className={currPage === 1 ? "btn-disabled" : "cursor-pointer"} onClick={() => changePage(currPage - 1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive className="px-8">
              Page {currPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className={currPage === info.pages ? "btn-disabled" : "cursor-pointer"} onClick={() => changePage(currPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}