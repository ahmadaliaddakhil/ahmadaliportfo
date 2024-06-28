import ContainerAOS from "../commons/components/elements/ContainerAOS";
import Index from "./components/index";

export const metadata = {
  title: "About ",
  description: "A short story about Ali",
};

export default function About() {
  return (
    <ContainerAOS>
      <Index />
    </ContainerAOS>
  );
}
