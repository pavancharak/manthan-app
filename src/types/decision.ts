export type DecisionContract = {
  id: string
  intent: string
  inputs: Record<string, any>
  outputs: Record<string, any>
  behavior: string
  determinism: "strict"
  boundaries: string[]
  metadata: {
    created_at: string
    version: string
  }
}