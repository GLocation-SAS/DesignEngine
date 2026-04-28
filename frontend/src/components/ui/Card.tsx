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
        'relative bg-neutral-100/50 backdrop-blur-md border border-neutral-200 rounded-xl overflow-hidden shadow-1 transition-all duration-300 hover:shadow-2 hover:scale-102 hover:border-primary-300 max-w-[700px]',
        isHorizontal ? 'flex flex-row' : 'flex flex-col',
        className
      )}
    >
      {/* Background Effect Layer (Bolitas) */}
      {showEffect && (
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] opacity-40 blur-[40px] rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--color-primary-400) 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] opacity-30 blur-[40px] rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--color-info-700) 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute top-[20%] left-[40%] w-[50%] h-[50%] opacity-20 blur-[50px] rounded-full"
            style={{
              background: 'radial-gradient(circle, var(--color-error-500) 0%, transparent 70%)'
            }}
          />
        </div>
      )}

      <div className={cn('p-4 flex flex-col gap-4 flex-1', isHorizontal && 'justify-center')}>
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-4 flex-1">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            {title && (
              <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                {title}
              </h3>
            )}
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>

        {description && (
          <p className="text-sm text-neutral-600 leading-relaxed font-medium">
            {description}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};
