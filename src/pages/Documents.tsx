import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search } from "lucide-react";
import ScrDocument from "@/components/ScrDocument";

const documentsData = [
  {
    id: 1,
    title: "ОТЧЕТ О ТУНГУССКОМ ИНЦИДЕНТЕ",
    date: "17.07.1908",
    classification: "секретный" as const,
    redacted: true,
    category: "операции",
    content: `Группа наблюдения подтверждает исключительный характер происшествия в районе р. Подкаменная Тунгуска. Объект, предположительно внеземного происхождения, вошел в атмосферу в 07:14 по местному времени.

Результаты первичного обследования указывают на необычный характер радиации и магнитных аномалий в зоне поражения. Рекомендуется установить карантинный периметр и исключить доступ научных экспедиций до полного изучения феномена.

Свидетели происшествия должны быть изолированы. Распространять версию о падении метеорита.`
  },
  {
    id: 2,
    title: "МЕМОРАНДУМ О СОЗДАНИИ ПОДРАЗДЕЛЕНИЯ №7",
    date: "03.03.1932",
    classification: "совершенно секретный" as const,
    redacted: true,
    category: "административные",
    content: `В связи с участившимися случаями регистрации аномальных явлений на территории Центральной Европы, учреждается специальное подразделение для мониторинга и противодействия.

Подразделение №7 получает полномочия на проведение разведывательных и сдерживающих операций. Особое внимание уделить предотвращению использования аномальных объектов в военных целях.

Координатор: [ДАННЫЕ УДАЛЕНЫ]
Бюджет: [ДАННЫЕ УДАЛЕНЫ]
Расположение опорных пунктов: [ДАННЫЕ УДАЛЕНЫ]`
  },
  {
    id: 3,
    title: "ПРОТОКОЛ ИССЛЕДОВАНИЯ АНОМАЛИИ А-113",
    date: "25.09.1956",
    classification: "открытый" as const,
    redacted: false,
    category: "научные",
    content: `Объект демонстрирует необычные электромагнитные свойства при воздействии на него температур ниже -15°C. При охлаждении жидким азотом наблюдается кратковременное свечение в ультрафиолетовом спектре.

Химический анализ не выявил наличия радиоактивных или токсичных веществ. Материал объекта имеет кристаллическую структуру, сходную со стандартными силикатами, но с необычными включениями, требующими дополнительного изучения.

Объект безопасен для кратковременного контакта, но рекомендуется использование защитных перчаток при длительном обращении.`
  },
  {
    id: 4,
    title: "РАСПОРЯЖЕНИЕ О МОНИТОРИНГЕ ЗОНЫ ШР-12",
    date: "18.04.1972",
    classification: "секретный" as const,
    redacted: true,
    category: "операции",
    content: `В связи с участившимися случаями регистрации акустических аномалий в районе [ДАННЫЕ УДАЛЕНЫ], необходимо усилить наблюдение за периметром зоны ШР-12.

Установить дополнительное оборудование для фиксации звуковых волн вне пределов слышимости обычным человеческим ухом. Показания приборов передавать в центр обработки данных каждые 6 часов.

В случае обнаружения паттернов, схожих с теми, что были зафиксированы 5 апреля, немедленно активировать протокол "Тишина" и эвакуировать персонал ближайших населенных пунктов.`
  },
  {
    id: 5,
    title: "ФИНАНСОВЫЙ ОТЧЕТ ЗА 1983 ГОД",
    date: "15.01.1984",
    classification: "открытый" as const,
    redacted: false,
    category: "административные",
    content: `Бюджет научно-исследовательского отдела был исполнен на 93.7% от плановых показателей. Экономия средств связана с приостановкой проекта "Сияние" в третьем квартале из-за технических трудностей.

Затраты на полевые операции превысили запланированные на 12.3% в связи с необходимостью экстренного реагирования на события в [намеренно изъято согласно политике организации].

Рекомендуется увеличить финансирование отдела аналитики на следующий финансовый год в связи с расширением деятельности в Восточной Европе.`
  },
  {
    id: 6,
    title: "ОТЧЕТ ОБ ЭКСПЕРИМЕНТЕ С ВРЕМЕННЫМИ ПЕТЛЯМИ",
    date: "30.11.1991",
    classification: "совершенно секретный" as const,
    redacted: true,
    category: "научные",
    content: `Эксперимент №347-Б по созданию временной петли продолжительностью до 15 секунд дал положительные результаты. Три из пяти попыток были успешны, две привели к незначительным искажениям в структуре пространства-времени.

Использование [ДАННЫЕ УДАЛЕНЫ] в качестве катализатора значительно повысило стабильность петли. Однако, побочные эффекты в виде [ДАННЫЕ УДАЛЕНЫ] требуют дальнейшего изучения и минимизации.

Рекомендуется продолжить эксперименты с увеличением временного интервала до 30 секунд, но с учетом усиления мер безопасности для персонала и оборудования.`
  }
];

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [classificationFilter, setClassificationFilter] = useState<string>("all");
  const [filteredDocuments, setFilteredDocuments] = useState(documentsData);
  
  // Обработка фильтрации документов
  const filterDocuments = (category: string) => {
    let filtered = documentsData;
    
    // Фильтрация по поисковому запросу
    if (searchQuery) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        doc.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Фильтрация по грифу секретности
    if (classificationFilter !== "all") {
      filtered = filtered.filter(doc => doc.classification === classificationFilter);
    }
    
    // Фильтрация по категории
    if (category !== "all") {
      filtered = filtered.filter(doc => doc.category === category);
    }
    
    setFilteredDocuments(filtered);
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="scr-font-title text-3xl font-bold mb-2">Архив документов</h1>
          <p className="text-muted-foreground">
            Рассекреченные материалы и отчеты организации SCR
          </p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск в документах..."
              className="pl-9 w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                filterDocuments("all");
              }}
            />
          </div>
          
          <Select
            value={classificationFilter}
            onValueChange={(value) => {
              setClassificationFilter(value);
              filterDocuments("all");
            }}
          >
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Гриф секретности" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все документы</SelectItem>
              <SelectItem value="открытый">Открытые</SelectItem>
              <SelectItem value="секретный">Секретные</SelectItem>
              <SelectItem value="совершенно секретный">Совершенно секретные</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full" onValueChange={filterDocuments}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">Все категории</TabsTrigger>
          <TabsTrigger value="операции">Операции</TabsTrigger>
          <TabsTrigger value="научные">Научные</TabsTrigger>
          <TabsTrigger value="административные">Административные</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <ScrDocument
                  key={doc.id}
                  title={doc.title}
                  date={doc.date}
                  classification={doc.classification}
                  redacted={doc.redacted}
                  content={doc.content}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Документы не найдены</h3>
                <p className="text-muted-foreground max-w-sm">
                  По вашему запросу не найдено документов. Попробуйте изменить параметры поиска.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="операции" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <ScrDocument
                  key={doc.id}
                  title={doc.title}
                  date={doc.date}
                  classification={doc.classification}
                  redacted={doc.redacted}
                  content={doc.content}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Документы не найдены</h3>
                <p className="text-muted-foreground max-w-sm">
                  В данной категории нет документов, соответствующих критериям поиска.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="научные" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <ScrDocument
                  key={doc.id}
                  title={doc.title}
                  date={doc.date}
                  classification={doc.classification}
                  redacted={doc.redacted}
                  content={doc.content}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Документы не найдены</h3>
                <p className="text-muted-foreground max-w-sm">
                  В данной категории нет документов, соответствующих критериям поиска.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="административные" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <ScrDocument
                  key={doc.id}
                  title={doc.title}
                  date={doc.date}
                  classification={doc.classification}
                  redacted={doc.redacted}
                  content={doc.content}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Документы не найдены</h3>
                <p className="text-muted-foreground max-w-sm">
                  В данной категории нет документов, соответствующих критериям поиска.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Documents;