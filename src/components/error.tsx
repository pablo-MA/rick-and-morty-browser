import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CircleAlert } from "lucide-react"

export function Error({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="w-full flex items-center justify-center">
      <Alert variant="destructive" className="w-fit">
        <CircleAlert />
        <AlertTitle>Unable to load characters. Please try again.</AlertTitle>
        <AlertDescription>
          <p>{errorMsg}</p>
        </AlertDescription>
      </Alert>
    </div>
  )
}