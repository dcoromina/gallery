import heroImage from "@/assets/hero-image.jpg";
import showcaseVideo from "@/assets/showcase-video.mp4";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <h1 className="font-display text-xl font-light tracking-widest text-foreground uppercase">
            Germans
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-10">
        {/* Image Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
                Image
              </span>
            </div>

            <div className="opacity-0 animate-fade-in animation-delay-400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={heroImage}
                  alt="Misty mountain range at golden hour with dramatic lighting"
                  className="relative w-full h-auto rounded-lg shadow-2xl shadow-glow-subtle"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Video Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="opacity-0 animate-fade-up animation-delay-200">
              <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
                Featured Video
              </span>
            </div>

            <div className="opacity-0 animate-fade-in animation-delay-600">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <video
                  src={showcaseVideo}
                  controls
                  className="relative w-full h-auto rounded-lg shadow-2xl shadow-glow-subtle"
                  poster={heroImage}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground font-body text-xs tracking-widest uppercase">
            © 2025 Gallery
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
