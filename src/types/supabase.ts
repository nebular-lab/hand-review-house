export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      actions: {
        Row: {
          id: string
          created_at: string
          hand_id: string
          street: number
          order: number
          move: string
          size: number
          position: number
        }
        Insert: {
          id?: string
          created_at?: string
          hand_id: string
          street: number
          order: number
          move: string
          size: number
          position: number
        }
        Update: {
          id?: string
          created_at?: string
          hand_id?: string
          street?: number
          order?: number
          move?: string
          size?: number
          position?: number
        }
      }
      cards: {
        Row: {
          id: string
          num: string
          mark: string
        }
        Insert: {
          id: string
          num: string
          mark: string
        }
        Update: {
          id?: string
          num?: string
          mark?: string
        }
      }
      hand_card: {
        Row: {
          id: string
          hand_id: string
          order: number
          card_id: string | null
        }
        Insert: {
          id?: string
          hand_id: string
          order: number
          card_id?: string | null
        }
        Update: {
          id?: string
          hand_id?: string
          order?: number
          card_id?: string | null
        }
      }
      hands: {
        Row: {
          id: string
          created_at: string
          updated_at: string | null
          content: string | null
          effective_stack: number | null
          user_id: string | null
          es: number | null
          bb: number | null
          sb: number | null
          xpot: number | null
          site: string | null
          flop_position: number[] | null
          label: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string | null
          content?: string | null
          effective_stack?: number | null
          user_id?: string | null
          es?: number | null
          bb?: number | null
          sb?: number | null
          xpot?: number | null
          site?: string | null
          flop_position?: number[] | null
          label?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string | null
          content?: string | null
          effective_stack?: number | null
          user_id?: string | null
          es?: number | null
          bb?: number | null
          sb?: number | null
          xpot?: number | null
          site?: string | null
          flop_position?: number[] | null
          label?: string[] | null
        }
      }
      pots: {
        Row: {
          id: number
          hand_id: string | null
          street: number | null
          size: number | null
        }
        Insert: {
          id?: number
          hand_id?: string | null
          street?: number | null
          size?: number | null
        }
        Update: {
          id?: number
          hand_id?: string | null
          street?: number | null
          size?: number | null
        }
      }
      users: {
        Row: {
          id: string
          name: string | null
          created_at: string | null
          updated_at: string | null
          avatar_url: string | null
          nickname: string | null
        }
        Insert: {
          id: string
          name?: string | null
          created_at?: string | null
          updated_at?: string | null
          avatar_url?: string | null
          nickname?: string | null
        }
        Update: {
          id?: string
          name?: string | null
          created_at?: string | null
          updated_at?: string | null
          avatar_url?: string | null
          nickname?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
