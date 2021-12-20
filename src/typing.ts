// GET https://safe-inlet-22848.herokuapp.com/games
export type GetAllGamesResponse = {
  games?: {
    id: number,
    complete: boolean,
    winner: string
  }[]
}

// GET https://safe-inlet-22848.herokuapp.com/games/{gameId}
export type GetGameResponse = {
  gameId: number,
  positions?: { from: 'user' | 'AI', position: { x: number, y: number } }[],
  complete: boolean,
  winner?: 'user' | 'AI' | 'none';
}

// POST https://safe-inlet-22848.herokuapp.com/games
export type StartNewGameResponse = {
  gameId: number
}

// POST https://safe-inlet-22848.herokuapp.com/games/{gameId}/positions
export type NewPositionRequest = {
  x: number,
  y: number
}
export type NewPositionResponse = {
  complete: boolean,
  winner?: 'user' | 'AI' | 'none',
  aiNextPosition?: { x: number, y: number }
}

