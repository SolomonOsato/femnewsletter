import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email({
    message: "Valid email required",
  }),
});

interface Props {
  onSuccess: (successState: boolean) => void;
  setEmail: (email: string) => void;
}

export default function Signup({ onSuccess, setEmail }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEmail(values.email);
    onSuccess(true);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="font-bold">Email address</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  placeholder="email@company.com"
                  {...field}
                  className="p-6"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="py-7 font-bold bg-neutral-slate text-base hover:shadow-primary-tomato hover:shadow-xl hover:bg-gradient-to-r hover:from-rose-500 hover:from-45% hover:to-amber-500"
        >
          Subscribe to monthly newsletter
        </Button>
      </form>
    </Form>
  );
}
