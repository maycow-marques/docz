"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { DatePicker } from "@/components/base/data-entry/date-picker";
import { Input } from "@/components/base/data-entry/input";
import { Select } from "@/components/base/data-entry/select";
import { Button } from "@/components/base/general/button";

type ReportFormProps = { onSubmit: (data: ReportFormState) => void };

type ReportFormState = {
  report: string;
  project: string;
  unit: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

export function ReportForm({ onSubmit }: ReportFormProps) {
  const t = useTranslations();

  const [formFields, setFormFields] = useState<ReportFormState>({
    unit: "",
    report: "",
    project: "",
    startDate: undefined,
    endDate: undefined,
  });

  function reset() {
    setFormFields({
      report: "",
      project: "",
      unit: "",
      startDate: undefined,
      endDate: undefined,
    });
  }

  function handleSubmit() {
    onSubmit(formFields);
  }

  return (
    <form className="space-y-4">
      {/* Tipo de Relatório */}
      <Select
        id="reportType"
        label={t("form.labels.reportType")}
        value={formFields.report}
        onChange={(e) => setFormFields((prev) => ({ ...prev, report: e.target.value }))}
      >
        <option value="">{t("form.labels.selectOption")}</option>
        <option value="standard">{t("pages.dashboard.reports.types.standard")}</option>
        <option value="technical">{t("pages.dashboard.reports.types.technical")}</option>
        <option value="client">{t("pages.dashboard.reports.types.clients")}</option>
        <option value="custom">{t("pages.dashboard.reports.types.custom")}</option>
      </Select>

      <div className="grid grid-cols-3 gap-5">
        <Input
          id="project"
          placeholder={t("form.labels.project")}
          value={formFields.project}
          onChange={(e) => setFormFields((prev) => ({ ...prev, project: e.target.value }))}
        />
        <Input
          id="unit"
          placeholder={t("form.labels.unit")}
          value={formFields.unit}
          onChange={(e) => setFormFields((prev) => ({ ...prev, unit: e.target.value }))}
        />
        <DatePicker
          label={t("form.labels.period")}
          value={{ startDate: formFields.startDate, endDate: formFields.endDate }}
          onChange={(dates) =>
            setFormFields((prev) => ({
              ...prev,
              startDate: dates.startDate,
              endDate: dates.endDate,
            }))
          }
        />
      </div>

      <div className="flex gap-4">
        <Button type="button" onClick={handleSubmit}>
          {t("shared.buttons.generate.report")}
        </Button>
        <Button type="button" variant="secondary" onClick={reset}>
          {t("shared.buttons.clear")}
        </Button>
      </div>
    </form>
  );
}
