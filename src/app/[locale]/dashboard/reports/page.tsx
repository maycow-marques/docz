"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Section } from "@/components/base/general/section";
import { ReportForm } from "@/components/forms/generate-reports";

export default function ReportsPage() {
  const t = useTranslations();
  const COLORS = ["#007bff", "#ff7300", "#00C49F", "#FFBB28", "#FF8042"];

  const [generatedData, setGeneratedData] = useState<{ name: string; value: number }[]>([]);
  const [generatedPieData, setGeneratedPieData] = useState<{ name: string; value: number }[]>([]);

  function onSubmit() {
    // Simula a geração de dados para o gráfico de linha e barras
    const mockData = [
      { name: "Jan", value: Math.floor(Math.random() * 100) },
      { name: "Feb", value: Math.floor(Math.random() * 100) },
      { name: "Mar", value: Math.floor(Math.random() * 100) },
      { name: "Apr", value: Math.floor(Math.random() * 100) },
      { name: "May", value: Math.floor(Math.random() * 100) },
    ];

    // Simula a geração de dados para o gráfico de pizza
    const mockPieData = [
      { name: "Categoria A", value: Math.floor(Math.random() * 100) },
      { name: "Categoria B", value: Math.floor(Math.random() * 100) },
      { name: "Categoria C", value: Math.floor(Math.random() * 100) },
      { name: "Categoria D", value: Math.floor(Math.random() * 100) },
    ];

    setGeneratedData(mockData);
    setGeneratedPieData(mockPieData);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{t("pages.dashboard.reports.title")}</h1>

      {/* Formulário de Filtros */}
      <Section className="mt-6 p-6">
        <ReportForm onSubmit={onSubmit} />
      </Section>

      {/* Exibir Gráficos */}
      {generatedData.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Section className="mt-6 p-6">
            {/* Gráfico de Linha */}
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={generatedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Section>

          <Section className="mt-6 p-6">
            {/* Gráfico de Barra */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={generatedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </Section>

          <Section className="mt-6 p-6">
            {/* Gráfico de Pizza */}
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={generatedPieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {generatedPieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Section>
        </div>
      )}
    </div>
  );
}
