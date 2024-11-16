"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";
import { BsChat } from "react-icons/bs";
import { GoHome, GoPlay } from "react-icons/go";
import { IoPlayOutline } from "react-icons/io5";
import { PiPencilLine } from "react-icons/pi";
import { RxDoubleArrowUp } from "react-icons/rx";
import { TbBooks } from "react-icons/tb";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import SnakeBoardSolo from "./games/snake";

export default function SideBar({
  is_hidden,
  points,
  set_active_element,
}: {
  is_hidden: boolean;
  points: number;
  set_active_element: (active_element: ReactNode | null) => void;
}) {
  const [selected_panel, set_selected_panel] = useState("Games");

  const assignment_data = {
    assignment_title: "Networks",
    due_in_days: 4,
    due_in_time: "18:00",

    assignment_items: [
      {
        item_id: "1.3.1",
        item_title: "Benefit of Networks",
        item_percent: 100,
      },
      {
        item_id: "1.3.2",
        item_title: "Network Performance",
        item_percent: 100,
      },
      {
        item_id: "1.3.3",
        item_title: "Networks: How Do Packets Get Routed?",
        item_percent: 100,
      },
      {
        item_id: "1.3.4",
        item_title: "Types of Networks",
        item_percent: 100,
      },
      {
        item_id: "1.3.5",
        item_title: "Client-Server Model",
        item_percent: 89,
      },
      {
        item_id: "1.3.6",
        item_title: "Pros & Cons of Client-Server Model",
        item_percent: 83,
      },
      {
        item_id: "1.3.7",
        item_title: "Peer-to-Peer Model",
        item_percent: 100,
      },
      {
        item_id: "1.3.8",
        item_title: "Pros & Cons of Peer-to-Peer Model",
        item_percent: 86,
      },
      {
        item_id: "1.3.9",
        item_title: "Network Hardware",
        item_percent: 100,
      },
      {
        item_id: "1.3.10",
        item_title: "Transmission Media",
        item_percent: 67,
      },
      {
        item_id: "1.3.11",
        item_title: "What is the Internet?",
        item_percent: 100,
      },
      {
        item_id: "1.3.12",
        item_title: "URLs",
        item_percent: 100,
      },
      {
        item_id: "1.3.13",
        item_title: "DNS and Web Hosting",
        item_percent: 100,
      },
      {
        item_id: "1.3.14",
        item_title: "The Cloud",
        item_percent: 100,
      },
      {
        item_id: "1.3.15",
        item_title: "Pros & Cons of the Cloud",
        item_percent: 67,
      },
      {
        item_id: "1.3.16",
        item_title: "Exam-Style Questions - Networking Models",
        item_percent: 100,
      },
      {
        item_id: "1.3.17",
        item_title: "Topology",
        item_percent: 100,
      },
      {
        item_id: "1.3.18",
        item_title: "WiFi",
        item_percent: 100,
      },
      {
        item_id: "1.3.19",
        item_title: "WiFi Frequency and Channels",
        item_percent: 67,
      },
      {
        item_id: "1.3.20",
        item_title: "WiFi Encryption",
        item_percent: 100,
      },
      {
        item_id: "1.3.21",
        item_title: "IP Addresses",
        item_percent: 92,
      },
      {
        item_id: "1.3.22",
        item_title: "MAC Addresses",
        item_percent: 67,
      },
      {
        item_id: "1.3.23",
        item_title: "Network Protocols",
        item_percent: 67,
      },
      {
        item_id: "1.3.24",
        item_title: "Transmission Protocols",
        item_percent: 100,
      },
      {
        item_id: "1.3.25",
        item_title: "Appliction Protocols",
        item_percent: 71,
      },
      {
        item_id: "1.3.26",
        item_title: "Layers",
        item_percent: -1,
      },
      {
        item_id: "1.3.27",
        item_title: "Benefit of Networks",
        item_percent: -1,
      },
      {
        item_id: "1.3.28",
        item_title: "Benefit of Networks",
        item_percent: -1,
      },
    ],
  };
  const completion_percent = () => {
    let attempted = 0;
    for (const assignment_item of assignment_data.assignment_items) {
      if (assignment_item.item_percent > 0) {
        attempted++;
      }
    }

    return (attempted / assignment_data.assignment_items.length) * 100;
  };
  const [assignment_toggle, set_assignment_toggle] = useState(true);

  return (
    <div className="h-screen w-80 overflow-auto bg-card">
      <div className="flex h-12 flex-row justify-between p-[0.6rem] px-4">
        <img
          onClick={() => {
            window.open("https://app.senecalearning.com/");
          }}
          className=""
          src="logo.svg"
          alt="Seneca"
        />
        <GoHome
          onClick={() => {
            window.open("https://app.senecalearning.com/");
          }}
          className="me-4 h-full cursor-pointer fill-primary transition-colors hover:fill-primary-foreground"
          size={20}
        />
      </div>

      <div className="mt-2 flex h-fit w-full flex-col px-4">
        {[
          {
            icon: <IoPlayOutline size={20} />,
            text: "Overview",
            is_new: false,
            notification_count: 0,
          },
          {
            icon: <PiPencilLine size={20} />,
            text: "Exam Prep",
            is_new: true,
            notification_count: 0,
          },
          {
            icon: <TbBooks size={20} />,
            text: is_hidden ? "Assignments" : "Games",
            is_new: false,
            notification_count: is_hidden ? 2 : 0,
          },
          {
            icon: <BsChat size={20} />,
            text: "Ask Amelia",
            is_new: false,
            notification_count: 0,
          },
        ].map((panel_data, index) => (
          <div
            key={index}
            className={`${selected_panel == panel_data.text ? "bg-[#001c3b] hover:bg-[#004787]" : "hover:bg-card-foreground"} flex cursor-pointer flex-row items-center gap-2 rounded-md p-4`}
            onClick={() => set_selected_panel(panel_data.text)}
          >
            {panel_data.icon}
            <div>{panel_data.text}</div>
            {panel_data.is_new && (
              <div className="rounded-full bg-green-800 px-2 text-sm">New</div>
            )}
            {panel_data.notification_count > 0 && (
              <div className="rounded-full bg-yellow-800 px-2 text-sm">
                {panel_data.notification_count}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-row items-center justify-center gap-2 px-4">
        <hr className="flex-grow border-[#3d4759]" />
        <RxDoubleArrowUp className="text-muted-foreground" />
        <hr className="flex-grow border-[#3d4759]" />
      </div>

      <div className="mx-2 mt-6 overflow-auto rounded-sm border-[1px] border-gray-600 bg-card-foreground p-4">
        {is_hidden ? (
          <>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl font-semibold">Assignments</div>
              {/*
              <div className="h-fit rounded-full bg-primary-foreground px-2 text-sm text-black">
                {assignment_data.assignment_items.length} sections
              </div>
              */}
            </div>
            <div
              className="mt-4 flex cursor-pointer flex-row items-center justify-between"
              onClick={() => set_assignment_toggle(!assignment_toggle)}
            >
              <div className="font-semibold">
                {assignment_data.assignment_title}
              </div>
              {assignment_toggle ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>
            {assignment_toggle && (
              <>
                <div className="mt-2 text-sm">
                  Due: in {assignment_data.due_in_days} days, at{" "}
                  {assignment_data.due_in_time}
                </div>
                <Progress
                  value={completion_percent()}
                  className="mb-4 mt-2 h-1 bg-gray-600"
                />

                {assignment_data.assignment_items.map(
                  (assignment_item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        window.open("https://app.senecalearning.com/");
                      }}
                      className="my-2 flex cursor-pointer flex-row justify-between"
                    >
                      <div className="flex flex-row gap-2">
                        <div className="text-sm">{assignment_item.item_id}</div>
                        <div className="text-sm">
                          {assignment_item.item_title}
                        </div>
                      </div>
                      <div className="text-sm">
                        {assignment_item.item_percent > 0
                          ? `${assignment_item.item_percent}%`
                          : "-"}
                      </div>
                    </div>
                  ),
                )}
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl font-semibold">Games</div>
              <div className="h-fit rounded-full bg-primary-foreground px-2 text-sm text-black">
                {points} points
              </div>
            </div>

            <div className="flex flex-col">
              <Button
                variant={"link"}
                className="w-fit text-inherit"
                onClick={() => {
                  set_active_element(<SnakeBoardSolo></SnakeBoardSolo>);
                }}
              >
                Snake
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
