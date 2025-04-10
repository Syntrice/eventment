interface CenteredContainerProps {
  children: React.ReactNode
}

export default function CenteredContainer({ children }: CenteredContainerProps) {
  return (
    <div className="p-5 flex justify-center py-20 max-md:py-10">
      {children}
    </div>
  )
}