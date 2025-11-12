import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, FileText, Github } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Download R-Instat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with the latest stable release of R-Instat for Windows.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-card border-border shadow-large">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary text-sm font-semibold">Latest Stable Release</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2">
                  R-Instat 0.8.9
                </h3>
                <p className="text-muted-foreground mb-6">
                  Released: October 27, 2025
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-blue-bright shadow-medium"
                  >
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    Download for Windows
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Release Notes
                  </Button>
                </div>
              </div>

              <div className="lg:border-l lg:border-border lg:pl-8">
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Windows 10/11 64-bit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">4GB RAM minimum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">500MB disk space</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Looking for a specific release?</p>
            <Button variant="ghost" className="gap-2">
              <Github className="h-4 w-4" />
              View All Releases on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
