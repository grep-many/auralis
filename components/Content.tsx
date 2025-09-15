import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ContentProps } from '@/types/ComponentProps'

const Content = ({ children }: ContentProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-5 py-3">
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Content
