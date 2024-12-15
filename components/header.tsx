import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export const Header = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
