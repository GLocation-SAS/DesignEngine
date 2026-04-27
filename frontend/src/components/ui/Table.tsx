"use client";

import { cn } from "@/lib/utils";

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableProps {
  /** Column definitions */
  columns: TableColumn[];
  /** Data to display */
  data: Record<string, any>[];
  /** Optional additional table classes */
  className?: string;
  /** Optional additional container classes */
  containerClassName?: string;
}

export function Table({ columns, data, className, containerClassName }: TableProps) {
  return (
    <div className={cn(
      "w-full overflow-x-auto rounded-xl border border-primary-300 bg-neutral-900 shadow-lg shadow-primary-500/20",
      containerClassName
    )}>
      <table className={cn("w-full text-left border-collapse min-w-[600px]", className)}>
        <thead>
          <tr className="border-b border-primary-500 bg-primary-500">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-4 text-[12px] font-bold text-white uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-primary-100">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-primary-100 transition-colors group bg-neutral-50"
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-6 py-4 text-sm text-neutral-800 group-hover:text-neutral-900 transition-colors"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-12 text-center text-sm text-neutral-800 italic bg-neutral-50"
              >
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
