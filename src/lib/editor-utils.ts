import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorCanvasCardType } from './types'
import { EditorState } from '@/providers/editor-provider'


export const onDragStart = (
  event: any,
  nodeType: EditorCanvasCardType['type']
) => {
  event.dataTransfer.setData('application/reactflow', nodeType)
  event.dataTransfer.effectAllowed = 'move'
}

export const onSlackContent = (
    nodeConnection: ConnectionProviderProps,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    nodeConnection.setSlackNode((prev: any) => ({
      ...prev,
      content: event.target.value,
    }))
  }
  
  export const onDiscordContent = (
    nodeConnection: ConnectionProviderProps,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    nodeConnection.setDiscordNode((prev: any) => ({
      ...prev,
      content: event.target.value,
    }))
  }