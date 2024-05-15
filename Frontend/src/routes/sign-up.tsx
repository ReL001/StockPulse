import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <>
      <div className="flex justify-center items-center py-16">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
