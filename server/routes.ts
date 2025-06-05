import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Send an email notification
      // 2. Store the message in a database
      // 3. Integrate with a customer support system
      
      console.log("Contact form submission:", validatedData);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you within 48 hours." 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data and try again." 
      });
    }
  });

  // Random number generation endpoint (for potential API access)
  app.post("/api/generate", async (req, res) => {
    try {
      const { min = 1, max = 10, quantity = 1, noDuplicates = false, evenOnly = false } = req.body;
      
      if (min >= max || quantity > 20 || quantity < 1) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid parameters" 
        });
      }
      
      const numbers: number[] = [];
      const used = new Set<number>();
      
      for (let i = 0; i < quantity; i++) {
        let num: number;
        let attempts = 0;
        
        do {
          // Use crypto for server-side random generation
          const randomBytes = new Uint32Array(1);
          crypto.getRandomValues(randomBytes);
          const randomFloat = randomBytes[0] / (0xffffffff + 1);
          
          num = Math.floor(randomFloat * (max - min + 1)) + min;
          
          if (evenOnly && num % 2 !== 0) {
            num = num < max ? num + 1 : num - 1;
          }
          
          attempts++;
        } while (noDuplicates && used.has(num) && attempts < 1000);
        
        if (!noDuplicates || !used.has(num)) {
          numbers.push(num);
          used.add(num);
        }
      }
      
      res.json({ 
        success: true, 
        numbers,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error generating random numbers" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      service: "RandoGen API"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
