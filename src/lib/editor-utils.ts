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
