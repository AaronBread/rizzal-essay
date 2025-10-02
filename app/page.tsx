import { TableOfContents } from "@/components/table-of-contents"
import { EssayContent } from "@/components/essay-content"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary text-balance">
            The Shaping of a Hero: José Rizal's Character Development
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            An academic exploration of the factors that shaped the Philippine national hero
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <aside className="lg:col-span-3">
            <TableOfContents />
          </aside>

          <main className="lg:col-span-9">
            <EssayContent />
          </main>
        </div>
      </div>

      <footer className="border-t border-border mt-16 py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Academic Essay on José Rizal</p>
        </div>
      </footer>
    </div>
  )
}
