import * as React from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, fallbackSrc = "/placeholder.png", alt, ...props }, ref) => {
    const [error, setError] = React.useState(false);

    const handleError = () => {
      setError(true);
    };

    return (
      <img
        ref={ref}
        src={error ? fallbackSrc : src}
        alt={alt}
        onError={handleError}
        className={cn("object-cover", className)}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image }; 