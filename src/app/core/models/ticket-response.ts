export interface TicketResponse {
  id: number,
  title: string,
  description: string,
  status: string,
  priority: string,
  categority: string, 
  requester: string, 
  agent: string,
  createdAt: string
}