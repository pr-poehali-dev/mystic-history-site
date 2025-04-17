import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ScrFooter = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-scr" />
              <span className="scr-font-title text-lg font-bold">SCR Фандом</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Неофициальный ресурс, посвященный загадочной организации SCR, её истории и операциям.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Разделы сайта</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-muted-foreground hover:text-foreground transition-colors">
                  История
                </Link>
              </li>
              <li>
                <Link to="/anomalies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Аномалии
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Документы
                </Link>
              </li>
              <li>
                <Link to="/operations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Операции
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Правовая информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Отказ от ответственности
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 SCR Фандом. Все материалы являются вымышленными.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              Сайт создан для развлекательных целей и не связан с реальными организациями или событиями.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ScrFooter;