import { useState } from "react"
import { Skeleton } from "./ui/skeleton"
import { cn } from "@/lib/utils"

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string
}

export const LazyImage = ({ src, alt, className, containerClassName, ...props }: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full z-10" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}
