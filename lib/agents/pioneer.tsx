import { OpenAI } from '@ai-sdk/openai'
import { Pioneer } from '@/components/pioneer'
import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { ExperimentalMessage, experimental_streamObject } from 'ai'
import { PartialInquiry, inquirySchema } from '@/lib/schema/inquiry'

export async function pioneer(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: ExperimentalMessage[]
) {
  const openai = new OpenAI({
    baseUrl: process.env.OPENAI_API_BASE, // optional base URL for proxies etc.
    apiKey: process.env.OPENAI_API_KEY, // optional API key, default to env property OPENAI_API_KEY
    organization: '' // optional organization
  })
  const objectStream = createStreamableValue<PartialInquiry>()
  uiStream.update(<Pioneer inquiry={objectStream.value} />)

  let finalInquiry: PartialInquiry = {}
  await experimental_streamObject({
    model: openai.chat(process.env.OPENAI_API_MODEL || 'gpt-4-turbo'),
    system: `As a Generative UI builder you will generate a custom UI based on the given question
    
    Only proceed with generating a ui if you feel the UI you can build is relevant. do not ask questions that are not relevant to the user's query.
    
    you have the following components available to you:
    basic : this has wallet info like the type, context, and pioneer server url
    asset : this will display the asset of assetContext.
    transfer: send crypto to another wallet
    portfolio: display the portfolio of the user
    swap: swap crypto
    
    the parameters/props needed for each:
    basic: []
    asset: [caip]
    transfer: [caip,toAddress]
    portfolio: []
    swap: [from,to,amount] the from and to are the caips of the assets, amount is a string
    
    Never provide more then 1 component in a single UI.
    
    When crafting your UI, structure it as follows:
    {
      "question": "A clear, concise description of why you think these UI components are helpful.",
      "options": [
        {"component": "transfer", "props": ['from','to','amount']},
      ]
    }

    For example:
    {
      "question": "can i view my portfolio?",
      "options": [
       {"component": "portfolio", "props": []},
      ],
    }
  
    By providing predefined options, you help the user.
    `,
    messages,
    schema: inquirySchema
  })
    .then(async result => {
      for await (const obj of result.partialObjectStream) {
        if (obj) {
          objectStream.update(obj)
          finalInquiry = obj
        }
      }
    })
    .finally(() => {
      objectStream.done()
    })

  return finalInquiry
}
