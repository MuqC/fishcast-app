import * as React from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

// A simple gray placeholder image as a data URL
const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3C/svg%3E";

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, fallbackSrc = PLACEHOLDER_IMAGE, alt, ...props }, ref) => {
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