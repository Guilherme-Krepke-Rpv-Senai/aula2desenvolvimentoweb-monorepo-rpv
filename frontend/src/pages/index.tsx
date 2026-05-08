import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const callAPI = async () => {
      fetch('http://localhost:5000/users').then(response => response.json())
      return response
    };
  }, []);

  return (
    <>

    </>
  );
}