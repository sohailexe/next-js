"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  async function fetchData() {
    const response = await fetch("/api/add");
    const jsonData = await response.json();
    setData(jsonData);
  }

  // fetchData();
  // }, []);

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
