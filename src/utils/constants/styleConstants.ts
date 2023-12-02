export const mq: {
  xs: Record<string, string>;
  sm: Record<string, string>;
  md: Record<string, string>;
  lg: Record<string, string>;
  xlg: Record<string, string>;
} = {
  xs: { min: '@media (min-width: 576px)', max: '@media (max-width: 576px)' },
  sm: { min: '@media (min-width: 768px)', max: '@media (max-width: 768px)' },
  md: { min: '@media (min-width: 991px)', max: '@media (max-width: 991px)' },
  lg: { min: '@media (min-width: 1200px)', max: '@media (max-width: 1200px)' },
  xlg: { min: '@media (min-width: 1440px)', max: '@media (max-width: 1440px)' } 
}