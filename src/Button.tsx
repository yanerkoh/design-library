import { styled, Text, GetProps } from '@tamagui/core'
import { Button as TamaguiButton } from '@tamagui/button'
import { isValidElement } from 'react'

const COLORS = {
  primary: '#ffc23e',
  primaryHover: '#ffc23e',
  primaryActive: '#ffc23e',
  primaryText: '#0c0d0d',
  primarySuccess: '#008700',
  primarySuccessHover: '#007200',
  primaryError: '#cc3123',
  primaryErrorHover: '#b02215',
  primaryWarning: '#c75000',
  primaryDisabled: '#d3d3d3',
  secondary: '#fff',
  secondaryBorder: '#c75000',
  secondaryText: '#c75000',
  secondaryDisabled: '#d3d3d3',
  shadow: '0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)',
  disabledShadow: 'none',
}

export const ButtonDXPlus = styled(TamaguiButton, {
  name: 'ButtonDXPlus',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outlineOffset: 0,
  userSelect: 'none',
  transitionProperty: 'box-shadow, transform',
  transitionDuration: '.175s',
  transitionTimingFunction: 'ease',

  variants: {
    variant: {
      primary: {
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderColor: COLORS.primary,
      },
      secondary: {
        backgroundColor: COLORS.secondary,
        borderWidth: 1,
        borderColor: COLORS.secondaryBorder,
      },
    },
    size: {
      s: { paddingVertical: 4, paddingHorizontal: 5 },
      m: { paddingVertical: 8, paddingHorizontal: 16 },
      l: { paddingVertical: 12, paddingHorizontal: 20 },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        boxShadow: COLORS.disabledShadow,
        backgroundColor: COLORS.primaryDisabled,
        color: '#fff',
        borderColor: COLORS.primaryDisabled,
      },
    },
    status: {
      default: {},
      success: {},
      error: {},
      warning: {},
    },
    iconOnly: {
      true: {
        padding: 8,
        width: 44,
        height: 44,
        aspectRatio: 1,
      },
    },
  },

  hoverStyle: {
    transform: 'translateY(-0.0625rem)',
    boxShadow: COLORS.shadow,
  },
  pressStyle: {
    transform: 'none',
    boxShadow: 'none',
  },
})

type BaseButtonProps = GetProps<typeof ButtonDXPlus>

export type ButtonProps = Omit<BaseButtonProps, 'variant' | 'size' | 'status' | 'iconOnly'> & {
  variant?: 'primary' | 'secondary'
  size?: 's' | 'm' | 'l'
  status?: 'default' | 'success' | 'error' | 'warning'
}

export function Button({
  children,
  variant = 'primary',
  size = 'm',
  status = 'default',
  disabled = false,
  icon,
  ...props
}: ButtonProps) {
  let bgColor = COLORS.primary
  let textColor = COLORS.primaryText
  let borderColor = COLORS.primary

  // Check if button only contains an icon (no text children)
  const isIconOnly =
    (icon && !children) || (isValidElement(children) && typeof children.type !== 'string')

  if (variant === 'primary') {
    if (status === 'success') {
      bgColor = COLORS.primarySuccess
      textColor = '#fff'
      borderColor = COLORS.primarySuccess
    } else if (status === 'error') {
      bgColor = COLORS.primaryError
      textColor = '#fff'
      borderColor = COLORS.primaryError
    } else if (status === 'warning') {
      bgColor = COLORS.primaryWarning
      textColor = '#fff'
      borderColor = COLORS.primaryWarning
    }
  }

  if (variant === 'secondary') {
    bgColor = COLORS.secondary
    textColor = COLORS.secondaryText
    borderColor = COLORS.secondaryBorder

    if (status === 'success') borderColor = COLORS.primarySuccess
    if (status === 'error') borderColor = COLORS.primaryError
    if (status === 'warning') borderColor = COLORS.primaryWarning
  }

  if (disabled) {
    bgColor = COLORS.primaryDisabled
    textColor = '#fff'
    borderColor = COLORS.primaryDisabled
  }

  // Map size to fontSize and iconSize
  const fontSize = size === 's' ? 14 : size === 'm' ? 16 : 18
  const iconSize = size === 's' ? 20 : size === 'm' ? 24 : 28

  return (
    <ButtonDXPlus
      variant={variant as any}
      size={size as any}
      disabled={disabled as any}
      iconOnly={isIconOnly as any}
      icon={icon}
      scaleIcon={iconSize / 16}
      style={{ backgroundColor: bgColor, borderColor }}
      {...(props as any)}
    >
      {children && !isIconOnly && (
        <Text fontWeight={600} fontSize={fontSize} color={textColor} alignSelf="center">
          {children}
        </Text>
      )}
    </ButtonDXPlus>
  )
}

export default Button
