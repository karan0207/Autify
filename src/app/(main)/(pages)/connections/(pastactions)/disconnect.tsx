// 'use server'
// import { auth } from '@clerk/nextjs'
// import db from '@/lib/db' // Your database instance

// export const onDisconnect = async (type: string) => {
//   const { userId } = auth()
//   if (!userId) {
//     throw new Error('User not authenticated')
//   }

//   try {
//     await db.connection.deleteMany({
//       where: { userId, type },
//     })

//     return { success: true, message: `${type} disconnected successfully` }
//   } catch (error) {
//     console.error('Error disconnecting:', error)
//     return { success: false, message: `Failed to disconnect ${type}` }
//   }
// }
