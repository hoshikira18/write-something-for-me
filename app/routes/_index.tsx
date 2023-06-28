import type { V2_MetaFunction } from "@remix-run/node";
import bgImage from "../bg1.jpg";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ship tool" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" min-h-screen"
    >
      <h1 className="text-red-900 text-3xl text-center font-bold py-4">
        SHIP TOOL
      </h1>
      <div className="p-4 flex flex-col">
        <div className="input w-[100%]">
          <h3>Địa điểm:</h3>
          <input
            type="text"
            className="p-2 rounded w-full"
            placeholder="Bạn đi ship ở đâu?"
          />
        </div>
      </div>
    </div>
  );
}
