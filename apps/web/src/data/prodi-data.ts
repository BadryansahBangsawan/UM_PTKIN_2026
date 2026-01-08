import type { Prodi } from "./ptkin-data";

export const getMockProdi = (ptkinId: number): Prodi[] => {
  const mockData: Record<number, Prodi[]> = {
    101: [
      { id: 1, kodeProdi: "10101", namaProdi: "Tadris Bahasa Arab", dayaTampung: 120 },
      { id: 2, kodeProdi: "10102", namaProdi: "Tadris Bahasa Inggris", dayaTampung: 150 },
      { id: 3, kodeProdi: "10103", namaProdi: "Tadris Matematika", dayaTampung: 100 },
      { id: 4, kodeProdi: "10104", namaProdi: "Hukum Keluarga Islam", dayaTampung: 80 },
      { id: 5, kodeProdi: "10105", namaProdi: "Ekonomi Syariah", dayaTampung: 90 },
      { id: 6, kodeProdi: "10106", namaProdi: "Perbankan Syariah", dayaTampung: 85 },
    ],
    102: [
      { id: 1, kodeProdi: "10201", namaProdi: "Tadris Bahasa Arab", dayaTampung: 110 },
      { id: 2, kodeProdi: "10202", namaProdi: "Tadris Bahasa Inggris", dayaTampung: 140 },
      { id: 3, kodeProdi: "10203", namaProdi: "Tadris Biologi", dayaTampung: 95 },
      { id: 4, kodeProdi: "10204", namaProdi: "Hukum Keluarga Islam", dayaTampung: 75 },
      { id: 5, kodeProdi: "10205", namaProdi: "Manajemen Dakwah", dayaTampung: 85 },
    ],
  };

  return mockData[ptkinId] || [
    { id: 1, kodeProdi: "01", namaProdi: "Tadris Bahasa Arab", dayaTampung: 100 },
    { id: 2, kodeProdi: "02", namaProdi: "Tadris Bahasa Inggris", dayaTampung: 120 },
    { id: 3, kodeProdi: "03", namaProdi: "Tadris Matematika", dayaTampung: 90 },
    { id: 4, kodeProdi: "04", namaProdi: "Hukum Keluarga Islam", dayaTampung: 70 },
    { id: 5, kodeProdi: "05", namaProdi: "Ekonomi Syariah", dayaTampung: 80 },
    { id: 6, kodeProdi: "06", namaProdi: "Perbankan Syariah", dayaTampung: 75 },
    { id: 7, kodeProdi: "07", namaProdi: "Manajemen Dakwah", dayaTampung: 65 },
    { id: 8, kodeProdi: "08", namaProdi: "Komunikasi dan Penyiaran Islam", dayaTampung: 85 },
  ];
};
