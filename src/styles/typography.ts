export const typography = {
  h1: "text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.1]",
  h2: "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
  h3: "text-xl font-semibold tracking-tight sm:text-2xl",
  subtitle: "text-xl text-muted-foreground sm:text-2xl",
  body: {
    lg: "text-lg text-muted-foreground",
    base: "text-base text-muted-foreground",
    sm: "text-sm text-muted-foreground",
  },
  link: "text-sm font-medium hover:text-primary transition-colors",
} as const; 