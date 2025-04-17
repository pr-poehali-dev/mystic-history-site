import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, History, FileText, AlertTriangle, Atom, Lock, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ScrSidebar = ({ isOpen, setIsOpen }: ScrSidebarProps) => {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-card border-r transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-scr" />
            <span className="scr-font-title text-lg font-bold">SCR Фандом</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Закрыть меню</span>
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="px-3 py-2">
            <div className="mb-4 px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              НАВИГАЦИЯ
            </div>
            <div className="space-y-1">
              <Link
                to="/"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                <Shield className="h-5 w-5" />
                Главная
              </Link>
              <Link
                to="/history"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                <History className="h-5 w-5" />
                История
              </Link>
              <Link
                to="/documents"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-5 w-5" />
                Документы
              </Link>
              <Link
                to="/anomalies"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                <AlertTriangle className="h-5 w-5" />
                Аномалии
              </Link>
              <Link
                to="/operations"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                <Atom className="h-5 w-5" />
                Операции
              </Link>
            </div>
            
            <div className="mt-6 mb-4 px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              СЕКРЕТНЫЕ МАТЕРИАЛЫ
            </div>
            <Link
              to="/archive"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              <Lock className="h-5 w-5" />
              Секретный архив
            </Link>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};

export default ScrSidebar;