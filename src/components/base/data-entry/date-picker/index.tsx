"use client";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { format } from "date-fns";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import { tv } from "tailwind-variants";

type DatePickerProps = {
  label: string;
  value: { startDate: Date | undefined; endDate: Date | undefined };
  onChange: (value: { startDate: Date | undefined; endDate: Date | undefined }) => void;
};

export function DatePicker({ label: labelTxt, value, onChange }: DatePickerProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const hasValue = !!(value.startDate && value.endDate);
  const { input, label } = style({ showCalendar, placeholderShown: !hasValue });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(ranges: RangeKeyDict) {
    onChange({
      startDate: ranges.selection.startDate ?? new Date(),
      endDate: ranges.selection.endDate ?? new Date(),
    });
  }

  return (
    <div ref={divRef} className="relative inline-block w-full">
      {/* Botão que imita o input */}
      <button type="button" className={input()} onClick={() => setShowCalendar((prev) => !prev)}>
        <span className={label()}>{labelTxt}</span>
        <span>
          {hasValue
            ? `${format(value.startDate!, "dd/MM/yyyy")} - ${format(value.endDate!, "dd/MM/yyyy")}`
            : ""}
        </span>
      </button>

      {/* Calendário com animação */}
      {showCalendar && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute z-50 mt-2 w-full shadow-lg"
        >
          <DateRange
            editableDateInputs
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            months={1}
            direction="vertical"
            showMonthAndYearPickers
            rangeColors={["#006aff"]}
            ranges={[{ startDate: value.startDate, endDate: value.endDate, key: "selection" }]}
          />
        </motion.div>
      )}
    </div>
  );
}

// Estilização via tailwind-variants (tv)
const style = tv({
  slots: {
    label: "text-muted/70 absolute left-3 transform cursor-text text-xs transition-all",
    input:
      "group border-surface-divisor-100 bg-surface-100 h-14 w-full rounded-md border-2 px-3 pt-5 text-left text-sm leading-none transition-all placeholder:invisible",
  },
  variants: {
    showCalendar: {
      true: {},
      false: {},
    },
    placeholderShown: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      showCalendar: true,
      placeholderShown: true,
      className: {
        label: "top-2 translate-y-0 text-xs font-semibold",
        input: "ring-primary-100/30",
      },
    },
    {
      showCalendar: true,
      placeholderShown: false,
      className: {
        label: "top-2 translate-y-0 text-xs font-semibold",
        input: "ring-primary-100/30",
      },
    },
    {
      showCalendar: false,
      placeholderShown: true,
      className: {
        label: "text-muted top-1/2 -translate-y-1/2 text-base",
      },
    },
    {
      showCalendar: false,
      placeholderShown: false,
      className: {
        label: "top-2 translate-y-0 text-xs",
      },
    },
  ],
});
