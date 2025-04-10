interface FormContainerProps {
  children: React.ReactNode
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="max-w-sm grow text-center">
      {children}
    </div>
  )
}