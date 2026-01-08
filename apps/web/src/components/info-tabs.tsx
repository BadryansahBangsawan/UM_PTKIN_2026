"use client";

import { useState } from "react";
import { BookOpen, Settings, Calendar, CreditCard, Search, FileText, Video, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { INFO_CONTENTS } from "@/data/info-content";

const tabs = [
  { id: "pengantar", label: "Pengantar", icon: BookOpen },
  { id: "ketentuan", label: "Ketentuan", icon: Settings },
  { id: "jadwal", label: "Jadwal", icon: Calendar },
  { id: "biaya", label: "Biaya", icon: CreditCard },
  { id: "alur", label: "Alur", icon: Search },
  { id: "materiujian", label: "Materi Ujian", icon: FileText },
  { id: "tutorial", label: "Tutorial", icon: Video },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("pengantar");

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
        <div className="border-b">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap font-medium transition-colors border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="prose prose-sm max-w-none dark:prose-invert [&_iframe]:w-full [&_div.relative]:w-full [&_div[style*='padding-bottom']]:h-0 [&_iframe[style*='position: absolute']]:border-0">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {INFO_CONTENTS[activeTab]?.title}
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              dangerouslySetInnerHTML={{
                __html: INFO_CONTENTS[activeTab]?.content || "",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
