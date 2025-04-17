import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ScrHero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwSDJ2LTRoMzB2NHptMC04SDJ2LTRoMzB2NHptNCAxMmgtMnYtNGgydjR6bTAtOGgtMnYtNGgydjR6bTAtOGgtMlY2aDJ2MTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-scr-light border mb-6">
            <Shield className="w-5 h-5 text-scr mr-2" />
            <span className="text-sm font-medium">Секретная организация</span>
          </div>
          
          <h1 className="scr-font-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Тайны и загадки SCR
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            История SCR окутана тайной. Официально год основания организации не известен, но косвенные данные указывают на период между концом XIX и началом XX веков.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-scr hover:bg-scr/90">
              <FileText className="mr-2 h-5 w-5" />
              Изучить архивы
            </Button>
            <Button size="lg" variant="outline">
              Об организации
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-scr/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-scr/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ScrHero;