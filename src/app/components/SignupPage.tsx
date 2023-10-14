import Image from "next/image";
import HeroMobile from "../../../public/images/illustration-sign-up-mobile.svg";
import HeroDesktop from "../../../public/images/illustration-sign-up-desktop.svg";
import Signup from "./Signup";

interface Props {
  onSuccess: (successState: boolean) => void;
  setEmail: (email: string) => void;
}
export default function SignupPage({ onSuccess, setEmail }: Props) {
  const Updates = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <section className="bg-neutral-white grid gap-11 md:grid-cols-2 md:gap-4 md:items-center pb-20 md:p-8 md:rounded-2xl">
      <Image src={HeroMobile} alt="" className="md:hidden w-full" />
      <div className="px-8 grid gap-5">
        <h1 className="text-5xl font-bold">Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list-outside list-image-[url('/images/icon-list.svg')] grid gap-3 ml-6">
          {Updates.map((update, index) => (
            <li key={index} className="pl-2">
              {update}
            </li>
          ))}
        </ul>
        <Signup setEmail={setEmail} onSuccess={onSuccess} />
      </div>
      <Image src={HeroDesktop} alt="" className="hidden md:block" />
    </section>
  );
}
