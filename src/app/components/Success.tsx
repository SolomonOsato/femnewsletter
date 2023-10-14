import Image from "next/image";
import IconSuccess from "../../../public/images/icon-success.svg";
import { Button } from "@/components/ui/button";

interface Props {
  email: string;
  onSuccess: (successState: boolean) => void;
}
export default function Success({ email, onSuccess }: Props) {
  return (
    <section className="bg-neutral-white grid gap-4 md:gap-8 px-8 pb-8 pt-32 md:p-16 md:rounded-2xl md:max-w-xl">
      <Image src={IconSuccess} alt="" />
      <h1 className="text-6xl md:text-7xl font-bold text-neutral-charcoal">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>. Please
        click open it and click the button inside to confirm your subscription
      </p>
      <Button
        onClick={() => onSuccess(false)}
        type="button"
        className="py-7 font-bold bg-neutral-slate text-base hover:shadow-primary-tomato hover:shadow-xl hover:bg-gradient-to-r hover:from-rose-500 hover:from-45% hover:to-amber-500 fixed right-8 left-8 bottom-8 md:static"
      >
        Dismiss Message
      </Button>
    </section>
  );
}
