import Link from "next/link";
import NextLogo from "./Logo";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-8 text-left">
        <p className="text-sm font-bold text-left">The Ultimate AI Lesson Plan generator</p>
        <h1 className="text-4xl font-bold">Personalised Learning Tool</h1>

        <span className="text-md">
          Welcome to the Ultimate AI Lesson Plan generator. This tool is designed to help educators create personalized lesson plans for their students. With the power of AI, you can generate lesson plans tailored to each student's learning style and pace. This tool is easy to use and can save you time in lesson planning. Get started today and see the difference it can make in your teaching.
        </span>

        <Link href="/lesson_plan" className="w-32 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Get Started
        </Link>
      </div>

      <Image src="/teacher.jpg" width={500} height={500} 
        className="rounded-lg flex-1"
        alt="Teacher"
      />
    </div>
  );
}
