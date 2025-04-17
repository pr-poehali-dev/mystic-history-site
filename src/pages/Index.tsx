import { AlertTriangle, FileText, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrHero from "@/components/ScrHero";
import ScrTimeline from "@/components/ScrTimeline";
import ScrDocument from "@/components/ScrDocument";

const anomalies = [
  {
    id: 1,
    title: "Тунгусский феномен",
    description: "Исследование последствий падения метеорита и обнаруженных аномалий в регионе.",
    icon: <AlertTriangle className="h-10 w-10 text-amber-500" />
  },
  {
    id: 2,
    title: "Эксперимент №137",
    description: "Секретные научные разработки, проводимые в отдаленных лабораториях SCR.",
    icon: <Shield className="h-10 w-10 text-scr" />
  },
  {
    id: 3,
    title: "Документ 'Завеса'",
    description: "Исторические свидетельства о практиках сокрытия информации от общественности.",
    icon: <FileText className="h-10 w-10 text-blue-500" />
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrHero />
      
      {/* Секция об SCR */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="scr-font-title text-3xl font-bold mb-4">О тайной организации</h2>
              <p className="text-muted-foreground mb-4">
                История SCR окутана тайной. Официально год основания организации не известен, 
                но косвенные данные и архивные документы указывают на период между концом XIX и началом XX веков.
              </p>
              <p className="text-muted-foreground mb-6">
                Некоторые исследователи связывают возникновение SCR с ростом интереса к оккультным наукам 
                и появлением первых задокументированных аномальных явлений. По неподтвержденным данным, 
                первые операции SCR были связаны с сокрытием информации о падении Тунгусского метеорита 
                или слухах о таинственных экспериментах в нацистской Германии.
              </p>
              <Button className="bg-scr hover:bg-scr/90">Читать подробнее</Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-card rounded-lg overflow-hidden border shadow-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto bg-scr-light rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-scr" />
                  </div>
                  <div className="scr-font-title text-xl font-bold mb-2">SCR</div>
                  <p className="text-muted-foreground text-sm">Секретная организация</p>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-scr/10 rounded-lg transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Известные аномалии */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="scr-font-title text-3xl font-bold mb-4">Известные аномалии</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Объекты и явления, находящиеся под наблюдением и контролем организации SCR.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {anomalies.map((anomaly) => (
              <Card key={anomaly.id} className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-background p-2 rounded-md">{anomaly.icon}</div>
                  <div>
                    <CardTitle>{anomaly.title}</CardTitle>
                    <CardDescription>{anomaly.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Историческая хроника */}
      <ScrTimeline />
      
      {/* Секретные документы */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="scr-font-title text-3xl font-bold mb-4">Рассекреченные документы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Фрагменты архивных материалов, ставших доступными для изучения.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrDocument 
              title="ОТЧЕТ О ТУНГУССКОМ ИНЦИДЕНТЕ" 
              date="17.07.1908" 
              classification="секретный"
              redacted={true}
              content={`Группа наблюдения подтверждает исключительный характер происшествия в районе р. Подкаменная Тунгуска. Объект, предположительно внеземного происхождения, вошел в атмосферу в 07:14 по местному времени.

Результаты первичного обследования указывают на необычный характер радиации и магнитных аномалий в зоне поражения. Рекомендуется установить карантинный периметр и исключить доступ научных экспедиций до полного изучения феномена.

Свидетели происшествия должны быть изолированы. Распространять версию о падении метеорита.`}
            />
            
            <ScrDocument 
              title="МЕМОРАНДУМ О СОЗДАНИИ ПОДРАЗДЕЛЕНИЯ №7" 
              date="03.03.1932" 
              classification="совершенно секретный"
              redacted={true}
              content={`В связи с участившимися случаями регистрации аномальных явлений на территории Центральной Европы, учреждается специальное подразделение для мониторинга и противодействия.

Подразделение №7 получает полномочия на проведение разведывательных и сдерживающих операций. Особое внимание уделить предотвращению использования аномальных объектов в военных целях.

Координатор: [ДАННЫЕ УДАЛЕНЫ]
Бюджет: [ДАННЫЕ УДАЛЕНЫ]
Расположение опорных пунктов: [ДАННЫЕ УДАЛЕНЫ]`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;