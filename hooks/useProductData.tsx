import { useEffect, useState } from "react";

export function useProductData() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68e1639ed0ea881f409551dd/latest", {
      headers: {
        "X-Master-Key":
          "$2a$10$OoFDUTbclTdmR4rp1EpoTOTo49zuis9cJJdeJbF3SJj62kEyXJePO",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.record.products);

      });
  }, []);
  return productData;
}