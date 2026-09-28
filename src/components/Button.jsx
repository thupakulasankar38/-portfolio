import { FiArrowUpRight } from 'react-icons/fi'

const variants = {
  primary: 'bg-primary text-secondary hover:bg-foreground',
  outline: 'border border-line text-foreground hover:border-foreground',
  ghost: 'text-foreground hover:text-accent',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  showArrow = true,
  children,
  className = '',
  ...props
}) {
  return (
    <Tag
      data-cursor="hover"
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && (
        <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
          <FiArrowUpRight
            size={15}
            className="absolute transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
          />
          <FiArrowUpRight
            size={15}
            className="absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </span>
      )}
    </Tag>
  )
}
