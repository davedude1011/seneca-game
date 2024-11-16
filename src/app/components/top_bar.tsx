import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Progress } from "~/components/ui/progress";

export default function TopBar({
  is_hidden,
  set_is_hidden,
}: {
  is_hidden: boolean;
  set_is_hidden: (is_hidden: boolean) => void;
}) {
  return (
    <div className="bg-card flex h-12 w-full flex-row items-center gap-6 border-l border-l-gray-800 px-6">
      <IoMdMenu className="cursor-pointer" size={20} />
      <Progress className="bg-card-foreground h-2" value={20} />
      {is_hidden ? (
        <FaRegEyeSlash
          className="cursor-pointer"
          size={20}
          onClick={() => set_is_hidden(!is_hidden)}
        />
      ) : (
        <FaRegEye
          className="cursor-pointer"
          size={20}
          onClick={() => set_is_hidden(!is_hidden)}
        />
      )}
    </div>
  );
}
