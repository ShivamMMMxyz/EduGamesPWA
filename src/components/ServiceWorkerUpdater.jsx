import React, { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const ServiceWorkerUpdater = () => {
  const {
    needRefresh,
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW registered", r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  useEffect(() => {
    if (needRefresh) {
      console.log("⚡ A new version is available!");
    }
  }, [needRefresh]);

  return (
    <>
      {needRefresh && (
        <div style={bannerStyle}>
          <span>⚡ New version available!</span>
          <button style={buttonStyle} onClick={() => updateServiceWorker(true)}>
            Refresh
          </button>
        </div>
      )}
    </>
  );
};

const bannerStyle = {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#333",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  zIndex: 9999,
};

const buttonStyle = {
  background: "#4CAF50",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ServiceWorkerUpdater;
