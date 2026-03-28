// ProcessSectionWrapper.tsx
export default function ProcessWrapper({ children }: { children: React.ReactNode }) {
    return (
      <section
        id="process"
        className="relative bg-black text-white py-24 overflow-visible"
      >
        <div className="relative z-10 container mx-auto px-6">
          {children}  {/* <-- nasz ProcessStepper ze statycznymi SVG */}
        </div>
      </section>
    );
  }
  