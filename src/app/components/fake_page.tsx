import Link from "next/link";
import { Button } from "~/components/ui/button";
import QuestionBlock from "./question_block";
import { ChevronRight } from "lucide-react";

export default function FakePage() {
  return (
    <>
      <QuestionBlock className="w-full justify-between">
        <div className="p-6">
          <div className="flex flex-row gap-2 font-light">
            {"Computer Systems"}
            <ChevronRight />
            {"Systems Software"}
            <ChevronRight />
            {"Memory and Process Management"}
          </div>
          <div className="mt-1 font-semibold">
            This Section is part of your assignment, Systems Software
          </div>
        </div>
        <img
          style={{
            clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="h-36 rounded-e-sm"
          src="https://app.senecalearning.com/static/media/afternoonMessage.017817dd2c814dc9c79fcfc2dc99fe48.svg"
          alt=""
        />
      </QuestionBlock>
      <QuestionBlock className="relative w-full flex-row p-6 md:p-12 md:ps-24">
        <div className="absolute right-0 top-0 rounded-md rounded-es-3xl border border-green-600 bg-green-900 p-4 text-xl font-bold text-green-600">
          <sup>1</sup>
          {" / "}
          <sub>1</sub>
        </div>
        <video
          src="https://media.giphy.com/media/Nx85vtTY70T3W/giphy.mp4"
          autoPlay
          controls={false}
          loop
          muted
          className="rounded-sm"
          style={{ maxWidth: "50%" }}
        ></video>
        <div className="p-12 text-sm font-light md:text-base">
          Modern operating systems allow multiple applications to run at once.
          This is known as{" "}
          <span className="font-normal text-green-400">multitasking</span>.
        </div>
      </QuestionBlock>
      <QuestionBlock className="w-full justify-between">
        <div className="p-6">
          <div className="mt-1 text-lg font-semibold">
            You{"'"}re on a roll! Can you finish it off?!
          </div>
        </div>
        <video
          style={{
            clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
          }}
          className="h-36 rounded-e-sm"
          autoPlay
          controls={false}
          loop
          muted
          src="https://media.giphy.com/media/3oz8xsRKgCWlzkqT7y/giphy.mp4"
        />
      </QuestionBlock>

      <Button
        onClick={() => {
          window.open(
            "https://app.senecalearning.com/classroom/course/a1ce4570-6e27-11e8-af4b-35cf52f905c2/section/07eb6b01-ae18-4176-9712-dd542e1bde50/session",
          );
        }}
        className="rounded-xl bg-blue-500 px-32 py-6 text-lg text-blue-950"
      >
        Continue
      </Button>
    </>
  );
}

export function FakeHeader() {
  return (
    <QuestionBlock className="w-full justify-between">
      <div className="p-6">
        <div className="flex flex-row gap-2 font-light">
          {"Computer Systems"}
          <ChevronRight />
          {"Systems Software"}
          <ChevronRight />
          {"Memory and Process Management"}
        </div>
        <div className="mt-1 font-semibold">
          This Section is part of your assignment, Systems Software
        </div>
      </div>
      <img
        style={{
          clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className="h-36 rounded-e-sm"
        src="https://app.senecalearning.com/static/media/afternoonMessage.017817dd2c814dc9c79fcfc2dc99fe48.svg"
        alt=""
      />
    </QuestionBlock>
  );
}
export function FakeMotivation() {
  return (
    <QuestionBlock className="w-full justify-between">
      <div className="p-6">
        <div className="mt-1 text-lg font-semibold">
          You{"'"}re on a roll! Can you finish it off?!
        </div>
      </div>
      <video
        style={{
          clipPath: "polygon(29% 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className="h-36 rounded-e-sm"
        autoPlay
        controls={false}
        loop
        muted
        src="https://media.giphy.com/media/3oz8xsRKgCWlzkqT7y/giphy.mp4"
      />
    </QuestionBlock>
  );
}

export function FakeContinue() {
  return (
    <Button
      onClick={() => {
        window.open(
          "https://app.senecalearning.com/classroom/course/a1ce4570-6e27-11e8-af4b-35cf52f905c2/section/07eb6b01-ae18-4176-9712-dd542e1bde50/session",
        );
      }}
      className="rounded-xl bg-blue-500 px-32 py-6 text-lg text-blue-950"
    >
      Continue
    </Button>
  );
}
