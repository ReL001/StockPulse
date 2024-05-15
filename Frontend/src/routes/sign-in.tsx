import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <>
      <div className="flex justify-center items-center py-16">
        <SignedOut>
          <SignIn path="/sign-in" />
        </SignedOut>
      </div>
    </>
  );
}
