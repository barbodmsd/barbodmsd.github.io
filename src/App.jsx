import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export const Loading = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed", inset: 0,
    }}
  >
    <div >
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{ transform: "rotate(90deg)" }}
        wrapperClass="dna-wrapper"
      />
    </div>
  </div>
);

export default function App() {
  const [led, setLed] = useState();

  // get data LED from server
  useEffect(() => {
    (async () => {
      const res = await fetch("http://masoudi.vira-tec.com/v1/status");
      const data = await res.json();
      setLed(data);
    })();
  }, []);

  // update LED
  const handleLed = async (ledNumber, ledState) => {
    const res = await fetch(
      `http://masoudi.vira-tec.com/v1/status?led_number=${ledNumber}&led_state=${ledState}`,
      {
        method: "PATCH",
      }
    );
    const data = await res.json();
    setLed(data);
  };

  return (
    <>
      {led ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* LED 1 */}
            <button
              onClick={() => handleLed(1, !led.LED1)}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: led?.LED1
                  ? "linear-gradient(145deg, #28a745, #218838)"
                  : "linear-gradient(145deg, #dc3545, #c82333)",
                boxShadow: led?.LED1
                  ? "0 8px 15px rgba(40, 167, 69, 0.4)"
                  : "0 8px 15px rgba(220, 53, 69, 0.4)",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease-in-out",
                transform: "scale(1)",
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.95)")
              }
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              1
            </button>

            {/* LED 2 */}
            <button
              onClick={() => handleLed(2, !led.LED2)}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: led?.LED2
                  ? "linear-gradient(145deg, #28a745, #218838)"
                  : "linear-gradient(145deg, #dc3545, #c82333)",
                boxShadow: led?.LED2
                  ? "0 8px 15px rgba(40, 167, 69, 0.4)"
                  : "0 8px 15px rgba(220, 53, 69, 0.4)",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease-in-out",
                transform: "scale(1)",
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "scale(0.95)")
              }
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              2
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
