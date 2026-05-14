import { useState } from "react";

//
export function useGeolocation({ defaultPosition = null } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    const confirmed = window.confirm(
      "Allow Location for Accurate Positioning. ",
    );

    if (!confirmed || !navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },

      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      },
    );
  }
  return { isLoading, position, error, getPosition };
}
