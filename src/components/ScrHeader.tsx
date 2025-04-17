import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Search, Shield } from "lucide-react";
import { useState } from "react";

interface ScrHeaderProps {
  toggleSidebar?: () => void;
}

const ScrHeader = ({ toggleSidebar }: ScrHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {toggleSidebar && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          )}
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-scr" />
            <span className="scr-font-title text-xl font-bold tracking-wider">SCR</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/history" className="text-foreground/80 hover:text-foreground transition-colors">
            История
          </Link>
          <Link to="/anomalies" className="text-foreground/80 hover:text-foreground transition-colors">
            Аномалии
          </Link>
          <Link to="/documents" className="text-foreground/80 hover:text-foreground transition-colors">
            Документы
          </Link>
          <Link to="/operations" className="text-foreground/80 hover:text-foreground transition-colors">
            Операции
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Поиск</span>
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Секретный архив
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ScrHeader;