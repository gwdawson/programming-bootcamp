## Supermarket Queue

You are a middle manager in a large supermarket chain, tasked with overseeing the checkout queue.

Every once in a while, your boss radios you to ask how long the current queues will take to process. You take this job seriously, so you've decided to write a function - called queueTime - to solve the problem.

The function has two input variables:

Customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.

Checkouts: a positive integer, the number of checkout tills.

The function should return the time required to process all the customers.

- There is only ONE queue.
- The order of the queue NEVER changes.
- Assume that the front person in the queue (i.e. the first element in the array) proceeds to a till as soon as it becomes free.

EXAMPLES:

```javascript
queueTime([2, 2, 2], 1)
// should return 6
// because when there is only one checkout, the total time is just the sum of the times
```

```javascript
queueTime([2, 10], 2)
// should return 10
// because each customer has immediate access to a checkout and the slowest customer is 10
```

```javascript
queueTime([2, 2, 2], 2)
// should return 4
// because the first 2 customers have immediate access to a checkout and then one customer is left to be processed
```

```javascript
queueTime([2, 3, 10], 2)
// should return 12, because the first checkout will deal with the 2 minute customer, and then the 10 minute customer - totalling 12 minutes
```
