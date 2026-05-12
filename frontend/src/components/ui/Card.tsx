import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  description?: string;
  variant?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  showEffect?: boolean;
  className?: string;
}

/**
 * Reusable Card component with glassmorphism and mesh gradient effects.
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  variant = 'vertical',
  children,
  action,
  icon,
  showEffect = true,
  className,
}) => {
  const isHorizontal = variant === 'horizontal';

  return (
    <div
      className={cn(
        'relative bg-white/60 dark:bg-neutral-950/40 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-xl overflow-hidden shadow-2 transition-all duration-300 hover:shadow-3 hover:scale-[1.01] hover:border-primary-400/50 max-w-[700px] group',
        isHorizontal ? 'flex flex-row' : 'flex flex-col',
        className
      )}
    >
      {/* Background Effect Layer (Bolitas) */}
      {showEffect && (
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] opacity-80 blur-[40px] rounded-full transition-all duration-700 group-hover:-top-[10%] group-hover:-right-[5%] group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle, var(--color-primary-300) 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] opacity-70 blur-[40px] rounded-full transition-all duration-700 group-hover:-bottom-[10%] group-hover:-left-[5%] group-hover:opacity-90"
            style={{
              background: 'radial-gradient(circle, var(--color-info-300) 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute top-[20%] left-[40%] w-[50%] h-[50%] opacity-40 blur-[50px] rounded-full transition-all duration-700 group-hover:scale-110"
            style={{
              background: 'radial-gradient(circle, var(--color-error-300) 0%, transparent 70%)'
            }}
          />
        </div>
      )}

      <div className={cn('p-6 flex flex-col gap-6 flex-1', isHorizontal && 'justify-center')}>
        <div className="flex justify-between items-start gap-4">
          <div className={cn('flex flex-1 gap-4', isHorizontal ? 'flex-row items-center' : 'flex-col')}>
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <div className="flex flex-col gap-1 flex-1">
              {title && (
                <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                  {title}
                </h3>
              )}
              {isHorizontal && description && (
                <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                  {description}
                </p>
              )}
            </div>
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>

        {!isHorizontal && description && (
          <p className="text-sm text-neutral-600 leading-relaxed font-medium">
            {description}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};
