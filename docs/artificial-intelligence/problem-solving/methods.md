---
sidebar_position: 1
---

# Problem Solving Methods

## Categories of problem

### Toy problem

- Problem that illustrates various problem solving methods
- They have exact & precised description
- Provide basis for solving real-life problems
- Used by researchers to compare performance of algorithms
- Examples: n-Queen puzzle, vacuum world, ball picker robot

### Real world problem

- Problem that needs to be solved so that its solution can be utilised in practical life
- Don't have well described, single specification
- People care about solutions of real-world problems as they are benefited from it
- Examples: Route finding for a trip, travelling salesman problem, robot navigation, car reversing guide.

## Construction of state space

- The root of search tree is a search node corresponding to initial state. In this state only we can check if goal is reached.
- If goal is not reached we need to consider another state. Such a process can be done by expanding from the current state by applying successor function which generates new state. From this we may get multiple states
- For each one of these, again we need to check goal test or else repeat expansion of each state.
- The choice of which state to expand is determined by the search strategy.
- It is possible that some state, surely, can never lead to goal state. Such a state we need not to expand. This decision is based on various conditions of the problem.

## Terminologies used in search trees

- **Node in a tree:** It is a book keeping data structure to represent the structure configuration of a state in a search tree.
- **State:** It reflects world configuration. It is mapping of state and action to another new state.
- **Fringe:** It is a collection of nodes that have been generated but not yet expanded.
- **Leaf node:** Each node in fringe is leaf node (as it does not have further
successor node).

## Evaluation of Problem Solving Algorithms

- **Completeness:** Does the algorithm surely find a solution, if really the solution exists.
- **Optimality:** Sometimes it happens that there are multiple solutions to a single problem. But the algorithm is expected to produce best solution among all feasible solution, which is called as optimal solution.
- **Time complexity:** How much time the algorithm takes to find the solution.
- **Space complexity:** How much memory is required to perform the search algorithm.

## State Space Approach

- A state is representation of problem elements at a given moment
- State space is the set of all states reachable from the initial state
- State space forms a graph in which the nodes are states and the arcs between nodes are acitons
- In the state space, a path is a sequence of states connected by a sequence of actions
- The solution of a problem is part of the graph formed by the sttae space
- The state space representation forms the basis of most of the AI methods
- Its structure corresponds to the structure of problem solving in two important ways:
  - It allows for a formal definition of a problem as per the need to convert some given situation into some desired situation using a set of permissible operations
  - It permits the problem to be solved with the help of known techniques and control strategies to move through the problem space until goal state is found
- To solve a particular problem, we need to build a system or a method which can generate required solution. Following four things are required for building such system:
  - Define the problem precisely. This definition must precisely specify the initial situation (input).
  - Analyse the problem. To identify those important features which can havev an immense impact on the appropriateness
  - Isolate and represent the task knowledge that is necessary to solve the problem
  - Choose the best problem solving technique and apply it to the particular problem
