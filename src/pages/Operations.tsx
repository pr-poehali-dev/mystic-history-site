import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Atom, Calendar, Clock, FileText, MapPin, Shield, User, Users } from "lucide-react";

interface OperationCard {
  id: number;
  title: string;
  description: string;
  status: "в процессе" | "завершена" | "архив";
  date: string;
  location: string;
  personnel: number;
  lead: string;
  category: "контейнмент" | "исследование" | "нейтрализация" | "разведка";
}

const operationsData: OperationCard[] = [
  {
    id: 1,
    title: "Операция 'Тунгуска'",
    description: "Изучение и контейнмент последствий падения неизвестного объекта в Сибири.",
    status: "архив",
    date: "1908-1912",
    location: "Подкаменная Тунгуска, Сибирь",
    personnel: 37,
    lead: "К. В. Федоров",
    category: "контейнмент"
  },
  {
    id: 2,
    title: "Операция 'Зеркало'",
    description: "Исследование пространственно-временных аномалий в горной местности.",
    status: "завершена",
    date: "1963-1965",
    location: "Алтайские горы",
    personnel: 23,
    lead: "А. П. Соколов",
    category: "исследование"
  },
  {
    id: 3,
    title: "Операция 'Ледник'",
    description: "Нейтрализация источника неизвестного излучения под ледяным покровом.",
    status: "завершена",
    date: "1982-1983",
    location: "Арктика, точные координаты засекречены",
    personnel: 42,
    lead: "М. И. Корнеев",
    category: "нейтрализация"
  },
  {
    id: 4,
    title: "Операция 'Призма'",
    description: "Исследование световых аномалий и их влияния на человеческое восприятие.",
    status: "в процессе",
    date: "2019-настоящее время",
    location: "Засекречено",
    personnel: 18,
    lead: "Е. В. Крылова",
    category: "исследование"
  },
  {
    id: 5,
    title: "Операция 'Черный шепот'",
    description: "Контейнмент звуковой аномалии, вызывающей измененные состояния сознания.",
    status: "в процессе",
    date: "2020-настоящее время",
    location: "Закрытая зона SCR-12",
    personnel: 27,
    lead: "Д. Н. Ковалев",
    category: "контейнмент"
  },
  {
    id: 6,
    title: "Операция 'Маяк'",
    description: "Разведывательная миссия по обнаружению источника неизвестных сигналов.",
    status: "в процессе",
    date: "2022-настоящее время",
    location: "Северный Урал",
    personnel: 15,
    lead: "С. А. Морозов",
    category: "разведка"
  }
];

const Operations = () => {
  // Функция для определения цвета статуса
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "в процессе":
        return <Badge className="bg-green-500">В процессе</Badge>;
      case "завершена":
        return <Badge className="bg-blue-500">Завершена</Badge>;
      case "архив":
        return <Badge variant="outline">Архив</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Иконка категории
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "контейнмент":
        return <Shield className="h-5 w-5 text-amber-500" />;
      case "исследование":
        return <Atom className="h-5 w-5 text-blue-500" />;
      case "нейтрализация":
        return <Shield className="h-5 w-5 text-red-500" />;
      case "разведка":
        return <MapPin className="h-5 w-5 text-green-500" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-between mb-8 gap-4">
        <div>
          <h1 className="scr-font-title text-3xl font-bold mb-2">Операции SCR</h1>
          <p className="text-muted-foreground">
            Официальные отчеты о проведенных и текущих операциях организации
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">Все операции</TabsTrigger>
          <TabsTrigger value="в процессе">Текущие</TabsTrigger>
          <TabsTrigger value="завершена">Завершенные</TabsTrigger>
          <TabsTrigger value="архив">Архивные</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsData.map((operation) => (
              <OperationCardComponent key={operation.id} operation={operation} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="в процессе" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsData
              .filter((op) => op.status === "в процессе")
              .map((operation) => (
                <OperationCardComponent key={operation.id} operation={operation} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="завершена" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsData
              .filter((op) => op.status === "завершена")
              .map((operation) => (
                <OperationCardComponent key={operation.id} operation={operation} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="архив" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationsData
              .filter((op) => op.status === "архив")
              .map((operation) => (
                <OperationCardComponent key={operation.id} operation={operation} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-card border rounded-lg p-6 mb-6">
        <h2 className="scr-font-title text-xl font-bold mb-4">О классификации операций</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-amber-500" />
            <span>Операции контейнмента</span>
          </div>
          <div className="flex items-center gap-3">
            <Atom className="h-5 w-5 text-blue-500" />
            <span>Исследовательские операции</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-red-500" />
            <span>Операции нейтрализации</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-green-500" />
            <span>Разведывательные операции</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          Все проводимые SCR операции классифицируются по основной цели и степени секретности. 
          Некоторые детали операций могут быть скрыты или представлены в ограниченном объеме 
          с целью сохранения безопасности и защиты от несанкционированного доступа.
        </p>
      </div>
    </div>
  );
};

interface OperationCardProps {
  operation: OperationCard;
}

const OperationCardComponent = ({ operation }: OperationCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2">
            {getCategoryIcon(operation.category)}
            <CardTitle className="text-lg">{operation.title}</CardTitle>
          </div>
          <div>
            {operation.status === "в процессе" ? (
              <Badge className="bg-green-500">Активна</Badge>
            ) : operation.status === "завершена" ? (
              <Badge className="bg-blue-500">Завершена</Badge>
            ) : (
              <Badge variant="outline">Архив</Badge>
            )}
          </div>
        </div>
        <CardDescription>{operation.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{operation.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="truncate" title={operation.location}>{operation.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{operation.personnel} чел.</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="truncate" title={operation.lead}>{operation.lead}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default Operations;