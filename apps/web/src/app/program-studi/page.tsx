"use client";

import { useState, useMemo } from "react";
import { PTKIN_DATA, getPTKINBySearch } from "@/data/ptkin-data";
import type { PTKIN } from "@/data/ptkin-data";
import PTKINCard from "@/components/ptkin-card";
import PTKINModal from "@/components/ptkin-modal";
import SearchBar from "@/components/search-bar";
import Pagination from "@/components/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function ProgramStudiPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState<
    "" | "WIB" | "WITA" | "WIT"
  >("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPTKIN, setSelectedPTKIN] = useState<PTKIN | null>(null);

  const provinsiList = useMemo(() => {
    const provinsi = new Set(PTKIN_DATA.map((ptkin) => ptkin.provinsi));
    return Array.from(provinsi).sort();
  }, []);

  const filteredPTKIN = useMemo(() => {
    let result = PTKIN_DATA;

    if (searchQuery) {
      result = getPTKINBySearch(searchQuery);
    }

    if (selectedProvinsi) {
      result = result.filter((ptkin) => ptkin.provinsi === selectedProvinsi);
    }

    if (selectedTimezone) {
      result = result.filter((ptkin) => ptkin.timezone === selectedTimezone);
    }

    return result;
  }, [searchQuery, selectedProvinsi, selectedTimezone]);

  const totalPages = Math.ceil(filteredPTKIN.length / ITEMS_PER_PAGE);
  const currentPTKIN = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPTKIN.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPTKIN, currentPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProdi = (ptkin: PTKIN) => {
    setSelectedPTKIN(ptkin);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedProvinsi("");
    setSelectedTimezone("");
    setCurrentPage(1);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Daftar PTKIN
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan Perguruan Tinggi Keagamaan Islam Negeri di seluruh Indonesia
            </p>
          </div>

          <div className="mb-10">
            <SearchBar onSearch={handleSearch} placeholder="Cari nama, kode, atau provinsi..." />
          </div>

          <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Filter className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Filter Pencarian</h3>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="text-sm font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-all"
                >
                  Reset Filter
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Provinsi
                  </label>
                  <div className="relative">
                    <select
                      value={selectedProvinsi}
                      onChange={(e) => {
                        setSelectedProvinsi(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium appearance-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer hover:border-gray-300"
                    >
                      <option value="">Semua Provinsi</option>
                      {provinsiList.map((provinsi) => (
                        <option key={provinsi} value={provinsi}>
                          {provinsi}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Timezone
                  </label>
                  <div className="relative">
                    <select
                      value={selectedTimezone}
                      onChange={(e) => {
                        setSelectedTimezone(e.target.value as any);
                        setCurrentPage(1);
                      }}
                      className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium appearance-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer hover:border-gray-300"
                    >
                      <option value="">Semua Timezone</option>
                      <option value="WIB">WIB (Waktu Indonesia Barat)</option>
                      <option value="WITA">WITA (Waktu Indonesia Tengah)</option>
                      <option value="WIT">WIT (Waktu Indonesia Timur)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="w-full rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-4 text-sm">
                    <p className="font-bold text-primary mb-1">Hasil Pencarian</p>
                    <p className="text-2xl font-extrabold text-gray-900">{filteredPTKIN.length}</p>
                    <p className="text-gray-600">PTKIN ditemukan</p>
                    {filteredPTKIN.length === 0 && (
                      <p className="text-gray-500 mt-2 text-xs">
                        Tidak ada PTKIN yang sesuai dengan filter Anda
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {currentPTKIN.length > 0 ? (
          <>
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentPTKIN.map((ptkin) => (
                <PTKINCard
                  key={ptkin.id}
                  ptkin={ptkin}
                  onViewProdi={handleViewProdi}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <div className="py-16 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Filter className="h-10 w-10 text-gray-400" />
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Tidak ada PTKIN yang ditemukan
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Silakan coba ubah kata kunci atau filter pencarian Anda
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      <PTKINModal ptkin={selectedPTKIN} onClose={() => setSelectedPTKIN(null)} />
    </>
  );
}
