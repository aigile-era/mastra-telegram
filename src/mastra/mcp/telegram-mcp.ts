import { MCPClient } from "@mastra/mcp";
import { createSmitheryUrl } from "@smithery/sdk/shared/config.js";

const config = {
  "telegramBotToken":process.env.TELEGRAM_BOT_TOKEN || "",
  "telegramChatId": process.env.TELEGRAM_CHAT_ID || ""

}

// Create MCP client that integrates with Smithery
export const mcp = new MCPClient({
  servers: {
    telegramBot: {
      url: createSmitheryUrl("https://server.smithery.ai/@NexusX-MCP/telegram-mcp-server", { config, apiKey: process.env.SMITHERY_API_KEY }) ,
    }
  }
});

