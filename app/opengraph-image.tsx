import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "FRAMRA – extrajobb där du lär dig sälja, tjänar extra och har kul.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [extinguisher, blanket, alarm] = await Promise.all([
    readFile(join(process.cwd(), "public", "Brandslackare-landningssida.png")),
    readFile(join(process.cwd(), "public", "brandfilt-landningssida.png")),
    readFile(
      join(process.cwd(), "public", "brandvarnare-landningssida-converted.png"),
    ),
  ]);
  const imageData = (image: Buffer) =>
    `data:image/png;base64,${image.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#6d4aff",
          color: "#fffdf7",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: 48,
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "2px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            display: "flex",
            height: 540,
            left: -250,
            position: "absolute",
            top: 210,
            width: 540,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            width: 690,
          }}
        >
          <div
            style={{
              alignItems: "center",
              alignSelf: "flex-start",
              background: "#c8ff55",
              border: "2px solid #161522",
              borderRadius: 999,
              color: "#161522",
              display: "flex",
              fontSize: 23,
              fontWeight: 900,
              letterSpacing: 3,
              marginBottom: 25,
              padding: "12px 20px",
            }}
          >
            <span>FRAMRA</span>
            <span
              style={{
                background: "#6d4aff",
                borderRadius: 999,
                height: 9,
                margin: "0 12px",
                width: 9,
              }}
            />
            <span>EXTRAJOBB</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 0.98,
            }}
          >
            <span>Tjäna extra.</span>
            <span style={{ color: "#c8ff55" }}>Ha kul.</span>
            <span>Väx på köpet.</span>
          </div>
          <div
            style={{
              color: "rgba(255,253,247,0.9)",
              display: "flex",
              fontSize: 25,
              lineHeight: 1.35,
              marginTop: 25,
              maxWidth: 650,
            }}
          >
            <span>
              Lär dig sälja från grunden, träffa nya människor och påverka själv
              vad du tjänar.
            </span>
          </div>
          <div
            style={{
              color: "rgba(255,253,247,0.7)",
              display: "flex",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: 1.4,
              marginTop: 27,
            }}
          >
            <span>COACHNING</span>
            <span style={{ background: "#c8ff55", borderRadius: 999, height: 7, margin: "0 12px", width: 7 }} />
            <span>PROVISION</span>
            <span style={{ background: "#c8ff55", borderRadius: 999, height: 7, margin: "0 12px", width: 7 }} />
            <span>GEMENSKAP</span>
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            background: "#c8ff55",
            border: "3px solid #161522",
            borderRadius: 32,
            boxShadow: "10px 12px 0 #161522",
            display: "flex",
            height: 520,
            justifyContent: "center",
            margin: "auto 0 auto auto",
            overflow: "hidden",
            position: "relative",
            width: 395,
          }}
        >
          <div
            style={{
              background: "#fffdf7",
              border: "2px solid rgba(22,21,34,0.12)",
              borderRadius: 26,
              boxShadow: "0 10px 24px rgba(22,21,34,0.2)",
              display: "flex",
              height: 275,
              left: -80,
              overflow: "hidden",
              position: "absolute",
              top: 122,
              transform: "rotate(-7deg)",
              width: 330,
            }}
          >
            <img
              alt="Brandsläckare för hemmet"
              src={imageData(extinguisher)}
              style={{ height: "100%", objectFit: "contain", width: "100%" }}
            />
          </div>
          <div
            style={{
              background: "#fffdf7",
              border: "2px solid rgba(22,21,34,0.12)",
              borderRadius: 26,
              boxShadow: "0 10px 24px rgba(22,21,34,0.2)",
              display: "flex",
              height: 260,
              overflow: "hidden",
              position: "absolute",
              right: -110,
              top: 166,
              transform: "rotate(7deg)",
              width: 300,
            }}
          >
            <img
              alt="Brandvarnare för hemmet"
              src={imageData(alarm)}
              style={{ height: "100%", objectFit: "contain", width: "100%" }}
            />
          </div>
          <div
            style={{
              background: "#fffdf7",
              border: "2px solid rgba(22,21,34,0.12)",
              borderRadius: 30,
              boxShadow: "0 12px 26px rgba(22,21,34,0.25)",
              display: "flex",
              height: 345,
              left: 94,
              overflow: "hidden",
              position: "absolute",
              top: 73,
              width: 235,
            }}
          >
            <img
              alt="Brandfilt för hemmet"
              src={imageData(blanket)}
              style={{ height: "100%", objectFit: "contain", width: "100%" }}
            />
          </div>
          <div
            style={{
              background: "#161522",
              borderRadius: 999,
              bottom: 24,
              color: "#c8ff55",
              display: "flex",
              fontSize: 16,
              fontWeight: 900,
              letterSpacing: 2,
              padding: "12px 20px",
              position: "absolute",
            }}
          >
            <span>HEMMETS BRANDSKYDD</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
