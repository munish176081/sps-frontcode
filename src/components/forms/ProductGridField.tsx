"use client";

import { useStoneData } from "@/hooks/useProducts";
import { useState } from "react";
import Image from "next/image";
import { StoneProduct } from "@/types/product";
import GridCartSkeleton from "../ui/GridCardSkeleton";

type Props = {
  field: any;
  category: string | null;
  onChange?: (ids: number[]) => void;
};

export default function ProductGridField({ field, category, onChange }: Props) {
  console.log("Category in ProductGridField:", category);
  const { data, isLoading } = useStoneData();

  const [selected, setSelected] = useState<number[]>([]);

  const products = data?.products ?? [];

  const filteredProducts = products.filter(
    (p: { category_id: number | null }) => p.category_id === category,
  );

  function toggleProduct(id: number) {
    if (selected.includes(id)) {
      const updated = selected.filter((p) => p !== id);
      setSelected(updated);
      onChange?.(updated);
      return;
    }

    if (selected.length >= field.max && !selected.includes(id)) return;

    const updated = [...selected, id];

    setSelected(updated);
    onChange?.(updated);
  }

  if (isLoading) {
    return <GridCartSkeleton />;
  }
  return (
    <div className="form-group">
      {filteredProducts.length === 0 && (
        <p>No products available for this category.</p>
      )}

      {filteredProducts.length > 0 && (
        <label className="form-label">
          {field.label} ({selected.length}/{field.max})
        </label>
      )}

      <div className="stone-grid" key={category}>
        {filteredProducts.map((product: StoneProduct) => {
          const active = selected.includes(product.id);
          const disabled = !active && selected.length >= field.max;
          return (
            <div
              key={product.id}
              className={`stone-card ${active ? "active" : ""} ${
                disabled ? "disabled" : ""
              }`}
              onClick={() => toggleProduct(product.id)}
            >
              {active && (
                <div className="stone-check">
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <Image
                src={product.main_image}
                alt={product.title}
                width={300}
                height={200}
                className="img-fluid"
              />

              <span>{product.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
