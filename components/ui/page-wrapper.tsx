'use client'

interface Props {
  children: React.ReactNode;  // To allow wrapping with any content
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="sticky lg:block lg:fixed lg:top-16 lg:right-0 lg:w-[1000px] lg:h-full border-l-[1px] p-4 overflow-y-hidden">
      {children}
    </div>
  );
}

export default PageWrapper;