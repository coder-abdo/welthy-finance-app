import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex justify-center items-center h-screen">
      {children}
    </main>
  );
}
