import { WavyBackground } from "@/components/ui/wavy-background";

export default function Header() {
  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <p className="text-4xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center">
      Solidiscan
      </p>
    </WavyBackground>
  );
}
