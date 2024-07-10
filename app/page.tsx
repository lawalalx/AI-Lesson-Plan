import Hero from "@/components/Hero";

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Hero />
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by Softmax Tech Solutions{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Softmax Tech
          </a>
        </p>
      </footer>
    </div>
  );
}
