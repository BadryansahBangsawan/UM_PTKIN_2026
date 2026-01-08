"use client";

import { useState, useEffect } from "react";
import type { PTKIN } from "@/data/ptkin-data";
import type { Prodi } from "@/data/ptkin-data";
import { getMockProdi } from "@/data/prodi-data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { X, GraduationCap } from "lucide-react";

interface PTKINModalProps {
  ptkin: PTKIN | null;
  onClose: () => void;
}

export default function PTKINModal({ ptkin, onClose }: PTKINModalProps) {
  const [prodis, setProdis] = useState<Prodi[]>([]);

  useEffect(() => {
    if (ptkin) {
      setProdis(getMockProdi(ptkin.id));
    }
  }, [ptkin]);

  if (!ptkin) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-5 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Daftar Program Studi</h2>
                <p className="text-white/90 text-sm">{ptkin.nama}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          <Card className="border-0 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary/5 to-primary/10 border-b-2 border-primary/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">
                      No
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">
                      Kode Prodi
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">
                      Nama Prodi
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-800">
                      Daya Tampung
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prodis.map((prodi: Prodi, index: number) => (
                    <tr
                      key={prodi.id}
                      className={`border-b border-gray-100 last:border-0 transition-colors hover:bg-primary/5 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{index + 1}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{prodi.kodeProdi}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{prodi.namaProdi}</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-gray-900">{prodi.dayaTampung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end border-t border-gray-100 bg-gray-50/50 p-6 rounded-b-2xl">
          <Button
            variant="outline"
            onClick={onClose}
            className="h-12 px-8 rounded-xl border-2 hover:bg-white transition-colors font-semibold"
          >
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
}
