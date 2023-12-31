export interface FooterProps extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<FooterProps> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <p>United States</p>
    </footer>
  )
}

export default Footer
