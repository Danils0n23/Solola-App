import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="sm:w-full sm:max-w-md text-center">
        <Image
          alt="Logo"
          height={48}
          width={48}
          className="mx-auto"
          src="/img/solola.svg"
        />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
