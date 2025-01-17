import { NextResponse } from 'next/server'
import { CohereClient } from "cohere-ai"

const client = new CohereClient({
  token: process.env.NEXT_PUBLIC_COHERE_API_KEY!
})

export async function POST(req: Request) {
  const { message, userProfile } = await req.json()

  const stream = await client.chatStream({
    message: message,
    model: "command-nightly",
    preamble: `You are an AI doctor specializing in Yaba addiction recovery. Provide empathetic and informative responses to help users overcome their addiction. Always encourage seeking professional medical help for serious concerns. The user's profile information: Name: ${userProfile.name}, Age: ${userProfile.age}, Bio: ${userProfile.bio}. Use this information to personalize your responses.`,
    connectorId: "web-search"
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chat of stream) {
        if (chat.eventType === 'text-generation') {
          controller.enqueue(encoder.encode(chat.text))
        }
      }
      controller.close()
    },
  })

  return new NextResponse(readable, {
    headers: {
      'Content-Type': 'text/plain',
      'Transfer-Encoding': 'chunked',
    },
  })
}

