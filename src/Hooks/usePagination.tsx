import React, { useState } from "react";
import Button from "../components/UI/Button";

export default function usePagination(initialQuantity: number) {
  const [pagination, setPagination] = useState<number>(initialQuantity);

  function buttonPaginate(arrayLength: any) {
    if (pagination < arrayLength) {
      return (
        <Button
          children="Mostrar Mais"
          onClick={() => setPagination(pagination + 5)}
        />
      );
    }
  }

  return {
    pagination,
    buttonPaginate,
  };
}
