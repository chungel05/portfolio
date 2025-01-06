"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { messageSchema } from "@/lib/schema";
import { InsertMessage } from "./server/(message)/action";

export default function ContactForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof messageSchema>) {
        const result = await InsertMessage(values);
        if (result.error) {
            toast({
                title: "Oh! Something went wrong.",
                description: result.error,
                className: "dark",
            });
        } else {
            toast({
                description: "Thank you for your Message!",
                className: "dark",
            });
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full px-4"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Your name"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Email"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Message to ME"
                                    className="resize-y"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-row items-center justify-between w-full">
                    <Button
                        className="hover:bg-white hover:text-black bg-black border-black border-2"
                        type="submit"
                    >
                        Get In Touch
                    </Button>
                    <div className="space-x-2 md:hidden">
                        <Link
                            href="mailto:chungzz0301@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="hover:bg-white hover:text-black bg-black border-black border-2"
                                variant="default"
                                size="icon"
                                aria-label="Mail"
                            >
                                <Mail className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/chungzz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="hover:bg-white hover:text-black bg-black border-black border-2"
                                variant="default"
                                size="icon"
                                aria-label="Linkedin"
                            >
                                <SiLinkedin className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    );
}
