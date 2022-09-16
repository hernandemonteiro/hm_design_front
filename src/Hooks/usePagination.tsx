import React, { useState } from "react";
import Button from "../components/Shop/Button";

export default function usePagination(initialQuantity: number) {
  const [pagination, setPagination] = useState<number>(initialQuantity);

  function buttonPaginate(arrayLength: any) {
    if (pagination < arrayLength) {
      return (
        <Button onClick={() => setPagination(pagination + 5)}>
          Mostrar Mais
        </Button>
      );
    }
  }

  return {
    pagination,
    buttonPaginate,
  };
}
