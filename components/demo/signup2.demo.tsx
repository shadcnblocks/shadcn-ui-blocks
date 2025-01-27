import { Signup2 } from "@/components/block/signup2";

const demoData = {
  heading: "Shadcnblocks.com",
  subheading: "Sign up for free.",
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
  },
  signupText: "Create an account",
  googleText: "Sign up with Google",
  loginText: "Already have an account?",
  loginUrl: "#",
};

function Signup2Demo() {
  return <Signup2 {...demoData} />;
}

export { Signup2Demo };
