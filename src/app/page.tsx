"use client";

import { ReactNode, useEffect, useState } from "react";
import SideBar from "./components/side_bar";
import TopBar from "./components/top_bar";
import FakePage from "./components/fake_page";

export default function Page() {
  const [is_hidden, set_is_hidden] = useState(true);
  const [points, set_points] = useState(0);

  const [active_element, set_active_element] = useState<ReactNode | null>(null);

  useEffect(() => {
    // Define the event handler function
    const handleKeyDown = (event: { key: string }) => {
      if (event.key == "#" || event.key == "/") {
        set_is_hidden(!is_hidden);
      }
    };

    // Add event listener on component mount
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [is_hidden]);

  return (
    <div className="flex flex-row">
      <SideBar {...{ is_hidden, points, set_active_element }} />
      <div className="flex flex-grow flex-col">
        <TopBar {...{ is_hidden, set_is_hidden }} />
        <div className="flex flex-grow flex-col items-center gap-6 p-12">
          {is_hidden || !active_element ? (
            <>
              <FakePage />
            </>
          ) : (
            <>{active_element}</>
          )}
        </div>
      </div>
    </div>
  );
}
