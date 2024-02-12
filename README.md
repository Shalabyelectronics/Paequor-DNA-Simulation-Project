# Paequor DNA Simulation Project

## Overview

The Paequor DNA Simulation Project is a JavaScript-based simulation that models the behavior of fictional biological entities called "pAequor". These entities possess unique DNA strands composed of 15 bases (A, T, C, G), capable of mutating over time. This project is an exploration of fundamental JavaScript concepts including functions, loops, conditionals, object-oriented programming, and error handling. It provides functionalities for creating pAequor instances with unique identifiers, mutating their DNA strands, and comparing DNA between instances.

## Features

- **Random DNA Base Generation**: Functionality to generate a random base (A, T, C, G), simulating the building blocks of pAequor's DNA.
- **DNA Strand Creation**: Capability to create a random strand of DNA containing 15 bases for new pAequor instances.
- **Unique Identification**: Mechanism to ensure each pAequor instance has a unique identifier, distinguishing it from others.
- **DNA Mutation**: Feature allowing a pAequor instance to mutate, changing one of its DNA bases randomly to simulate natural genetic variation.
- **DNA Comparison**: Functionality to compare the DNA strands of two pAequor instances, calculating and displaying the percentage of DNA shared.

## How to Use

1. **Setup**: Make sure Node.js is installed on your system to run JavaScript code outside a browser.
2. **Creating a pAequor Instance**:
   - Utilize `pAequorFactory(specimenNum, dna)`, providing a unique `specimenNum` and an optional DNA strand. If no DNA strand is provided, a random one is generated.
3. **Mutating DNA**:
   - Invoke the `mutate()` method on a pAequor instance to randomly alter one of its DNA bases.
4. **Comparing DNA**:
   - Use the `compareDNA(otherPaequorInstance)` method to identify and display the percentage of DNA shared between two instances.

## Project Structure

- `returnRandBase()`: A function that returns a random DNA base.
- `mockUpStrand()`: A function that generates a random DNA strand.
- `pAequorDatabase`: An object that stores all pAequor instances by their unique identifier.
- `checkIfUnique(specimenNum)`: A function that checks for the uniqueness of a pAequor's identifier.
- `pAequorFactory(specimenNum, dna)`: A factory function that creates new pAequor instances with unique identifiers and DNA strands.

## Challenges and Learning Outcomes

- **Basic JavaScript Operations**: Enhanced understanding of loops, conditionals, and functions.
- **Advanced Concepts**: Gained insights into object-oriented programming, error handling, and random data generation.
- **Biological Simulations**: Acquired knowledge on simulating biological concepts through programming.

## Future Enhancements

- Development of a user interface for interactive engagement with pAequor instances.
- Expansion of the biological simulation aspects to include natural selection and population dynamics.
- Code optimization for performance, particularly for simulations involving large populations of pAequor.

