Recruitment  Frontend React Gobang UI Homework
=============================================

Use typescript and react to implement a Gobang game UI.

## Backend APIs: 

There are already some backend APIs prepared, and the base url is: https://safe-inlet-22848.herokuapp.com

1. Get all game histories and information: `GET` https://safe-inlet-22848.herokuapp.com/games
2. Get specified game information: `GET` https://safe-inlet-22848.herokuapp.com/games/{gameId}
3. Start a new game: `POST` https://safe-inlet-22848.herokuapp.com/games
4. User place a piece in a position: `POST` https://safe-inlet-22848.herokuapp.com/games/{gameId}/positions

The typings of requests/responses and urls are provided in [src/typing.ts](./src/typing.ts)

## Business Requirements

2. Should have a list of all games with their information
3. Should have a button to start a new game
4. Should draw a board with size 20x20
5. The board and all pieces should draw in pure CSS, no images used
6. User can play game with AI by placing pieces on board
7. User always places the first piece in a game
8. User can't place the pieces on a position which is already taken
9. When the game is complete, user can't place any pieces anymore.
10. User can switch to a history game to view or continue to play
11. When a game is complete, we can see the winner information

## Video

https://share.getcloudapp.com/rRuW8z5b

## Technical Requirements

1. Typescript
2. React function components and/or hooks
3. Jest + @testing-library/react, or other testing frameworks
5. Any 3rd-party open source libraries can be used
6. Property unit tests (Important, and is a must-have)
7. Clean code
8. Any other best practices you prefer

```
npm install
npm run 
```
