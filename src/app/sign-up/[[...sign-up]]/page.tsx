import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="auth-container">
      <SignUp path="/sign-up" />;
    </div>
  )

}