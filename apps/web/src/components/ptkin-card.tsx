"use client";

import { useState } from "react";
import type { PTKIN } from "@/data/ptkin-data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Building2, Globe, Phone, Mail, Clock, MapPin } from "lucide-react";
import Image from "next/image";

interface PTKINCardProps {
  ptkin: PTKIN;
  onViewProdi: (ptkin: PTKIN) => void;
}

export default function PTKINCard({ ptkin, onViewProdi }: PTKINCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50/50">
      <CardContent className="p-0">
        <div className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-primary/10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <span className="mb-2 inline-block rounded-lg bg-gradient-to-r from-primary to-primary/80 px-3 py-1 text-xs font-bold text-white shadow-md">
                Kode {ptkin.kode}
              </span>
              <h3 className="text-xl font-bold leading-tight text-foreground">
                {ptkin.nama}
              </h3>
            </div>
            {ptkin.logo ? (
              <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white shadow-lg">
                <Image
                  src={ptkin.logo}
                  alt={`Logo ${ptkin.nama}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 text-white">
                <Building2 className="h-7 w-7" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 p-5 text-sm">
          <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="line-clamp-2 text-gray-700">
              {ptkin.alamat}
            </span>
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <a
              href={ptkin.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 hover:underline truncate font-medium"
            >
              {ptkin.website}
            </a>
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-gray-700">{ptkin.phone}</span>
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <a
              href={`mailto:${ptkin.email}`}
              className="text-primary hover:text-primary/80 hover:underline truncate font-medium"
            >
              {ptkin.email}
            </a>
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-gray-50/50 p-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span
              className={`font-bold px-2 py-1 rounded ${
                ptkin.timezone === "WIT"
                  ? "bg-red-100 text-red-700"
                  : ptkin.timezone === "WITA"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {ptkin.timezone}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gradient-to-r from-primary/5 to-primary/10 p-5">
          <Button
            className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5 font-semibold"
            onClick={() => onViewProdi(ptkin)}
          >
            Lihat Daya Tampung
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
