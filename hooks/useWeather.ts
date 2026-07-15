"use client";

import { useEffect, useState } from "react";

type Weather = {
  temp: number;
  city: string;
  description: string;
  icon: string;
};

export default function useWeather() {

  const [weather, setWeather] =
    useState<Weather | null>(null);

  useEffect(() => {

    async function loadWeather() {

      try {

        const apiKey =
          process.env
            .NEXT_PUBLIC_OPENWEATHER_API_KEY;

        if (!apiKey) {

          console.error(
            "❌ API Key OpenWeather tidak ditemukan."
          );

          return;

        }

        // Koordinat Medan
        const lat = 3.5952;
        const lon = 98.6722;

        const response =
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
          );

        const data =
          await response.json();

        console.log("API KEY =", apiKey);
        console.log("STATUS =", response.status);
        console.log("OK =", response.ok);
        console.log("DATA =", data);

        console.log("Weather API:", data);

        if (!response.ok) {

          throw new Error(
            data.message ??
              "Weather Error"
          );

        }

        setWeather({

          temp: Math.round(
            data.main.temp
          ),

          city: data.name,

          description:
            data.weather[0].description,

          icon:
            data.weather[0].icon,

        });

      } catch (error) {

        console.error(
          "❌ Weather:",
          error
        );

      }

    }

    loadWeather();

    const interval =
      setInterval(
        loadWeather,
        1000 * 60 * 10
      );

    return () =>
      clearInterval(interval);

  }, []);

  return weather;

}