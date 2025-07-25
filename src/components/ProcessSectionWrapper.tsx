// ProcessSectionWrapper.tsx
export default function ProcessWrapper({ children }: { children: React.ReactNode }) {
    return (
      <section
        id="process"
        className="
          relative bg-black text-white py-24
          overflow-hidden
          before:content-[''] before:absolute before:inset-0
          before:hidden lg:before:block
          before:bg-[url('/img/process-strip.png')]
          before:bg-cover before:bg-center
          before:skew-y-[-4deg]
        "
      >
        <div className="relative z-10 container mx-auto px-6">
          {children}  {/* <-- nasz ProcessStepper ze statycznymi SVG */}
        </div>
      </section>
    );
  }
  