import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';
import { mcp } from '../mcp/telegram-mcp';

export const telegramAgent = new Agent({
  name: 'TelegramAgent',
  instructions: `You can write a message to telegram witch mcp. chatId is ${process.env.TELEGRAM_CHAT_ID}`,
  model: openai('gpt-4o-mini'),
  tools: await mcp.getTools(),
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', 
    }),
    options: {
      lastMessages: 100,
      semanticRecall: true,
      threads: {
        generateTitle: true,
      },
    },
  }),
});
