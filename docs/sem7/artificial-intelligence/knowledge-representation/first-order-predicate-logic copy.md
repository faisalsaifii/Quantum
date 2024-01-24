---
sidebar_position: 1
---

# First Order Predicate Logic

## First Order Logic in AI

- Also known as Predicate Logic or First order predicate logic
- First order logic is a powerful language that develops information about the objects in a more easy way and can also express the relationship between those objects
- First order logic is an extension to propositional logic
- First order logic is sufficiently expressive to represent the natural language statements in a concise way
- Like natural language, it doesn't only assume that the world contains facts like propositional logic but also assumes objects, relations, function
- As a natural language, it also has two main parts syntax & semantics

## Inference Rules

### 1. Universal Generalisation

- It is a valid inference rule which states that if premise `P(c)` is true for any arbitrary element `c` in the universe of discourse, then we can have a conclusion as `∀ x P(x)`
- This rule can be used if we want to show that every element has a similar property
- Representation:

```
    P(c)
= ----------
   ∀ x P(x)
```

### 2. Universal Instantiation

- Also called universal elimination or UI is a valid inference rule. It can be applied multiple times to add new sentences
- As per UI, we can infer any sentence obtained by substituting a ground term for the variable
- It states that we can infer any sentence `P(c)` by substituting a ground term c (a constant within domain x) from `∀ x P(x)` for any object in the universe of discourse
- Representation:

```
   ∀ x P(x)
= ----------
     P(c)
```
