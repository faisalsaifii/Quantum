---
sidebar_position: 2
---

# Search Strategies

## Searching

- Searching is the sequence of steps that transforms the initial state to the goal state.
- The process of search includes:
  - Initial state description of the problem
  - A set of legal operators that change the state
  - the final or goal state

### Parameters used to evaluate searching technique (Imp)

#### Completeness

By completeness, the algorithm finds an answer in some finite time. So, the algorithm is said to be complete if it is guaranteed to find a solution, if there is one

#### Space & Time Complexity

With space and time complexity, we address the memory required and the time factor in terms of operations carried out

#### Optimality

It tells us how good the solution is. So, an algorithm or a search process is said to be optimal, if it gives the best solution

## Types of Search Strategies

### Uninformed Search

- Has no additional information about states beyond that provided in the problem definition
- It should proceed in a systematic way by exploring nodes in some predetermined order or simply by selecting nodes at random
- Uninformed search is also called Brute Force Search or Blind Search or Exhaustive Search
- Types:
  - Breadth First Search
  - Depth First Search
  - Uniform Cost Search

### Informed Search

- Contains an array of knowledge such as how far we are from the goal, path cost, how to reach to goal node, etc. This knowledge helps agents to explore less to the search space and find more efficiently the goal node
- Informed search methods often depend on the use of heuristic information
- Informed search is also known as heuristic search
- Types:
  - Hill Climbin
  - Best First Search
  - A* Algorithm

## Informed vs Uninformed Search

| S.No. | Informed Search | Uninformed Search |
| --- | --- | --- |
| 1. | Uses knowledge to find steps to solution | No use of knowledge |
| 2. | Highly efficient as consumes less time & cost | Efficiency is mandatory |
| 3. | Low cost | High cost (comparatively) |
| 4. | Finds solution more quickly | Slow speed |
| 5. | Examples: Best First Search, A* Algorithm | Example: Breadth First Search, Depth First Search |

## Breadth First Search (BFS) (Imp)

- Algorithm for traversing or searching tree
- Starts at tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbour nodes at the present depth prior to moving on to the nodes at the next depth level

### Algorithm of BFS

- Create variable called NODE-LIST and set it to the initial state
- Until a goal state is found or NODE-LIST is empty:
  - Remove the first element from NODE-LIST and call it E. If NODE-LIST was empty, quit
  - For each way that each rule can match the state described in R do:
    - Apply the rule to generate a new state
    - If the new state is a goal state, quit and return this state
    - Otherwise, add the new state to the end of NODE-LIST

### Advantages of BFS

- If there is more than one solution for a given problem, then BFS provides the minimal solution which requires the least number of steps

### Disadvantages of BFS

- It requires a lot of memory since each level of the tree must be saved into memory to expand the next level
- Needs lots of time if the solution is far away from the root node

## Depth First Search (DFS) (Imp)

- Algorithm for traversing or searching tree
- Starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking

### Algorithm of DFS

- If the initial state is a goal state, quit and return success
- Otherwise, do the following until success or failure is signaled:
  - Generate a successor, E, of the initial state. If there are no more successors, signal failure
  - Call Depth First Search with E as the initial state
  - If success is returned, signal success. Otherwise continue in this loop

### Advantages of DFS

- Requires much less memory as it only needs to store a stack of the nodes on the path from root node to the current node
- Takes less time to reach to the goal node

### Disadvantages of DFS

- There is the possibility that many states keep re-occurring, and there is no guarantee of finding the solution
- DFS algorithm goes for deep down searching and sometime it may go to the infinite loop

## Breadth First Search (BFS) vs Depth First Search (DFS)

| S.No. | Breadth First Search (BFS) | Depth First Search (DFS) |
| --- | --- | --- |
| 1. | Uses queue data structure for finding shortest path | Uses stack data structure for finding shortest path |
| 2. | More suitable for searching vertices which are closer to given source | More suitable when there are solutions away from source |
| 3. | Considers all neighbours first and thus not suitable for decision making trees used in games or puzzles | More suitable for game or puzzle problems |
| 4. | Time Complexity: `O(V+E)` where V: Vertices & E: Edges | Time Complexity: `O(V+E)` where V: Vertices & E: Edges |

## Generate and Test Algorithm

- Generate and Test Algorithm is a simple algorithm that generates all possible solutions and tests them against a goal test
- It is a brute force search algorithm like Depth First Search

### Algorithm for Generate and Test

- Generate all possible solutions
- Test each solution against the goal test
- If the solution passes the goal test, then return it as the solution
- If no solution passes the goal test, then return failure

## Best First Search (BFS)

- It is a search algorithm which explores a graph by expanding the most promising node chosen according to a specified rule

### Algorithm for Best First Search

- Use two ordered lists OPEN and CLOSED
- Put the start node in OPEN
- Repeat the following:
  - If OPEN is empty, exit with failure
  - Remove the first node from OPEN and call it N
  - If N is the goal node, exit with success
  - Put N on CLOSED
  - Expand N, generating the set of successors of N
  - For each successor of N:
    - If it is not on CLOSED, and not on OPEN, put it on OPEN
    - If it is already on OPEN, update its cost if necessary
  - Sort OPEN by cost, with lowest cost first

### BFS & DFS are special cases of Best First Search (Imp)

- Best first search is a combination of depth first search and breadth first search
- Depth first is good because a solution can be found without computing all nodes & breadth first is good because it doesn't get trapped in dead ends
- Best first search allows us to switch between paths thus gaining the benefit of both approaches. At each step the most promising node is chosen
- If one of the nodes chosen generates nodes that are less promising it is possible to choose another at the same level and in effect the search changes from depth to breadth
- If on analysis these are no better then the search method reverts to the descendants of the first choice and proceeds the backtracking as it were

## Heuristic Function (Imp)

- A heuristic function, also called simply a heuristic, is a function that ranks alternatives in search algorithms at each branching step based on available information to decide which branch to follow
- It takes the current state of the agent as its input & produces the estimation of how close agent is from the goal
- It might not always give the best solution, but it guarantees to find a good solution in reasonably time
- Estimates how close a state is to the goal
- Calculates the cost of an optimal path between the pair of states. The value of the heuristic function is always positive

## Blind Search vs Heuristic Search

| S.No. | Blind Search | Heuristic Search |
| --- | --- | --- |
| 1. | Has access only to the problem definition | Has access to heuristic function & problem definition |
| 2. | Less efficient | More efficient |
| 3. | Every action is equally good | Every action is not equally good |
| 4. | Many problems are not solved | Most problems are solved |
| 5. | Known as uninformed search | Known as informed search |
| 6. | Uses more computation | Uses less computation |
| 7. | Examples: Breadth First Search, Depth First Search | Examples: Best First Search, A* Algorithm |

## AO* Search

- AO* is a search algorithm and a heuristic search algorithm that applies a heuristic evaluation function to each node of the search tree to reduce the number of nodes that need to be expanded
- It is a combination of A* and Best First Search

### Algorithm of AO* Search

- Initialise the graph to start node
- Traverse the graph following the current path accumulating nodes that have not yet been expanded or solved
- Pick any of these nodes and expand it and if it has no successors call this value FUTILITY otherwise calculate only f' for each of the successors
- If f' is 0 then mark the node as SOLVED
- Change the value of f' for the newly created node to reflect its successors by back propagation
- Wherever possible use the most promising routes and if a node is marked as SOLVED then mark the parent node as SOLVED
- If starting node is SOLVED or value greater than FUTILITY, stop, else repeat from 2.

## Hill Climbing Algorithm (Imp)

- A local search algorithm that continually moves in the direction of increasing values, that is, uphill (the goal)
- Terminates when reaches a "peak" where no enighbor has a higher value
- Does not maintain a search tree, so current node data structure only records the state and its objective function value

### Algorithm of Hill Climbing

- Evaluate the initial state. If it is a goal state then return success and stop, else continue with the initial state as the current state
- Loop until a solution is found or until there are no new operators left to be applied in the current state
  - Select an operator that has not yet been applied to the current state and apply it to produce a new state
  - Evaluate the new state
    - If it is goal state, then return it and quit
    - If it is not a goal state but it is better than the current state then make it the current state
    - If it is not better than the current state, then continue in the loop

### Drawbacks of Hill Climbing

#### 1. Local Maxima

- A local maximum is a peak that is higher than each of its neighbouring states, but lower than the global maximum
- Hill climbing algorithms that reach the vicinity of a local maximum will be drawn upwards towards the peak, but will then be stuck with nowhere else to go
- **Overcoming:**
  - Backtrack to some earlier node and try going in a different direction
  - To implement this strategy, maintain a list of paths almost taken and go back to one of them if the path was taken leads to a dead end

#### 2. Plateau

- It is a flat area of the search space in which a whole set of neighbouring states have the same value
- A hill climbing search might not be able to find its way off the plateau
- **Overcoming:**
  - Make big jump in some direction to try to get to a new section of the search space
  - If the only rules available describe single small steps, apply them several times in the same direction

#### 3. Ridges

- Ridges result in a sequence of local maxima that is very difficult for greedy algorithms to navigate
- **Overcoming:**
  - Apply two or more rules before doing the test
  - This corresponds to moving in several directions at once
  
## Water Jug Problem (Imp)

- You are given two jugs, a 4 litres and a 3 litres one. Neither has any measuring marker on it. There is a pump that can be used to fill the jugs with water. How can you get exactly 2 litres of water in the 4 litres jug?
- The state space for this problem can be represented by ordered pairs of integers (x,y) such that x = 0, represents the quantity of water in the 4 litres jug and y = 0, represents the quantity of water in the 3 litres jug
- The initial state is (0,0) and the goal state is (2,n)

### Algorithm for Water Jug Problem

| S.No. | Action | Description |
| --- | --- | --- |
| 1. | (x,y) -> (0,3) | Fill the 3 litres jug |
| 2. | (x,y) -> (3,0) | Pour the water from 3 litres jug to 4 litres jug until the 3 litres jug is empty |
| 3. | (x,y) -> (3,3) | Fill the 3 litres jug again |
| 4. | (x,y) -> (4,2) | Pour the water from 3 litres jug to 4 litres jug until the 4 litres jug is full |
| 5. | (x,y) -> (0,2) | Empty the 4 litres jug |
| 6. | (x,y) -> (2,0) | Pour the water from 3 litres jug to 4 litres jug |
| 7. | (x,y) -> (2,0) | Now the 4 litres jug would have 2 litres of water |
