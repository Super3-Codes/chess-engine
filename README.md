# chess-engine
This project is used to show case how a chess algorithm works.

#Algorithms used in this project

1)Min-max Searching

The core of the chess playing algorithm is a local min-max search of the gamespace.
The algorithm attempts to MINimize the opponent's score, and MAXimize its own. At each depth
(or "ply" as it's as its referred to in computer chess terminology), all possible moves are examined,
and the static board evaluation function is used to determine the score at the leafs of the search tree.
These scores propagate up the tree and are used to select the optimal move at each depth. The bigger
the ply, the better the chosen move will be (as the algorithm is able to look ahead more moves). The
branching factor is typically between 25 and 40 moves per ply (the average is around 35). 

