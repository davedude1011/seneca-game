"use client";

import { useEffect, useState } from "react";
import QuestionBlock from "../question_block";
import { Button } from "~/components/ui/button";
import { FakeHeader } from "../fake_page";

export default function SnakeBoardSolo() {
  const board_dimensions: [number, number] = [100, 50];
  function generate_blank_board(width: number, height: number): string[][] {
    const board: string[][] = [];
    for (let i = 0; i < height; i++) {
      const line = [];
      for (let j = 0; j < width; j++) {
        line.push("");
      }
      board.push(line);
    }
    return board;
  }

  const [board, set_board] = useState<string[][]>(
    generate_blank_board(board_dimensions[0], board_dimensions[1]),
  );
  const [direction, set_direction] = useState<"up" | "down" | "left" | "right">(
    "right",
  );
  const [history, set_history] = useState<[number, number][]>([[0, 0]]);

  function generate_random_inactive_coord() {
    if (history.length < board_dimensions[0] * board_dimensions[1]) {
      while (1) {
        const random_coord: [number, number] = [
          Math.floor(Math.random() * board_dimensions[0]),
          Math.floor(Math.random() * board_dimensions[1]),
        ];
        if (!history.includes(random_coord)) {
          return random_coord;
        }
      }
    }
  }

  const [food_coord, set_food_coord] = useState(
    generate_random_inactive_coord(),
  );

  const [is_edge_loop, set_is_edge_loop] = useState(false);
  const [is_playing, set_is_playing] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function move_snake(direction_overide?: "up" | "down" | "left" | "right") {
    function end_game() {
      set_is_playing(false);
      setTimeout(() => {
        set_history([[0, 0]]);
        set_direction("right");
        set_board(
          generate_blank_board(board_dimensions[0], board_dimensions[1]),
        );
        set_food_coord(generate_random_inactive_coord());
      }, 0);
    }
    const new_board = generate_blank_board(
      board_dimensions[0],
      board_dimensions[1],
    );

    const current_position = history[history.length - 1];
    if (current_position) {
      const new_position: [number, number] = [
        (direction_overide ?? direction) == "up"
          ? current_position[0] - 1
          : (direction_overide ?? direction) == "down"
            ? current_position[0] + 1
            : current_position[0],
        (direction_overide ?? direction) == "left"
          ? current_position[1] - 1
          : (direction_overide ?? direction) == "right"
            ? current_position[1] + 1
            : current_position[1],
      ];
      let is_break = false;
      if (new_position[0] < 0) {
        if (is_edge_loop) {
          new_position[0] = board_dimensions[1] - 1;
        } else {
          end_game();
          is_break = true;
        }
      } else if (new_position[0] >= board_dimensions[1]) {
        if (is_edge_loop) {
          new_position[0] = 0;
        } else {
          end_game();
          is_break = true;
        }
      }
      if (new_position[1] < 0) {
        if (is_edge_loop) {
          new_position[1] = board_dimensions[0] - 1;
        } else {
          end_game();
          is_break = true;
        }
      } else if (new_position[1] >= board_dimensions[0]) {
        if (is_edge_loop) {
          new_position[1] = 0;
        } else {
          end_game();
          is_break = true;
        }
      }

      if (
        !is_break &&
        history.some(
          (coord) =>
            coord[0] === new_position[0] && coord[1] === new_position[1],
        )
      ) {
        end_game();
        is_break = true;
      }

      if (!is_break) {
        let kill_tail = true;
        if (
          // @ts-expect-error umm
          new_position[0] == food_coord[1] &&
          // @ts-expect-error umm
          new_position[1] == food_coord[0]
        ) {
          set_food_coord(generate_random_inactive_coord());
          kill_tail = false;
        }

        const new_history: [number, number][] = [];
        for (let i = kill_tail ? 1 : 0; i < history.length; i++) {
          // @ts-expect-error it works
          new_history.push(history[i]);
        }

        new_history.push(new_position);
        for (const cell_coordinate of new_history) {
          // @ts-expect-error it works
          new_board[cell_coordinate[0]][cell_coordinate[1]] = "#";
        }

        set_history(new_history);
        set_board(new_board);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (is_playing) {
        move_snake();
      }
    }, 50);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [direction, history, is_playing, board, food_coord, move_snake]);

  useEffect(() => {
    const handleKeyDown = (e: { key: unknown }) => {
      if (is_playing) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        switch (e.key) {
          case "w":
            if (direction !== "up" && direction !== "down") {
              set_direction("up");
              move_snake("up");
            }
            break;
          case "a":
            if (direction !== "left" && direction !== "right") {
              set_direction("left");
              move_snake("left");
            }
            break;
          case "s":
            if (direction !== "up" && direction !== "down") {
              set_direction("down");
              move_snake("down");
            }
            break;
          case "d":
            if (direction !== "left" && direction !== "right") {
              set_direction("right");
              move_snake("right");
            }
            break;
        }
      }
    };

    // Add the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [is_playing, direction, set_direction, move_snake]);

  return (
    <>
      <FakeHeader />
      <QuestionBlock className="w-full p-4">
        <div>Score: {history.length - 1}</div>
      </QuestionBlock>
      <QuestionBlock>
        <div className="flex flex-col border">
          {is_playing ? (
            <>
              {board.map((line, index_y) => (
                <div key={index_y} className="flex flex-row">
                  {line.map((cell, index_x) => (
                    <div key={index_x} className="h-2 w-2 text-xs">
                      {cell.length == 0 &&
                      // @ts-expect-error umm
                      index_x == food_coord[0] &&
                      // @ts-expect-error umm
                      index_y == food_coord[1]
                        ? "0"
                        : cell}
                    </div>
                  ))}
                </div>
              ))}
            </>
          ) : (
            <Button variant={"link"} onClick={() => set_is_playing(true)}>
              Start
            </Button>
          )}
        </div>
      </QuestionBlock>
    </>
  );
}
