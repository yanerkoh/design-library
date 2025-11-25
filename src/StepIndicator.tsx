import { styled, XStack, YStack, Text, View } from 'tamagui'
import { Check } from '@tamagui/lucide-icons'

const COLORS = {
  inactive: '#A0A1A2',
  active: '#3678E9',
  completed: '#21AA00',
  textDark: '#0C0D0D',
  textInactive: '#A0A1A2',
}

const StepCircle = styled(View, {
  width: 20,
  height: 20,
  borderRadius: 9999,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 0,

  variants: {
    status: {
      inactive: {
        backgroundColor: COLORS.inactive,
      },
      active: {
        backgroundColor: COLORS.active,
      },
      completed: {
        backgroundColor: COLORS.completed,
      },
    },
  },
})

const StepConnector = styled(View, {
  height: 2,
  width: 60,

  variants: {
    active: {
      true: {
        backgroundColor: COLORS.active,
      },
      false: {
        backgroundColor: COLORS.inactive,
      },
    },
    completed: {
      true: {
        backgroundColor: COLORS.completed,
      },
    },
  },
})

type StepIndicatorProps = {
  steps: number
  current: number
  labels?: string[]
}

export function StepIndicator({ steps, current, labels }: StepIndicatorProps) {
  const currentLabel = labels && labels[current - 1] ? labels[current - 1] : ''

  return (
    <YStack gap="$3" width="100%" alignItems="center">
      {/* Current step label at the top */}
      {currentLabel && (
        <XStack alignItems="center" justifyContent="center">
          <Text fontSize={16} fontWeight="200" color={COLORS.textDark}>
            Step {current}:{' '}
          </Text>
          <Text fontSize={16} fontWeight="600" color={COLORS.textDark}>
            {currentLabel}
          </Text>
        </XStack>
      )}

      <XStack alignItems="center" justifyContent="center">
        {Array.from({ length: steps }).map((_, i) => {
          const index = i + 1
          const status = index < current ? 'completed' : index === current ? 'active' : 'inactive'

          return (
            <XStack key={i} alignItems="center">
              {/* Connector before circle (skip first) */}
              {index !== 1 && (
                <StepConnector active={index === current} completed={index <= current} />
              )}

              <StepCircle status={status}>
                {status === 'completed' ? (
                  <Check size={12} color="white" strokeWidth={3} />
                ) : (
                  <Text color="white" fontWeight="600" fontSize={14}>
                    {index}
                  </Text>
                )}
              </StepCircle>
            </XStack>
          )
        })}
      </XStack>
    </YStack>
  )
}

export default StepIndicator
