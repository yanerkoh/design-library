import { styled, GetProps } from 'tamagui'
import { Button as TamaguiButton } from '@tamagui/button'
import { isValidElement } from 'react'

export const ButtonDXPlus = styled(TamaguiButton, {
  name: 'ButtonDXPlus',
  borderRadius: '$3',
  fontWeight: '600',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$yellow9',
        color: '$gray12',
        borderWidth: 1,
        borderTopColor: '$yellow9',
        borderRightColor: '$yellow9',
        borderBottomColor: '$yellow9',
        borderLeftColor: '$yellow9',

        hoverStyle: {
          backgroundColor: '$yellow10',
          transform: 'translateY(-1px)',
        },

        pressStyle: {
          backgroundColor: '$yellow8',
          transform: 'none',
        },
      },

      secondary: {
        backgroundColor: '$background',
        color: '$orange9',
        borderWidth: 1,
        borderTopColor: '$orange9',
        borderRightColor: '$orange9',
        borderBottomColor: '$orange9',
        borderLeftColor: '$orange9',

        hoverStyle: {
          backgroundColor: '$orange2',
          transform: 'translateY(-1px)',
        },

        pressStyle: {
          backgroundColor: '$orange3',
          transform: 'none',
        },
      },
    },

    size: {
      s: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
        fontSize: '$3',
      },
      m: {
        paddingVertical: '$3',
        paddingHorizontal: '$4',
        fontSize: '$4',
      },
      l: {
        paddingVertical: '$4',
        paddingHorizontal: '$5',
        fontSize: '$5',
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
        backgroundColor: '$gray5',
        color: '$gray10',
        borderTopColor: '$gray5',
        borderRightColor: '$gray5',
        borderBottomColor: '$gray5',
        borderLeftColor: '$gray5',

        hoverStyle: {
          transform: 'none',
          backgroundColor: '$gray5',
        },

        pressStyle: {
          transform: 'none',
          backgroundColor: '$gray5',
        },
      },
    },

    status: {
      default: {},

      success: {
        backgroundColor: '$green9',
        color: 'white',
        borderTopColor: '$green9',
        borderRightColor: '$green9',
        borderBottomColor: '$green9',
        borderLeftColor: '$green9',

        hoverStyle: {
          backgroundColor: '$green10',
        },

        pressStyle: {
          backgroundColor: '$green8',
        },
      },

      error: {
        backgroundColor: '$red9',
        color: 'white',
        borderTopColor: '$red9',
        borderRightColor: '$red9',
        borderBottomColor: '$red9',
        borderLeftColor: '$red9',

        hoverStyle: {
          backgroundColor: '$red10',
        },

        pressStyle: {
          backgroundColor: '$red8',
        },
      },

      warning: {
        backgroundColor: '$orange9',
        color: 'white',
        borderTopColor: '$orange9',
        borderRightColor: '$orange9',
        borderBottomColor: '$orange9',
        borderLeftColor: '$orange9',

        hoverStyle: {
          backgroundColor: '$orange10',
        },

        pressStyle: {
          backgroundColor: '$orange8',
        },
      },
    },

    iconOnly: {
      true: {
        padding: '$3',
        aspectRatio: 1,
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
