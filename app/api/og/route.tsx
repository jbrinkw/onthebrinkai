// Simple OG image placeholder; replace with a generated image if desired.
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          color: "#e8edf5",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        OnTheBrinkAI
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

