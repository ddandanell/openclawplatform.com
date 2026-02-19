import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AI agency Claw - Custom AI Employee Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient accent */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,43,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,43,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FF6B2B, #FF8F5E, #FF6B2B)",
            display: "flex",
          }}
        />

        {/* Claw icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 15 Q15 35 25 50"
              stroke="#FF6B2B"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M40 10 Q40 35 40 55"
              stroke="#FF6B2B"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M60 15 Q65 35 55 50"
              stroke="#FF6B2B"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 52 Q40 68 58 52"
              stroke="#FF6B2B"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="33" cy="38" r="3" fill="#FF6B2B" />
            <circle cx="47" cy="38" r="3" fill="#FF6B2B" />
          </svg>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            AI agency{" "}
            <span style={{ color: "#FF6B2B" }}>Claw</span>
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Custom AI Employee Solutions
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.45)",
              margin: "8px 0 0",
              fontWeight: 400,
              textAlign: "center",
              maxWidth: "700px",
            }}
          >
            Build, deploy, and manage AI employees that automate your business 24/7
          </p>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(255,107,43,0.5)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            claw.agency
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(255,107,43,0.5)",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
