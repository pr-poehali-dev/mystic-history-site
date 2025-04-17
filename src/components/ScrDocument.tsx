import { AlertCircle, Eye, FileText, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ScrDocumentProps {
  title: string;
  date: string;
  content: string;
  classification: "открытый" | "секретный" | "совершенно секретный";
  redacted?: boolean;
}

const ScrDocument = ({
  title,
  date,
  content,
  classification,
  redacted = false
}: ScrDocumentProps) => {
  const [isRedactedVisible, setIsRedactedVisible] = useState(false);

  const getClassificationBadge = () => {
    switch (classification) {
      case "открытый":
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <FileText className="w-3 h-3 mr-1" />
            Открытый доступ
          </div>
        );
      case "секретный":
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            <Eye className="w-3 h-3 mr-1" />
            Секретно
          </div>
        );
      case "совершенно секретный":
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            <Lock className="w-3 h-3 mr-1" />
            Совершенно секретно
          </div>
        );
    }
  };

  const renderContent = () => {
    if (redacted && !isRedactedVisible) {
      return content.split(' ').map((word, index) => {
        // Случайно зацензуривать некоторые слова
        return Math.random() > 0.7 && word.length > 3 ? 
          <span key={index} className="bg-black dark:bg-gray-800 text-transparent select-none mx-0.5">{word}</span> : 
          <span key={index} className="mx-0.5">{word}</span>;
      });
    }
    
    return content;
  };

  return (
    <div className="scr-document">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="scr-document-header">{title}</h3>
          <div className="text-sm text-muted-foreground">Дата: {date}</div>
        </div>
        {getClassificationBadge()}
      </div>
      
      <div className="font-mono text-sm leading-relaxed whitespace-pre-line mb-4">
        {renderContent()}
      </div>
      
      {redacted && (
        <div className="border-t pt-3 flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <AlertCircle className="w-3 h-3 mr-1" />
            Документ содержит засекреченные участки
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsRedactedVisible(!isRedactedVisible)}
          >
            {isRedactedVisible ? "Скрыть данные" : "Раскрыть данные"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ScrDocument;