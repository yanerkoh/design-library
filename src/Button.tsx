import { styled, GetProps } from 'tamagui'
import { Button as TamaguiButton } from '@tamagui/button'
import { isValidElement } from 'react'

export const ButtonDXPlus = styled(TamaguiButton, {
  name: 'ButtonDXPlus',
  borderRadius: 8,
  fontWeight: '600',
  cursor: 'pointer',
  outlineOffset: 0,
  userSelect: 'none',

  hoverStyle: {
    transform: 'translateY(-1px)',
    shadowColor: 'rgba(0,0,0,0.14)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  pressStyle: {
    transform: 'none',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '#ffc23e',
        color: '#0c0d0d',
        borderWidth: 1,
        borderTopColor: '#ffc23e',
        borderRightColor: '#ffc23e',
        borderBottomColor: '#ffc23e',
        borderLeftColor: '#ffc23e',

        hoverStyle: {
          backgroundColor: '#ffc23e',
          borderTopColor: '#ffc23e',
          borderRightColor: '#ffc23e',
          borderBottomColor: '#ffc23e',
          borderLeftColor: '#ffc23e',
        },

        pressStyle: {
          backgroundColor: '#ffc23e',
          borderTopColor: '#ffc23e',
          borderRightColor: '#ffc23e',
          borderBottomColor: '#ffc23e',
          borderLeftColor: '#ffc23e',
        },
      },

      secondary: {
        backgroundColor: '#ffffff',
        color: '#c75000',
        borderWidth: 1,
        borderTopColor: '#c75000',
        borderRightColor: '#c75000',
        borderBottomColor: '#c75000',
        borderLeftColor: '#c75000',

        hoverStyle: {
          backgroundColor: '#ffffff',
          color: '#c75000',
          borderTopColor: '#c75000',
          borderRightColor: '#c75000',
          borderBottomColor: '#c75000',
          borderLeftColor: '#c75000',
        },

        pressStyle: {
          backgroundColor: '#ffffff',
          color: '#c75000',
          borderTopColor: '#c75000',
          borderRightColor: '#c75000',
          borderBottomColor: '#c75000',
          borderLeftColor: '#c75000',
        },
      },
    },

    size: {
      s: {
        paddingVertical: 3,
        paddingHorizontal: 7,
        fontSize: '$3',
      },
      m: {
        paddingVertical: 7,
        paddingHorizontal: 23,
        fontSize: '$4',
      },
      l: {
        paddingVertical: 10,
        paddingHorizontal: 23,
        fontSize: '$5',
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        backgroundColor: '#d3d3d3',
        color: '#ffffff',
        borderTopColor: '#d3d3d3',
        borderRightColor: '#d3d3d3',
        borderBottomColor: '#d3d3d3',
        borderLeftColor: '#d3d3d3',

        hoverStyle: {
          transform: 'none',
          shadowColor: 'transparent',
          backgroundColor: '#d3d3d3',
        },
      },
    },

    status: {
      default: {},

      success: {
        backgroundColor: '#008700',
        color: '#ffffff',
        borderTopColor: '#008700',
        borderRightColor: '#008700',
        borderBottomColor: '#008700',
        borderLeftColor: '#008700',

        hoverStyle: {
          backgroundColor: '#007200',
          borderTopColor: '#007200',
          borderRightColor: '#007200',
          borderBottomColor: '#007200',
          borderLeftColor: '#007200',
        },

        pressStyle: {
          backgroundColor: '#007200',
          borderTopColor: '#007200',
          borderRightColor: '#007200',
          borderBottomColor: '#007200',
          borderLeftColor: '#007200',
        },
      },

      error: {
        backgroundColor: '#cc3123',
        color: '#ffffff',
        borderTopColor: '#cc3123',
        borderRightColor: '#cc3123',
        borderBottomColor: '#cc3123',
        borderLeftColor: '#cc3123',

        hoverStyle: {
          backgroundColor: '#b02215',
          borderTopColor: '#b02215',
          borderRightColor: '#b02215',
          borderBottomColor: '#b02215',
          borderLeftColor: '#b02215',
        },

        pressStyle: {
          backgroundColor: '#b02215',
          borderTopColor: '#b02215',
          borderRightColor: '#b02215',
          borderBottomColor: '#b02215',
          borderLeftColor: '#b02215',
        },
      },

      warning: {
        backgroundColor: '#c75000',
        color: '#ffffff',
        borderTopColor: '#c75000',
        borderRightColor: '#c75000',
        borderBottomColor: '#c75000',
        borderLeftColor: '#c75000',

        hoverStyle: {
          backgroundColor: '#c75000',
          borderTopColor: '#c75000',
          borderRightColor: '#c75000',
          borderBottomColor: '#c75000',
          borderLeftColor: '#c75000',
        },

        pressStyle: {
          backgroundColor: '#c75000',
          borderTopColor: '#c75000',
          borderRightColor: '#c75000',
          borderBottomColor: '#c75000',
          borderLeftColor: '#c75000',
        },
      },
    },

    iconOnly: {
      true: {
        paddingVertical: 7,
        paddingHorizontal: 7,
      },
    },
  } as const,
})

type BaseButtonProps = GetProps<typeof ButtonDXPlus>

export type ButtonProps = Omit<BaseButtonProps, 'variant' | 'size' | 'status' | 'iconOnly'> & {
  variant?: 'primary' | 'secondary'
  size?: 's' | 'm' | 'l'
  status?: 'default' | 'success' | 'error' | 'warning'
  icon?: React.ReactNode
  onPress?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'm',
  status = 'default',
  disabled = false,
  icon,
  onPress,
  ...props
}: ButtonProps) {
  const isIconOnly =
    (icon && !children) || (isValidElement(children) && typeof children.type !== 'string')

  return (
    <ButtonDXPlus
      variant={variant}
      size={size}
      status={status}
      disabled={disabled}
      iconOnly={isIconOnly}
      icon={icon}
      onPress={onPress}
      {...props}
    >
      {children}
    </ButtonDXPlus>
  )
}

export default Button
