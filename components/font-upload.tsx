import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

interface FontUploadProps {
  onUpload?: (file: File) => void;
  isPro?: boolean;
}

export function FontUpload({ onUpload, isPro = false }: FontUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <div className="space-y-4 w-1/4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <h2 className="text-sm font-medium text-muted-foreground">
          0 font families
        </h2>
      </div>
      <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
        <CardContent className="p-6">
          <label
            htmlFor="font-upload"
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="relative">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
            <span className="font-medium text-muted-foreground">
              Upload font family
            </span>
            {isPro && (
              <div className="gradient-bg px-2 py-0.5 rounded-sm text-[10px] font-medium text-primary-foreground">
                PRO
              </div>
            )}
            <input
              id="font-upload"
              type="file"
              className="sr-only"
              accept=".ttf,.otf,.woff,.woff2"
              onChange={handleFileChange}
            />
          </label>
        </CardContent>
      </Card>
    </div>
  );
}
