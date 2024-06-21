# Reproduction steps

Install [just](https://github.com/casey/just) if you don't have it

1. Run `just db` in a terminal window.
2. Run `just seed` in a different terminal window
3. Run `just sql`, then run the following query:
   `SELECT * FROM product WHERE id INSIDE ["product:1"]` (expect a single result)
4. Open Surrealist and run the same query (expect a single result)
5. Run `just demo` (expect empty arrays)

# What I expected

That the same query works the same way.

# What I've found

The same query does not behave the same way for the **Javascript SDK**
