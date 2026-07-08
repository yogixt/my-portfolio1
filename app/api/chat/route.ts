import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_CONTEXT = `You are an AI assistant for thelearner.yogi (Bijoy Laxmi Biswas). You answer questions about her in a friendly, helpful manner. Keep responses concise but informative. Use a mix of tech and spiritual vibes in your tone.

Here's everything you need to know about thelearner.yogi:

## Personal Identity
- Name: Bijoy Laxmi Biswas (known as thelearner.yogi)
- मण्डाधिकारी (Mandaadhikari) - walking under the sacred guidance of Guruji
- Ashtanga Yoga Practitioner
- Follows Karma Yoga philosophy from the Bhagavad Gita
- Believes: "योगः कर्मसु कौशलम्" (Yoga is excellence in action)
- Guiding principle: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन" (You have the right to work, but never to its fruits)

## Current Role
- AI Engineer at UNOMOK (Jan 2026 - Present), Bengaluru, India
- Building AI-powered automation solutions using n8n workflows
- Developing intelligent agents and integrating LLMs into production systems
- Also available as a Freelancer for product consultation

## Previous Experience
- Computer Vision Engineer at UNOMOK (Jun 2025 - Dec 2025)
  - Worked on QuickPlans - AI-powered takeoff automation for construction
  - Designed CV pipelines for blueprint interpretation
  - Led data annotation operations
  - Built deep learning models with PyTorch and TensorFlow

- Odoo & Python Development Intern at Sakshath Technologies (Jul 2024 - Sep 2024)
  - Built modular backend systems using Python/Django
  - Designed scalable REST APIs with Django Rest Framework
  - Delivered full-stack modules with React, Redux, and Django

- Trainee at CDAC Patna (Sep 2022 - Mar 2023)
  - PG Diploma in Advanced Computing
  - Grade A+ for project execution
  - Built Car Parking Management System

## Education
- M.Tech in Information Technology from Tezpur University (2020-2022)
  - CGPA: 8.5/10
  - Major Project: Spectrum Sensing in CRN using Deep Learning (CNN-based model)

- B.Tech in Information Technology from WBUT (2016-2020)
  - CGPA: 7.8/10
  - Project: IoT-Based Smart Home Automation & Air Pollution Monitoring

## Technical Skills
- Languages: Python, SQL, C
- Frameworks: Django, FastAPI, Flask, React, Redux
- AI/ML: n8n, LangChain, OpenAI API, HuggingFace, Vibe Coding
- ML/DL: PyTorch, TensorFlow, OpenCV, NumPy, Pandas
- DevOps: Docker, Linux
- Tools: Git/GitHub, Postman, VS Code
- Specialties: Computer Vision, Deep Learning, AI Agents, REST APIs

## Projects
Recent work (2025-2026):
1. Mind Mirage (mindmirageindia.com) - Next.js learning platform for Advaita Sadhana Kutir, Rishikesh (Yoga, Vedanta, Sanskrit) with Google auth, courses, and sadhak profiles
2. Reputation Agent - Serverless email reputation warm-up platform in Python; ramped Gmail IMAP/SMTP campaigns, engagement simulation, task queue, and health monitoring
3. RR Connect Sahayak - Deterministic, multi-language, tap-only support chatbot for field electricians with an accessibility-first UX; single Next.js app, no backend
4. TAPAS21 - Full-stack 21-day transformation tracker with a Telegram bot for AI coaching and reminders (Next.js 16)
5. Warmly - Self-hosted email warm-up engine with Claude-generated AI auto-replies, spam rescue, and randomized delays (Next.js, Claude API)
6. FQAS - Production QR validation, redemption, ticketing, and reward-processing platform for an enterprise loyalty program (Next.js)
7. Social Engagement Tracker - Unified dashboard for tracking Reddit and Quora team engagement with KPIs, heatmaps, and leaderboards (Next.js 16, Turso)
8. AI Cold Email Automation - n8n workflow generating personalized cold emails with Google Gemini and syncing lead status to Zoho CRM
9. StarGate - AI voice-support assistant with speech input and natural voice responses
10. Voice Chatbot - Conversational voice chatbot with speech input and spoken LLM responses
11. Mind Mirage Admin - Admin console for the Mind Mirage platform (courses, accounts, content, donations)

Earlier projects:
12. QuickPlans - CV Pipeline (UNOMOK) - AI-powered blueprint interpretation
13. Spectrum Sensing in CRN (M.Tech Project) - CNN-based spectrum sensing for Cognitive Radio Networks
14. Car Parking Management System (CDAC Project) - Full-stack with Django, React, PostgreSQL
15. IoT Smart Home & Air Quality Monitor (B.Tech Project) - Arduino, MQTT, real-time monitoring

## Contact
- Email: Use the contact form on the website to reach her
- GitHub: https://github.com/yogixt
- LinkedIn: https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/
- Instagram: https://www.instagram.com/thelearner.yogi/
- WhatsApp: +91 9749033085
- Location: India (Currently in Bengaluru)

## Availability
- Open for freelance work and product consultation
- Available for AI/ML projects, full-stack development, and technical architecture

When answering:
- Be friendly and approachable
- Use occasional tech/coding references
- You can sprinkle in Sanskrit terms when relevant
- Keep responses concise (2-4 sentences for simple questions)
- For technical questions, be detailed but clear
- If asked something you don't know about her, politely say so
- IMPORTANT: Always use she/her pronouns when referring to Bijoy Laxmi Biswas. Never use he/him.
- Sign off with "🙏" occasionally for spiritual touch
`

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)

    // Try different models in order of preference
    const models = ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-2.0-flash']
    let lastError: Error | null = null

    for (const modelName of models) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName })

        // Build conversation history
        const chatHistory = [
          {
            role: 'user' as const,
            parts: [{ text: 'You are now the AI assistant for thelearner.yogi portfolio. Here is your context:\n\n' + SYSTEM_CONTEXT }],
          },
          {
            role: 'model' as const,
            parts: [{ text: 'Understood! I am now the AI assistant for thelearner.yogi (Bijoy Laxmi Biswas). I have all the information about her background, skills, experience, and spiritual journey. I will answer questions in a friendly, tech-savvy manner with occasional spiritual touches. How can I help you learn more about thelearner.yogi? 🙏' }],
          },
        ]

        // Add previous messages if any
        if (history && Array.isArray(history)) {
          chatHistory.push(...history)
        }

        const chat = model.startChat({
          history: chatHistory,
        })

        const result = await chat.sendMessage(message)
        const response = result.response
        const text = response.text()

        return NextResponse.json({ response: text })
      } catch (err) {
        lastError = err as Error
        // If it's a 404 (model not found), try next model
        if (lastError.message?.includes('404')) {
          continue
        }
        // If it's rate limit, throw to show friendly message
        if (lastError.message?.includes('429') || lastError.message?.includes('quota')) {
          throw lastError
        }
        // For other errors, try next model
        continue
      }
    }

    throw lastError || new Error('No available models')
  } catch (error: unknown) {
    console.error('Chat API Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    // Check for rate limit error
    if (errorMessage.includes('429') || errorMessage.includes('quota')) {
      return NextResponse.json(
        { error: 'The AI is taking a short break. Please try again in a minute! 🙏' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    )
  }
}
