import { YStack, XStack, Text, View } from 'tamagui'
import React from 'react'
import { AlertCircle } from '@tamagui/lucide-icons'

const COLORS = {
  label: '#0C0D0D',
  description: '#191919',
  error: '#D0021B',
  requiredRed: '#D0021B',
  errorBg: '#FFE5E5',
  errorBorder: '#D0021B',
  subsectionBg: '#E8EBF0',
}

type FormGroupProps = {
  label?: string
  required?: boolean
  description?: string
  error?: string | string[]
  hint?: string
  tooltip?: React.ReactNode
  children?: React.ReactNode
  spacing?: string | number
  layout?: 'vertical' | 'horizontal' | 'nested'
  subsection?: boolean
  nested?: boolean
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  required = false,
  description,
  error,
  hint,
  tooltip,
  children,
  spacing = '$4',
  layout = 'vertical',
  subsection = false,
  nested = false,
}) => {
  const hasError = error && (Array.isArray(error) ? error.length > 0 : true)
  const errorArray = Array.isArray(error) ? error : error ? [error] : []

  const renderLabel = () => {
    if (!label) return null

    return (
      <XStack alignItems="center" gap="$1.5">
        <Text fontSize={16} fontWeight="400" color={COLORS.label}>
          {label}
        </Text>

        {required && (
          <Text fontSize={16} fontWeight="400" color={COLORS.requiredRed}>
            *
          </Text>
        )}

        {tooltip && tooltip}
      </XStack>
    )
  }

  const renderErrors = () => {
    if (!hasError) return null

    return (
      <YStack
        gap="$2"
        backgroundColor={COLORS.errorBg}
        padding="$3"
        borderLeftWidth={4}
        borderLeftColor={COLORS.errorBorder}
        borderRadius={4}
      >
        {errorArray.map((err, index) => (
          <XStack key={index} gap="$2" alignItems="flex-start">
            <AlertCircle size={16} color={COLORS.error} style={{ marginTop: 2 }} />
            <Text fontSize={13} color={COLORS.error} flex={1}>
              {err}
            </Text>
          </XStack>
        ))}
      </YStack>
    )
  }

  const content = (
    <>
      {/* Label */}
      {renderLabel()}

      {/* The actual input component */}
      {children}

      {/* Hint text below input */}
      {hint && !hasError && (
        <Text fontSize={14} color={COLORS.description}>
          {hint}
        </Text>
      )}

      {/* Optional Description (if different from hint) */}
      {description && !hint && !hasError && (
        <Text fontSize={14} color={COLORS.description}>
          {description}
        </Text>
      )}

      {/* Error Messages */}
      {renderErrors()}
    </>
  )

  if (layout === 'horizontal') {
    return (
      <XStack width="100%" gap="$4" marginBottom={spacing} alignItems="flex-start" flexWrap="wrap">
        {content}
      </XStack>
    )
  }

  if (subsection) {
    return (
      <YStack
        width="100%"
        backgroundColor={COLORS.subsectionBg}
        padding="$4"
        marginBottom={spacing}
        borderRadius={4}
      >
        <YStack gap="$3">{content}</YStack>
      </YStack>
    )
  }

  if (nested) {
    return (
      <YStack width="100%" paddingLeft="$6" gap="$2" marginBottom={spacing}>
        {content}
      </YStack>
    )
  }

  return (
    <YStack width="100%" gap="$2" marginBottom={spacing}>
      {content}
    </YStack>
  )
}

export default FormGroup
