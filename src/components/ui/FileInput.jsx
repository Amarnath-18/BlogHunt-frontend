import React from 'react'
import { cn } from '@/lib/utils'
import { Upload } from 'lucide-react'

const FileInput = ({ 
  onChange, 
  accept = "image/jpeg,image/png,image/webp",
  className,
  label = "Choose image",
  helperText,
  preview,
  previewAlt = "Image preview"
}) => {
  return (
    <div className="space-y-2">
      <label className={cn(
        "group relative flex flex-col items-center justify-center",
        "w-full h-32 rounded-lg",
        "border-2 border-dashed border-muted-foreground/25",
        "hover:border-primary/50 transition-colors cursor-pointer",
        "bg-muted/50",
        className
      )}>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="size-8 mb-2 text-muted-foreground group-hover:text-primary/70" />
          <p className="text-sm text-muted-foreground group-hover:text-foreground">
            {label}
          </p>
        </div>
        <input
          type="file"
          onChange={onChange}
          accept={accept}
          className="hidden"
        />
      </label>

      {helperText && (
        <p className="text-xs text-muted-foreground">
          {helperText}
        </p>
      )}

      {preview && (
        <div className="relative group rounded-lg overflow-hidden">
          <img
            src={preview}
            alt={previewAlt}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className={cn(
            "absolute inset-0 bg-black/50",
            "opacity-0 group-hover:opacity-100",
            "flex items-center justify-center",
            "transition-opacity duration-200"
          )}>
            <p className="text-white text-sm">Click above to change image</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileInput