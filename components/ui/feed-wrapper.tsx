type Props = {
    children: React.ReactNode;
}
const FeedWrapper = ({children}: Props) => {
  return (
    <div className="max-h-[500px] lg:max-h-[1000px] flex flex-col max-w-screen-sm flex-1 relative top-0 pb-10 w-full overflow-y-clip custom-scrollbar">
        {children}
    </div>
  )
}

export default FeedWrapper