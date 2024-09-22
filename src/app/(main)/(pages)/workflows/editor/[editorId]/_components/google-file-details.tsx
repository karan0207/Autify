import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { onAddTemplate } from '@/lib/editor-utils'
import { ConnectionProviderProps } from '@/providers/connections-provider'
import React from 'react'

type Props = {
    nodeConnection: ConnectionProviderProps
    title: string
    gFile: any
  }

  const isGoogleFileNotEmpty = (file: any): boolean => {
    return Object.keys(file).length > 0 && file.kind !== ''
  }