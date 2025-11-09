import { Alert, AlertTitle } from '@/components/ui/alert'
import { CircleAlert } from "lucide-react"

export function EmptyMsg() {
  return (
    <div className="w-full flex items-center justify-center">
      <Alert className="w-fit">
        <CircleAlert />
        <AlertTitle>No characters found</AlertTitle>
      </Alert>
    </div>
  )
}