import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="auth-container">
      <SignIn path="/sign-in" />
    </div>
  );
}