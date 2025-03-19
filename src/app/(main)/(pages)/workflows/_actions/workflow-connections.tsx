'use server'
import { Option } from '@/components/ui/multiple-selector'
import { db } from '@/lib/db'
import { auth, currentUser } from '@clerk/nextjs/server'

export const getGoogleListener = async () => {
  const { userId } = auth()

  if (userId) {
    const listener = await db.user.findUnique({
      where: {
        clerkId: userId,
      },
      select: {
        googleResourceId: true,
      },
    })

    if (listener) return listener
  }
}

export const onFlowPublish = async (workflowId: string, state: boolean) => {
  console.log(state)
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: state,
    },
  })

  return published.publish ? 'Workflow published' : 'Workflow unpublished'
}

export const onCreateNodeTemplate = async (
  content: string,
  type: string,
  workflowId: string,
  channels: Option[] = [], // Ensure channels has a default value
  accessToken?: string,
  notionDbId?: string
) => {
  if (type === 'Discord') {
    const response = await db.workflows.update({
      where: {
        id: workflowId,
      },
      data: {
        discordTemplate: content,
      },
    })
    return response ? 'Discord template saved' : 'Error saving Discord template'
  }

  if (type === 'Slack') {
    const response = await db.workflows.update({
      where: {
        id: workflowId,
      },
      data: {
        slackTemplate: content,
        slackAccessToken: accessToken,
      },
    })

    if (response) {
      const channelList = await db.workflows.findUnique({
        where: {
          id: workflowId,
        },
        select: {
          slackChannels: true,
        },
      })

      if (channelList) {
        // Remove duplicates before insert
        const nonDuplicated = channelList.slackChannels.filter(
          (channel) => !channels?.some((c) => c?.value === channel)
        )

        // Insert non-duplicated channels
        for (const channel of nonDuplicated) {
          await db.workflows.update({
            where: { id: workflowId },
            data: {
              slackChannels: {
                push: channel,
              },
            },
          })
        }

        return 'Slack template saved'
      }

      // Insert new channels
      for (const channel of channels) {
        await db.workflows.update({
          where: { id: workflowId },
          data: {
            slackChannels: {
              push: channel.value,
            },
          },
        })
      }

      return 'Slack template saved'
    }
  }

  if (type === 'Notion') {
    const response = await db.workflows.update({
      where: {
        id: workflowId,
      },
      data: {
        notionTemplate: content,
        notionAccessToken: accessToken,
        notionDbId: notionDbId,
      },
    })

    return response ? 'Notion template saved' : 'Error saving Notion template'
  }
}

export const onGetWorkflows = async () => {
  const user = await currentUser()
  if (user) {
    const workflows = await db.workflows.findMany({
      where: {
        userId: user.id,
      },
    })
    return workflows ?? []
  }
}

export const onCreateWorkflow = async (name: string, description: string) => {
  const user = await currentUser()

  if (user) {
    // Create new workflow
    const workflow = await db.workflows.create({
      data: {
        userId: user.id,
        name,
        description,
      },
    })

    return workflow ? { message: 'Workflow created' } : { message: 'Oops! try again' }
  }
}

export const onGetNodesEdges = async (flowId: string) => {
  const nodesEdges = await db.workflows.findUnique({
    where: {
      id: flowId,
    },
    select: {
      nodes: true,
      edges: true,
    },
  })
  return nodesEdges ?? { nodes: [], edges: [] }
}
