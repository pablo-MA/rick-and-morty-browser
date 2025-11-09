import { Alert, AlertTitle } from '@/components/ui/alert'
import { CircleAlert } from "lucide-react"

export function EmptyMsg() {
    return (
        <div className="w-full flex items-center justify-center">
            <Alert  className="w-8/10 md:w-1/2 xl:w-1/4">
                <CircleAlert />
                <AlertTitle>No characters found</AlertTitle>
            </Alert>
        </div>
    )
}