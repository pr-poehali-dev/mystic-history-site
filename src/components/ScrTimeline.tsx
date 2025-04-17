import { AlertTriangle, Calendar, FileCheck } from "lucide-react";

const timelineEvents = [
  {
    year: "1899-1908",
    title: "Предполагаемое основание",
    description: "Косвенные данные указывают на формирование первых структур организации в этот период.",
    icon: <Calendar className="h-5 w-5" />
  },
  {
    year: "1908",
    title: "Тунгусский метеорит",
    description: "По неподтвержденным данным, первые операции SCR были связаны с сокрытием информации о падении Тунгусского метеорита.",
    icon: <AlertTriangle className="h-5 w-5" />
  },
  {
    year: "1930-1940",
    title: "Экспансия и документирование",
    description: "Слухи о таинственных экспериментах в нацистской Германии и расширение деятельности организации.",
    icon: <FileCheck className="h-5 w-5" />
  }
];

const ScrTimeline = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="scr-font-title text-3xl font-bold mb-4">Историческая хроника</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ключевые исторические моменты в развитии организации SCR, собранные из архивных документов и свидетельств очевидцев.
          </p>
        </div>
        
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Точка на шкале времени */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-8 h-8 rounded-full bg-card border-4 border-scr flex items-center justify-center z-10">
                  {event.icon}
                </div>
                
                {/* Контент события */}
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div> {/* Пустая половина для выравнивания */}
                  <div className={`bg-card border rounded-lg p-6 shadow-sm md:w-1/2 md:mx-8 mt-6 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}>
                    <div className="scr-document-header text-sm">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrTimeline;