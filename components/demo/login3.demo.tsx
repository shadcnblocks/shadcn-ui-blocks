import { Login3 } from "@/components/block/login3";

const demoData = {
  heading: "Shadcnblocks.com",
  subheading: "Welcome back",
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
  },
  loginText: "Log in",
  googleText: "Log in with Google",
  signupText: "Don't have an account?",
  signupUrl: "#",
};

function Login3Demo() {
  return <Login3 {...demoData} />;
}

export { Login3Demo };
