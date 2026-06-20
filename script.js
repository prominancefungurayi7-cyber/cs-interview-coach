/* ══════════════════════════════════════════════════════════════════════════
   CS INTERVIEW COACH — SCRIPT
   ══════════════════════════════════════════════════════════════════════════ */

const questionBank = {

  /* ── DATA STRUCTURES & ALGORITHMS ─────────────────────────────────────── */
  dsa: {
    beginner: [
      {
        question: "What is the difference between a stack and a queue?",
        keywords: ["lifo","fifo","push","pop","enqueue","dequeue"],
        expectedPoints: [
          "Define stack as LIFO (Last In, First Out).",
          "Define queue as FIFO (First In, First Out).",
          "Stack operations: push (insert) and pop (remove from top).",
          "Queue operations: enqueue (insert at rear) and dequeue (remove from front).",
          "Give one practical use case for each."
        ],
        expectedReply: "Start with a clear definition for both, compare their order of access, name their operations, and close with a real-world use case.",
        modelAnswer: "A stack follows LIFO — the last element inserted is the first removed. Key operations are push (add to top) and pop (remove from top). A practical example is function call stacks or undo operations. A queue follows FIFO — the first element inserted is the first removed. Key operations are enqueue (add to rear) and dequeue (remove from front). A practical example is printer job scheduling or message queues.",
        followUp: "Which would you use to implement breadth-first search, and why?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is binary search and when can it be used?",
        keywords: ["sorted","middle","halve","o(log n)","log","divide"],
        expectedPoints: [
          "Binary search only works on sorted data.",
          "It checks the middle element and discards half the range each step.",
          "Time complexity is O(log n).",
          "Best applied to arrays with random-access indexing."
        ],
        expectedReply: "Define binary search, state the sorted-data prerequisite, describe the halving process, then give the time complexity.",
        modelAnswer: "Binary search is an efficient algorithm for finding a target in a sorted array. It works by comparing the target to the middle element: if the target is smaller, search the left half; if larger, search the right half. This halves the search space each step, giving a time complexity of O(log n) — much faster than linear search's O(n) for large datasets.",
        followUp: "Why would binary search return incorrect results on an unsorted array?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is the difference between an array and a linked list?",
        keywords: ["index","contiguous","node","pointer","random access","dynamic"],
        expectedPoints: [
          "Arrays store elements in contiguous memory; linked lists use nodes with pointers.",
          "Arrays support O(1) random access; linked lists require O(n) traversal.",
          "Linked lists support O(1) insertion/deletion at known positions; arrays may require O(n) shifting.",
          "Arrays have a fixed size (or require costly resizing); linked lists grow dynamically."
        ],
        expectedReply: "Compare memory layout first, then access speed, then insertion/deletion, then memory management.",
        modelAnswer: "Arrays store elements in contiguous memory blocks, allowing O(1) random access by index. Linked lists consist of nodes, each holding data and a pointer to the next node, so access requires O(n) traversal. For insertions and deletions, linked lists excel — once you have the position, you only update pointers in O(1). Arrays require shifting elements, which is O(n). However, arrays are more cache-friendly and have lower memory overhead since they don't store pointers.",
        followUp: "Which structure is more cache-friendly, and why does that matter for performance?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is Big O notation?",
        keywords: ["complexity","time","space","growth","worst case","efficiency"],
        expectedPoints: [
          "Big O describes the upper-bound growth rate of an algorithm's time or space usage.",
          "It focuses on how performance scales with input size n.",
          "Common complexities: O(1), O(log n), O(n), O(n log n), O(n²).",
          "Helps compare algorithms regardless of hardware."
        ],
        expectedReply: "Define Big O, explain what it measures, list common complexities, and explain why it matters.",
        modelAnswer: "Big O notation is a mathematical way to describe how the performance of an algorithm grows as the input size n increases. It expresses the worst-case upper bound on time or space usage. Common examples: O(1) is constant time — independent of n; O(n) is linear; O(n²) is quadratic, typical of nested loops; O(log n) is logarithmic, typical of binary search. It allows us to compare algorithms in a hardware-independent way.",
        followUp: "What is the difference between time complexity and space complexity?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "Compare arrays and linked lists in terms of access and insertion.",
        keywords: ["random access","contiguous","insertion","deletion","memory","shifting"],
        expectedPoints: [
          "Arrays: O(1) access by index; O(n) insertion/deletion due to shifting.",
          "Linked lists: O(n) access by traversal; O(1) insertion/deletion with known position.",
          "Arrays use contiguous memory; linked lists use scattered nodes with pointers.",
          "Arrays are more cache-friendly; linked lists have higher pointer overhead."
        ],
        expectedReply: "Present this as a tradeoff table in your mind. Discuss access, insertion, deletion, then memory.",
        modelAnswer: "Arrays provide O(1) random access because all elements are stored contiguously — you can compute any element's address directly from its index. Insertions and deletions are O(n) because elements must be shifted. Linked lists cannot directly address elements by index, so access is O(n), requiring traversal from the head. However, insertions and deletions are O(1) once you have a reference to the position, since you only update pointers. Arrays are more cache-efficient due to spatial locality; linked lists carry pointer overhead per node.",
        followUp: "When would you choose a doubly linked list over a singly linked list?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Explain recursion and how the call stack is involved.",
        keywords: ["base case","recursive case","call stack","overflow","self","subproblem"],
        expectedPoints: [
          "Recursion is when a function calls itself to solve smaller subproblems.",
          "A base case is required to stop the recursive calls.",
          "Each call is pushed onto the call stack and popped when it returns.",
          "Without a base case, a stack overflow occurs."
        ],
        expectedReply: "Define recursion, explain the two required components (base case and recursive case), then describe what happens on the call stack.",
        modelAnswer: "Recursion is a technique where a function solves a problem by calling itself on progressively smaller subproblems. Every recursive function needs two things: a base case, which terminates the recursion when a condition is met, and a recursive case, which reduces the problem size. Each function call is pushed onto the call stack. When the base case is reached, calls start returning and are popped from the stack. If no base case exists or is never reached, the stack grows indefinitely and causes a stack overflow error.",
        followUp: "Can every recursive function be converted to an iterative one? What data structure helps?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is a hash table and how does it work?",
        keywords: ["hash function","key","value","collision","bucket","lookup"],
        expectedPoints: [
          "A hash table maps keys to values using a hash function.",
          "The hash function converts a key into an array index.",
          "Collisions occur when two keys hash to the same index.",
          "Common collision strategies: chaining (linked list at each bucket) or open addressing.",
          "Average-case lookup, insertion, and deletion are O(1)."
        ],
        expectedReply: "Explain the data structure, how the hash function works, what a collision is, and how it's resolved.",
        modelAnswer: "A hash table stores key-value pairs for fast access. A hash function maps each key to an index in an underlying array — ideally distributing keys evenly. Lookup, insertion, and deletion are O(1) on average because you can compute the index directly. Collisions happen when two keys produce the same index. Chaining handles this by storing a linked list at each bucket; open addressing finds the next available slot. A well-designed hash function and a low load factor keep performance near O(1).",
        followUp: "What is a load factor, and why does it matter for hash table performance?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is the difference between depth-first search (DFS) and breadth-first search (BFS)?",
        keywords: ["stack","queue","graph","tree","visited","level","path","deep"],
        expectedPoints: [
          "DFS explores as deep as possible before backtracking; BFS explores level by level.",
          "DFS uses a stack (or recursion); BFS uses a queue.",
          "BFS finds the shortest path in unweighted graphs.",
          "DFS uses less memory for wide graphs; BFS uses less memory for deep graphs."
        ],
        expectedReply: "Define each algorithm, name the data structure each uses, and compare their strengths.",
        modelAnswer: "DFS (depth-first search) explores a graph by going as deep as possible along each branch before backtracking. It uses a stack — either the call stack via recursion or an explicit stack. BFS (breadth-first search) explores nodes level by level, visiting all neighbors of the current node before moving deeper. It uses a queue. BFS guarantees the shortest path in an unweighted graph; DFS is often simpler for tasks like cycle detection or topological sorting. BFS can use more memory if the graph is wide; DFS can use more memory if the graph is very deep.",
        followUp: "Which would you use to find the shortest path in an unweighted graph, and why?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "How would you detect a cycle in a linked list?",
        keywords: ["fast","slow","floyd","pointer","tortoise","hare","cycle","meet"],
        expectedPoints: [
          "Floyd's cycle detection: use two pointers — slow (1 step) and fast (2 steps).",
          "If a cycle exists, the fast pointer eventually catches the slow pointer.",
          "If fast reaches null, no cycle exists.",
          "Time complexity O(n); space complexity O(1)."
        ],
        expectedReply: "Name the algorithm first, explain how both pointers move, then explain why they must meet if a cycle exists.",
        modelAnswer: "Floyd's cycle detection algorithm (the tortoise and hare) uses two pointers. The slow pointer advances one node per step; the fast pointer advances two. If a cycle exists, the fast pointer will lap the slow pointer and they will eventually meet inside the cycle. If the fast pointer reaches null, the list is acyclic. Time complexity is O(n) and space complexity is O(1) — no extra data structures are needed.",
        followUp: "Once you've detected a cycle, how would you find the node where it begins?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Explain how quicksort works and analyse its complexity.",
        keywords: ["pivot","partition","recursion","o(n log n)","worst case","o(n²)"],
        expectedPoints: [
          "Quicksort selects a pivot and partitions elements into less-than and greater-than groups.",
          "It then recursively sorts both partitions.",
          "Average time complexity O(n log n); worst case O(n²) with a bad pivot.",
          "In-place sort with O(log n) average stack space.",
          "Pivot selection (random, median-of-three) improves worst-case behaviour."
        ],
        expectedReply: "Explain the pivot and partition step, then the recursive calls, then discuss average vs worst-case complexity.",
        modelAnswer: "Quicksort picks a pivot element and partitions the array so that all elements smaller than the pivot are on the left and all larger are on the right. It then recursively applies the same process to both partitions. Average time complexity is O(n log n) because each partition level takes O(n) work and there are on average O(log n) levels. Worst case is O(n²), which occurs when the pivot is always the smallest or largest element — creating unbalanced partitions. Using a random pivot or median-of-three selection greatly reduces this risk. Space complexity is O(log n) on average for the recursion stack.",
        followUp: "Why might merge sort be preferred over quicksort for linked lists?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is dynamic programming and how does it differ from recursion?",
        keywords: ["memoization","tabulation","subproblem","overlap","optimal","cache"],
        expectedPoints: [
          "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results.",
          "Memoization (top-down): cache results of recursive calls.",
          "Tabulation (bottom-up): fill a table iteratively.",
          "Avoids redundant computation present in naive recursion.",
          "Applicable when the problem has optimal substructure and overlapping subproblems."
        ],
        expectedReply: "Define dynamic programming, contrast it with naive recursion, then explain memoization vs tabulation.",
        modelAnswer: "Dynamic programming (DP) is an optimisation technique for problems with overlapping subproblems and optimal substructure. Naive recursion recomputes the same subproblems multiple times — for Fibonacci, computing fib(40) recalculates fib(2) millions of times. DP stores each subproblem's result so it is computed only once. Memoization (top-down) caches recursive results; tabulation (bottom-up) fills a table iteratively from the simplest subproblems upward. Both reduce exponential time to polynomial. Classic examples include Fibonacci, the 0/1 Knapsack problem, and Longest Common Subsequence.",
        followUp: "What are optimal substructure and overlapping subproblems, and why are both required for DP?",
        roles: ["backend","fullstack","graduate"]
      }
    ]
  },

  /* ── OBJECT-ORIENTED PROGRAMMING ──────────────────────────────────────── */
  oop: {
    beginner: [
      {
        question: "What is encapsulation in object-oriented programming?",
        keywords: ["data","methods","class","hide","access","getter","setter"],
        expectedPoints: [
          "Bundling data (fields) and the methods that operate on them into a single class.",
          "Hiding internal state from outside access.",
          "Controlling access using access modifiers (private, public, protected).",
          "Exposing a controlled interface through getters and setters."
        ],
        expectedReply: "Define encapsulation, explain why hiding state matters, then give a practical example using access modifiers.",
        modelAnswer: "Encapsulation is the OOP principle of packaging an object's data and the methods that operate on that data into a single class, while restricting direct access to internal state. By making fields private and exposing only getter and setter methods, you control how external code reads or modifies data. This prevents unintended corruption of state and makes code easier to maintain — you can change the internal representation without breaking external code.",
        followUp: "What is the difference between private and protected access modifiers?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is inheritance in OOP?",
        keywords: ["parent","child","extends","base","derived","reuse","superclass","subclass"],
        expectedPoints: [
          "Inheritance allows a child class to acquire properties and methods of a parent class.",
          "Promotes code reuse — shared behaviour is defined once in the parent.",
          "The child class can extend or override inherited behaviour.",
          "Establishes an 'is-a' relationship between classes."
        ],
        expectedReply: "Define inheritance, explain the parent/child relationship, discuss code reuse, and mention method overriding.",
        modelAnswer: "Inheritance is an OOP mechanism that allows a child (subclass) to inherit the attributes and methods of a parent (superclass). It promotes code reuse — common behaviour is defined once and shared across subclasses. A child class can also override inherited methods to provide specific behaviour. For example, a Vehicle parent class might define a move() method; a Car subclass inherits it but could override move() with car-specific logic. Inheritance establishes an is-a relationship: a Car is-a Vehicle.",
        followUp: "What is the difference between inheritance and composition? When would you prefer composition?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What are the four core principles of OOP?",
        keywords: ["encapsulation","inheritance","polymorphism","abstraction"],
        expectedPoints: [
          "Encapsulation — bundling data and methods, hiding internal state.",
          "Inheritance — child classes reuse and extend parent class behaviour.",
          "Polymorphism — same interface behaves differently for different types.",
          "Abstraction — hiding complexity and exposing only essential details."
        ],
        expectedReply: "List all four principles and give a one-sentence definition for each.",
        modelAnswer: "The four core OOP principles are: Encapsulation — bundling data and methods in a class while hiding internal state; Inheritance — allowing a subclass to reuse and extend a superclass's behaviour; Polymorphism — letting the same interface or method name produce different behaviour depending on the object; and Abstraction — hiding complex implementation details and exposing only what is necessary. Together, these principles promote clean, reusable, and maintainable code design.",
        followUp: "Can you give a real-world analogy for each of the four principles?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "Explain polymorphism with a concrete example.",
        keywords: ["override","interface","method","same","different","runtime","compile"],
        expectedPoints: [
          "Polymorphism means one interface, many behaviours.",
          "Runtime polymorphism: method overriding via inheritance.",
          "Compile-time polymorphism: method overloading.",
          "A concrete example (e.g. Animal → makeSound, Dog → bark, Cat → meow)."
        ],
        expectedReply: "Define polymorphism, distinguish compile-time from runtime, and walk through a clear example showing the same method call producing different output.",
        modelAnswer: "Polymorphism allows the same interface to represent different underlying forms. Runtime polymorphism occurs when a parent class reference calls an overridden method and the correct subclass version executes. For example: Animal is a base class with makeSound(). Dog overrides it to output 'Woof' and Cat overrides it to output 'Meow'. Code that accepts an Animal reference can call makeSound() without knowing the exact subtype — the correct version runs at runtime. Compile-time polymorphism (overloading) uses the same method name with different parameter signatures, resolved at compile time.",
        followUp: "What is the Liskov Substitution Principle, and how does it relate to polymorphism?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is an abstract class, and how does it differ from an interface?",
        keywords: ["abstract","interface","implement","extend","method","contract","instantiate"],
        expectedPoints: [
          "An abstract class can have concrete and abstract methods; cannot be instantiated.",
          "An interface defines only a contract — all methods are implicitly abstract (in most languages).",
          "A class can implement multiple interfaces but (usually) extend only one abstract class.",
          "Use abstract classes for shared implementation; interfaces for capability contracts."
        ],
        expectedReply: "Define both, compare their capabilities, then give a guideline for when to use each.",
        modelAnswer: "An abstract class is a class that cannot be instantiated and may contain both fully implemented (concrete) methods and abstract methods that subclasses must override. An interface defines a pure contract — a set of method signatures with no implementation (though some modern languages allow default methods). A key difference is that a class can implement multiple interfaces but can only extend one abstract class. Use abstract classes when subclasses share common implementation; use interfaces to define capabilities that unrelated classes can share (e.g., Serializable, Comparable).",
        followUp: "In Java or C#, why can a class implement multiple interfaces but only extend one class?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Differentiate abstraction from encapsulation.",
        keywords: ["hide complexity","hide data","interface","implementation","what","how"],
        expectedPoints: [
          "Abstraction hides complexity — exposes what an object does, not how.",
          "Encapsulation hides internal state — controls who can access or modify data.",
          "Abstraction is about design-level simplification; encapsulation is about data protection.",
          "Both reduce coupling but solve different design problems."
        ],
        expectedReply: "Use a direct contrast: what abstraction hides vs what encapsulation hides. Then give a one-line example of each.",
        modelAnswer: "Abstraction hides implementation complexity and exposes only the relevant behaviour. You know that a car has an accelerate() method; you don't need to know how the engine works. Encapsulation hides internal state data and restricts access to it. The car's engine RPM is a private field — you can't set it directly; you call accelerate() which manages it. In short: abstraction is about what an object does (the interface); encapsulation is about protecting how its state is stored.",
        followUp: "Give one class example that demonstrates both abstraction and encapsulation simultaneously.",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "What are the SOLID principles?",
        keywords: ["single responsibility","open closed","liskov","interface segregation","dependency inversion"],
        expectedPoints: [
          "S — Single Responsibility: a class should have only one reason to change.",
          "O — Open/Closed: open for extension, closed for modification.",
          "L — Liskov Substitution: subtypes must be substitutable for their base type.",
          "I — Interface Segregation: prefer smaller, specific interfaces over fat interfaces.",
          "D — Dependency Inversion: depend on abstractions, not concrete implementations."
        ],
        expectedReply: "Name and briefly define all five principles. Give a one-line practical implication for at least two.",
        modelAnswer: "SOLID is a set of five OOP design principles. Single Responsibility: each class should have one clearly defined purpose; mixing concerns makes classes harder to test and change. Open/Closed: a class should be extendable without modifying its source — achieve this via inheritance or composition. Liskov Substitution: a subclass must behave correctly wherever its parent class is used. Interface Segregation: don't force clients to depend on methods they don't use — split large interfaces into focused ones. Dependency Inversion: high-level modules should not depend on low-level modules; both should depend on abstractions like interfaces.",
        followUp: "Walk through a real example where violating the Single Responsibility Principle caused a maintenance problem.",
        roles: ["backend","fullstack","graduate"]
      }
    ]
  },

  /* ── DATABASES ─────────────────────────────────────────────────────────── */
  dbms: {
    beginner: [
      {
        question: "What is a primary key in a database?",
        keywords: ["unique","identify","row","record","null","constraint"],
        expectedPoints: [
          "Uniquely identifies each row in a table.",
          "Cannot contain NULL values.",
          "A table can have only one primary key (can be composite).",
          "Often used as a foreign key target in related tables."
        ],
        expectedReply: "Define it, state the uniqueness and non-null constraints, then mention its role in table relationships.",
        modelAnswer: "A primary key is a column or combination of columns that uniquely identifies every row in a table. It enforces two constraints: uniqueness (no two rows can share the same key value) and NOT NULL (every row must have a value). A table can have only one primary key, though it may span multiple columns (composite key). Primary keys are the foundation of relational integrity — foreign keys in other tables reference them to establish relationships.",
        followUp: "What is the difference between a primary key and a unique key?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is the difference between SQL and NoSQL databases?",
        keywords: ["relational","table","schema","document","scalable","flexible","structured"],
        expectedPoints: [
          "SQL databases are relational with a fixed schema; NoSQL are non-relational with flexible schemas.",
          "SQL uses structured tables; NoSQL uses documents, key-value pairs, graphs, etc.",
          "SQL enforces ACID properties; NoSQL often sacrifices consistency for availability and scalability.",
          "SQL is ideal for structured data with complex queries; NoSQL for large volumes of varied data."
        ],
        expectedReply: "Compare data model, schema flexibility, consistency guarantees, and use cases.",
        modelAnswer: "SQL (relational) databases store data in structured tables with a predefined schema. They enforce ACID properties — Atomicity, Consistency, Isolation, Durability — ensuring reliable transactions. Examples: MySQL, PostgreSQL. NoSQL databases use flexible data models: document stores (MongoDB), key-value stores (Redis), column-family stores (Cassandra), and graph databases (Neo4j). They sacrifice strict consistency in favour of horizontal scalability and schema flexibility. SQL is best for structured data and complex queries; NoSQL is better for large-scale, varied, or rapidly evolving data.",
        followUp: "When would you choose a NoSQL database over a relational one for a new project?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "What is normalization and why is it important?",
        keywords: ["redundancy","anomaly","consistency","1nf","2nf","3nf","decompose"],
        expectedPoints: [
          "Normalization organises tables to reduce data redundancy.",
          "Prevents update, insert, and delete anomalies.",
          "Normal forms (1NF, 2NF, 3NF) are progressive levels of normalization.",
          "Improves data integrity and consistency."
        ],
        expectedReply: "Define normalization, explain what anomalies it prevents, mention normal forms, and note the performance tradeoff.",
        modelAnswer: "Normalization is the process of organising database tables to minimise redundancy and dependency. Redundant data causes anomalies: update anomalies (changing data in one place but not another), insert anomalies (inability to add data without unrelated data), and delete anomalies (losing data unintentionally). Normal forms define stages of normalization — 1NF removes repeating groups, 2NF eliminates partial dependencies, 3NF removes transitive dependencies. A well-normalised schema improves consistency but may require more joins for queries, which can affect read performance.",
        followUp: "When might you intentionally denormalise a database, and what are the risks?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Explain the difference between INNER JOIN and LEFT JOIN.",
        keywords: ["matching","rows","left table","null","unmatched","outer"],
        expectedPoints: [
          "INNER JOIN returns only rows where there is a match in both tables.",
          "LEFT JOIN returns all rows from the left table and matched rows from the right.",
          "Unmatched right-side rows are filled with NULL in a LEFT JOIN.",
          "Used when you want to include records that have no related entry."
        ],
        expectedReply: "Define each join and explicitly describe what happens when there is no match on the right side.",
        modelAnswer: "An INNER JOIN returns only the rows where a matching value exists in both tables — non-matching rows are excluded from the result. A LEFT JOIN (also called LEFT OUTER JOIN) returns all rows from the left table. For each left row, if a match exists in the right table, the joined columns appear; if no match exists, the right columns are filled with NULL. Use a LEFT JOIN when you want to include records from the left table even if they have no corresponding record in the right table — for example, listing all customers including those with no orders.",
        followUp: "What is the difference between LEFT JOIN and FULL OUTER JOIN?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What are ACID properties in databases?",
        keywords: ["atomicity","consistency","isolation","durability","transaction","rollback"],
        expectedPoints: [
          "Atomicity: a transaction is all-or-nothing.",
          "Consistency: a transaction brings the database from one valid state to another.",
          "Isolation: concurrent transactions behave as if executed sequentially.",
          "Durability: committed transactions survive system failures."
        ],
        expectedReply: "Name all four properties, define each clearly, and give one example of what breaks without each.",
        modelAnswer: "ACID properties guarantee reliable database transactions. Atomicity ensures a transaction is treated as a single unit — if any part fails, the whole transaction rolls back (e.g., a failed bank transfer doesn't debit without crediting). Consistency ensures a transaction moves the database from one valid state to another, respecting all constraints. Isolation ensures that concurrent transactions don't interfere — intermediate states are not visible to other transactions. Durability guarantees that once a transaction is committed, it persists even if the system crashes, through write-ahead logs and persistent storage.",
        followUp: "How do databases implement isolation, and what are the isolation levels?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "What is indexing in databases and what are the tradeoffs?",
        keywords: ["faster","b-tree","lookup","performance","write","storage","overhead"],
        expectedPoints: [
          "An index is a data structure (often a B-tree) that speeds up data retrieval.",
          "Reduces full-table scans for query performance.",
          "Tradeoff: additional storage space per index.",
          "Tradeoff: inserts, updates, and deletes are slower because indexes must be maintained.",
          "Too many indexes can harm write-heavy workloads."
        ],
        expectedReply: "Explain what an index is, describe how it improves reads, then clearly state both storage and write-performance tradeoffs.",
        modelAnswer: "A database index is an auxiliary data structure — typically a B-tree — that stores pointers to rows sorted by the indexed column's values. Without an index, a query must scan every row (O(n) full-table scan). With an index, the database locates matching rows in O(log n). The tradeoffs are real: every index consumes additional disk space and must be updated on every insert, update, or delete — increasing write latency. Indexes are most valuable on columns frequently used in WHERE clauses, JOIN conditions, or ORDER BY. Over-indexing write-heavy tables creates more overhead than benefit.",
        followUp: "What is the difference between a clustered index and a non-clustered index?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Explain database transactions and concurrency control.",
        keywords: ["lock","deadlock","optimistic","pessimistic","serializable","phantom","dirty read"],
        expectedPoints: [
          "A transaction is a logical unit of work that must complete atomically.",
          "Concurrency problems: dirty reads, non-repeatable reads, phantom reads.",
          "Locking strategies: pessimistic (lock before access) vs optimistic (check at commit).",
          "Deadlock: two transactions each wait for the other's lock.",
          "Isolation levels control which concurrency problems are tolerated."
        ],
        expectedReply: "Define transactions, name the concurrency anomalies, explain locking strategies, and define deadlock.",
        modelAnswer: "A database transaction groups multiple operations into an atomic unit — either all succeed or all are rolled back. Concurrency problems arise when multiple transactions run simultaneously: dirty reads occur when a transaction reads uncommitted changes from another; non-repeatable reads occur when the same read returns different values within a transaction; phantom reads occur when new rows appear between two reads. Pessimistic locking locks resources before accessing them, preventing conflicts but risking deadlock. Optimistic locking lets transactions proceed without locks and checks for conflicts at commit time. Deadlock occurs when two transactions hold locks the other needs — databases resolve it by aborting one transaction.",
        followUp: "What is the difference between pessimistic and optimistic concurrency control in practice?",
        roles: ["backend","fullstack","graduate"]
      }
    ]
  },

  /* ── OPERATING SYSTEMS ─────────────────────────────────────────────────── */
  os: {
    beginner: [
      {
        question: "What is an operating system and what are its main responsibilities?",
        keywords: ["manage","hardware","software","resources","interface","kernel"],
        expectedPoints: [
          "An OS is system software that manages hardware and software resources.",
          "Acts as an interface between applications and hardware.",
          "Manages processes, memory, file systems, devices, and security.",
          "Provides an abstraction layer so applications don't need to manage hardware directly."
        ],
        expectedReply: "Define the OS, state its role as an intermediary, and list its main resource management responsibilities.",
        modelAnswer: "An operating system is system software that manages a computer's hardware and software resources and provides a stable environment for applications. It acts as an intermediary between user programs and hardware so that applications don't need hardware-specific code. Key responsibilities include process management (scheduling and running programs), memory management (allocating and freeing RAM), file system management (organising and accessing files), device management (communicating with I/O hardware), and security and access control.",
        followUp: "What is the difference between the kernel and the user space?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is the difference between a process and a thread?",
        keywords: ["execution","memory","independent","shared","lightweight","context switch"],
        expectedPoints: [
          "A process is an independent program in execution with its own memory space.",
          "A thread is a unit of execution within a process, sharing its memory.",
          "Processes are isolated; threads within a process share heap and global data.",
          "Context switching between threads is faster than between processes.",
          "Threads are lighter to create; processes provide stronger isolation."
        ],
        expectedReply: "Define both, compare their memory models and isolation, then mention the performance implication.",
        modelAnswer: "A process is an instance of a program in execution, with its own private memory space including code, heap, and stack. Processes are isolated — one process cannot directly access another's memory. A thread is a unit of execution within a process. All threads in a process share the same heap and global memory, which enables fast communication but requires careful synchronisation to avoid race conditions. Creating a thread is cheaper than creating a process. Context switching between threads in the same process is faster because the memory space doesn't change.",
        followUp: "Why can multithreaded programs be harder to debug than single-threaded ones?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "What is virtual memory, and why is it useful?",
        keywords: ["disk","ram","pages","address space","page fault","swap","illusion"],
        expectedPoints: [
          "Virtual memory gives each process the illusion of a large private address space.",
          "The OS maps virtual addresses to physical RAM or disk (swap space).",
          "Allows programs larger than physical RAM to run.",
          "Uses paging to load/evict memory in fixed-size pages.",
          "A page fault occurs when a page is not in RAM and must be loaded from disk."
        ],
        expectedReply: "Define virtual memory, explain the virtual-to-physical address mapping, mention paging, and describe what happens on a page fault.",
        modelAnswer: "Virtual memory is a memory management technique that gives each process the illusion of a large, contiguous address space independent of physical RAM. The OS maintains a page table that maps virtual addresses to physical frames in RAM or to disk (swap space). Programs can be larger than physical RAM because the OS loads only the needed pages into RAM and swaps out less-used pages to disk. When a process accesses a page that isn't in RAM, a page fault occurs — the OS pauses the process, loads the page from disk, and resumes. Virtual memory also provides memory isolation between processes.",
        followUp: "What is thrashing, and how can it be mitigated?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Explain process scheduling and common scheduling algorithms.",
        keywords: ["cpu","scheduler","round robin","priority","sjf","fcfs","preemptive","burst"],
        expectedPoints: [
          "The scheduler decides which process runs on the CPU at any moment.",
          "FCFS (First Come First Served): simple but causes convoy effect.",
          "SJF (Shortest Job First): optimal average wait time but requires burst time prediction.",
          "Round Robin: time slices ensure fairness; good for interactive systems.",
          "Priority scheduling: higher-priority processes run first; can cause starvation."
        ],
        expectedReply: "Define scheduling, then describe at least three algorithms with their tradeoffs.",
        modelAnswer: "The CPU scheduler decides which process in the ready queue gets CPU time. First Come First Served (FCFS) is the simplest: processes run in arrival order. It's easy to implement but suffers from the convoy effect — a long process blocks all others. Shortest Job First (SJF) picks the process with the smallest CPU burst, minimising average waiting time, but requires predicting burst times and can starve longer processes. Round Robin assigns each process a fixed time slice (quantum) and cycles through them, ensuring fairness and good responsiveness for interactive workloads. Priority scheduling runs the highest-priority process first, which can cause starvation of low-priority processes unless aging is applied.",
        followUp: "What is the difference between preemptive and non-preemptive scheduling?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "What is a deadlock and how can it be prevented or resolved?",
        keywords: ["mutual exclusion","hold wait","circular wait","no preemption","banker","detect"],
        expectedPoints: [
          "Four necessary conditions: mutual exclusion, hold and wait, no preemption, circular wait.",
          "Prevention: eliminate one of the four conditions.",
          "Avoidance: Banker's algorithm checks if granting a request leaves the system in a safe state.",
          "Detection and recovery: let deadlocks occur, detect them via resource-allocation graphs, then recover by aborting or preempting a process.",
          "Ignorance: many systems (including Linux) simply ignore deadlocks (ostrich algorithm)."
        ],
        expectedReply: "Define deadlock, list the four conditions, then explain at least two strategies for handling it.",
        modelAnswer: "A deadlock occurs when a group of processes are each waiting for a resource held by another, creating a circular dependency that none can break. Four conditions must all hold simultaneously: mutual exclusion (resources can't be shared), hold and wait (processes hold resources while waiting for more), no preemption (resources can't be forcibly taken), and circular wait. Prevention eliminates at least one condition — for example, requiring processes to request all resources upfront (eliminates hold and wait). Avoidance uses algorithms like the Banker's Algorithm to only grant requests that leave the system in a safe state. Detection lets deadlocks occur and then identifies and resolves them by aborting or preempting processes.",
        followUp: "What is the Banker's Algorithm, and what is its main limitation in practice?",
        roles: ["backend","fullstack","graduate"]
      }
    ]
  },

  /* ── NETWORKING ────────────────────────────────────────────────────────── */
  networking: {
    beginner: [
      {
        question: "What is the difference between TCP and UDP?",
        keywords: ["reliable","connection","ordered","fast","datagram","handshake","acknowledgement"],
        expectedPoints: [
          "TCP is connection-oriented, UDP is connectionless.",
          "TCP guarantees delivery, ordering, and error-checking. UDP does not.",
          "TCP has more overhead; UDP is faster with lower latency.",
          "TCP: HTTP, email, file transfer. UDP: video streaming, gaming, DNS."
        ],
        expectedReply: "Compare by connection model, reliability guarantees, overhead, and use cases.",
        modelAnswer: "TCP (Transmission Control Protocol) is connection-oriented — it establishes a connection via a three-way handshake and guarantees ordered, reliable delivery through acknowledgements and retransmission. This makes it suitable for web browsing, file transfers, and emails. UDP (User Datagram Protocol) is connectionless — it sends packets without establishing a connection or guaranteeing delivery or order. This reduces overhead and latency, making UDP better for real-time applications like video streaming, online gaming, and DNS queries where occasional packet loss is acceptable but speed matters.",
        followUp: "Why is UDP often preferred for real-time streaming despite having no delivery guarantees?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is an IP address and what is the difference between IPv4 and IPv6?",
        keywords: ["address","32-bit","128-bit","identifier","network","unique","exhaustion"],
        expectedPoints: [
          "An IP address uniquely identifies a device on a network.",
          "IPv4: 32-bit, ~4.3 billion addresses, formatted as four octets (e.g. 192.168.1.1).",
          "IPv6: 128-bit, vastly larger address space, formatted in hexadecimal groups.",
          "IPv6 was created to address IPv4 address exhaustion."
        ],
        expectedReply: "Define IP addresses, then compare the two versions by bit size, address capacity, and format.",
        modelAnswer: "An IP address is a numerical label assigned to each device on a network, used to identify and locate it for communication. IPv4 uses 32 bits, producing about 4.3 billion unique addresses in dotted-decimal notation (e.g. 192.168.0.1). IPv4 address space is nearly exhausted. IPv6 was introduced to solve this — it uses 128 bits, providing approximately 340 undecillion unique addresses, formatted in hexadecimal colon-separated groups (e.g. 2001:0db8::1). IPv6 also includes built-in security features and simplified header formats.",
        followUp: "What is NAT (Network Address Translation) and why was it a temporary solution to IPv4 exhaustion?",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "What is DNS and how does a DNS lookup work?",
        keywords: ["domain","name","ip","resolve","resolver","root","authoritative"],
        expectedPoints: [
          "DNS (Domain Name System) translates domain names to IP addresses.",
          "A DNS lookup involves a recursive resolver, root name servers, TLD servers, and authoritative servers.",
          "Results are cached to reduce lookup time (TTL).",
          "Without DNS, users would need to remember IP addresses."
        ],
        expectedReply: "Define DNS, then walk through the lookup chain from resolver to authoritative server.",
        modelAnswer: "DNS (Domain Name System) is the internet's directory service — it translates human-readable domain names (e.g. google.com) into IP addresses. When you type a URL, your device queries a recursive DNS resolver (usually provided by your ISP or set manually). If the resolver doesn't have the answer cached, it queries a root name server, which directs it to the appropriate top-level domain (TLD) server (e.g. .com), which in turn points to the authoritative name server for that domain. The authoritative server returns the IP address, which is then cached for the duration of the record's TTL (Time To Live).",
        followUp: "What would happen to internet functionality if DNS were unavailable globally?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "Explain the OSI model and its seven layers.",
        keywords: ["physical","data link","network","transport","session","presentation","application"],
        expectedPoints: [
          "OSI has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
          "Each layer has a specific role and communicates with adjacent layers.",
          "Physical: bits and signals. Network: routing (IP). Transport: end-to-end (TCP/UDP). Application: user-facing protocols (HTTP, FTP).",
          "Useful as a reference model for understanding network communication."
        ],
        expectedReply: "List the seven layers in order, name their roles, and give one protocol example per layer if possible.",
        modelAnswer: "The OSI model divides network communication into seven layers. Physical (Layer 1) deals with raw bits and electrical signals. Data Link (Layer 2) handles frame delivery within a local network using MAC addresses (Ethernet). Network (Layer 3) manages logical addressing and routing using IP. Transport (Layer 4) provides end-to-end communication with TCP or UDP. Session (Layer 5) manages sessions and connections between applications. Presentation (Layer 6) handles data encoding, encryption, and compression. Application (Layer 7) provides user-facing network services like HTTP, FTP, and SMTP. In practice, the simpler TCP/IP model condenses these into four layers.",
        followUp: "How does the TCP/IP model differ from the OSI model, and which is more commonly used in practice?",
        roles: ["backend","fullstack","graduate"]
      },
      {
        question: "What is the difference between a switch and a router?",
        keywords: ["network","local","mac","ip","forward","layer","broadcast"],
        expectedPoints: [
          "A switch connects devices within the same LAN, forwarding based on MAC addresses.",
          "A router connects different networks and forwards packets based on IP addresses.",
          "Switches operate at Layer 2 (Data Link); routers at Layer 3 (Network).",
          "A home router typically combines both routing and switching functionality."
        ],
        expectedReply: "Define both devices, state the OSI layer each operates at, and compare their scopes.",
        modelAnswer: "A switch operates at Layer 2 (Data Link) of the OSI model. It connects devices within the same local area network and forwards frames based on MAC addresses — maintaining a MAC address table to send data only to the correct port, reducing unnecessary traffic. A router operates at Layer 3 (Network). It connects different networks — such as a home network to the internet — and forwards packets based on destination IP addresses, using routing tables. A typical home router integrates both a router and a switch, as well as a wireless access point.",
        followUp: "Can a switch reduce network congestion compared to a hub? Explain how.",
        roles: ["backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "What is HTTPS and how does TLS work?",
        keywords: ["ssl","tls","certificate","encrypt","handshake","public key","symmetric","asymmetric"],
        expectedPoints: [
          "HTTPS is HTTP over TLS — encrypts data in transit.",
          "TLS uses asymmetric encryption during handshake to exchange a shared session key.",
          "Symmetric encryption (faster) is used for the actual data transfer.",
          "A certificate authority (CA) verifies the server's identity.",
          "Prevents eavesdropping, tampering, and man-in-the-middle attacks."
        ],
        expectedReply: "Explain what HTTPS adds over HTTP, then walk through the TLS handshake step by step.",
        modelAnswer: "HTTPS adds TLS (Transport Layer Security) on top of HTTP to encrypt communication between client and server. During the TLS handshake: the client sends its supported TLS versions and cipher suites; the server responds with its certificate (signed by a trusted CA) and public key; the client verifies the certificate and uses the server's public key to securely exchange a session key. Subsequent data is encrypted with that shared symmetric session key, which is faster than asymmetric encryption. This prevents eavesdropping (data is unreadable in transit), tampering (any modification is detectable), and impersonation (the certificate proves server identity).",
        followUp: "What is certificate pinning, and when would you use it in a mobile app?",
        roles: ["backend","fullstack","graduate"]
      }
    ]
  },

  /* ── WEB DEVELOPMENT ───────────────────────────────────────────────────── */
  web: {
    beginner: [
      {
        question: "What is the difference between HTML, CSS, and JavaScript?",
        keywords: ["structure","style","behavior","content","interaction","markup"],
        expectedPoints: [
          "HTML provides structure and content (elements, headings, paragraphs, forms).",
          "CSS provides visual styling (layout, colours, fonts, spacing).",
          "JavaScript provides interactivity and dynamic behaviour.",
          "They are separate concerns but work together in every webpage."
        ],
        expectedReply: "Assign a clear role to each technology and give a one-line practical example for each.",
        modelAnswer: "HTML (HyperText Markup Language) defines the structure and content of a webpage — headings, paragraphs, links, images, and forms. CSS (Cascading Style Sheets) controls the visual presentation — colours, fonts, spacing, layout, and responsiveness. JavaScript adds dynamic behaviour — responding to user interactions, updating the DOM without page reloads, fetching data from APIs, and running logic in the browser. A good analogy: HTML is the skeleton, CSS is the skin and clothing, and JavaScript is the muscle and movement.",
        followUp: "What is the critical rendering path, and how do these three technologies interact in the browser?",
        roles: ["frontend","fullstack","graduate"]
      },
      {
        question: "What is the DOM?",
        keywords: ["document","object","model","tree","html","nodes","javascript","manipulate"],
        expectedPoints: [
          "DOM stands for Document Object Model.",
          "It represents an HTML document as a tree of nodes (elements, text, attributes).",
          "JavaScript can read and modify the DOM to change what users see.",
          "Changes to the DOM trigger browser re-renders."
        ],
        expectedReply: "Define the DOM, explain its tree structure, and describe how JavaScript uses it.",
        modelAnswer: "The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects — each HTML element becomes a node with parent-child relationships. The document is the root; elements like <html>, <body>, and <div> are branches; text content forms leaf nodes. JavaScript can traverse, add, remove, or modify nodes using the DOM API — for example, document.getElementById() or querySelector(). Changes to the DOM are reflected immediately in the browser. Excessive DOM manipulation is a common source of performance issues in web apps.",
        followUp: "What is the difference between the DOM and the virtual DOM used by frameworks like React?",
        roles: ["frontend","fullstack","graduate"]
      },
      {
        question: "What is the difference between GET and POST HTTP methods?",
        keywords: ["request","url","body","idempotent","safe","query","parameters","data"],
        expectedPoints: [
          "GET retrieves data; POST submits data to the server.",
          "GET sends data in the URL query string; POST sends data in the request body.",
          "GET is idempotent and safe — no side effects; POST is not idempotent.",
          "GET requests can be cached and bookmarked; POST requests generally cannot."
        ],
        expectedReply: "Compare by purpose, data location, idempotency, and caching behaviour.",
        modelAnswer: "GET is used to retrieve data from the server. Parameters are passed in the URL query string, making requests visible, bookmarkable, and cacheable. GET is safe (no side effects) and idempotent — making the same request multiple times produces the same result. POST is used to submit data to create or update a resource. Data is sent in the request body, keeping it out of the URL. POST is not idempotent — submitting the same form twice could create two records. For sensitive data like passwords, POST is required because GET would expose values in URLs and browser history.",
        followUp: "What is the difference between PUT and PATCH in REST APIs?",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "What is an API and what is REST?",
        keywords: ["interface","request","response","http","stateless","resource","endpoint"],
        expectedPoints: [
          "API is an Application Programming Interface — a contract for how systems communicate.",
          "REST (Representational State Transfer) is an architectural style for HTTP APIs.",
          "REST constraints: stateless, resource-based URLs, standard HTTP methods.",
          "Resources identified by URLs; operations expressed through HTTP verbs.",
          "Responses commonly in JSON or XML."
        ],
        expectedReply: "Define API, then explain REST as an architectural style, covering its statelessness, resource model, and HTTP verbs.",
        modelAnswer: "An API (Application Programming Interface) defines how two software components communicate — a client requests data or actions; a server responds. REST (Representational State Transfer) is an architectural style for web APIs built on HTTP. Key principles: statelessness (the server stores no client session state — each request contains all needed information); resource-based URLs (e.g. /users/123 represents a user resource); standard HTTP verbs express operations (GET to read, POST to create, PUT/PATCH to update, DELETE to remove); and responses typically in JSON. REST's simplicity and use of existing HTTP infrastructure make it the most common API style.",
        followUp: "What is the difference between REST and GraphQL, and when would you choose GraphQL?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "What is the difference between localStorage and sessionStorage?",
        keywords: ["browser","persist","session","temporary","storage","key-value","client"],
        expectedPoints: [
          "Both store key-value data in the browser (client-side).",
          "localStorage persists until explicitly cleared — survives tab/browser close.",
          "sessionStorage is cleared when the tab or browser session ends.",
          "Neither is suitable for sensitive data — both are accessible via JavaScript."
        ],
        expectedReply: "Compare their lifetimes, then mention security considerations.",
        modelAnswer: "Both localStorage and sessionStorage are Web Storage APIs that store key-value pairs client-side in the browser. The critical difference is lifetime: localStorage persists indefinitely until cleared programmatically or by the user — it survives closing and reopening the browser. sessionStorage is scoped to the browser tab session; it's cleared when the tab is closed. Both have a ~5MB limit and are accessible via JavaScript on the same origin, which means neither is appropriate for sensitive data like auth tokens — those should use HttpOnly cookies instead.",
        followUp: "What are the security risks of storing authentication tokens in localStorage?",
        roles: ["frontend","fullstack","graduate"]
      },
      {
        question: "What is event bubbling in JavaScript?",
        keywords: ["event","propagate","child","parent","dom","capture","stopPropagation","target"],
        expectedPoints: [
          "Event bubbling: events trigger on the target element, then propagate up to parent elements.",
          "The opposite is event capturing (top-down).",
          "event.stopPropagation() halts further propagation.",
          "Useful for event delegation — attaching one listener to a parent instead of many to children."
        ],
        expectedReply: "Define bubbling with direction, contrast with capturing, explain stopPropagation, and mention event delegation.",
        modelAnswer: "Event bubbling describes how a DOM event fires first on the target element and then propagates upward through its ancestor elements. For example, clicking a button inside a div also triggers any click listeners on the div — and any parent above it. Event capturing is the opposite: events are caught top-down before reaching the target. stopPropagation() prevents further bubbling or capturing. Event delegation leverages bubbling productively: instead of attaching individual listeners to each child, you attach one listener to the parent and inspect event.target to determine which child triggered it — efficient for dynamic lists.",
        followUp: "How does event delegation improve performance in a large list of clickable items?",
        roles: ["frontend","fullstack"]
      },
      {
        question: "What is the difference between synchronous and asynchronous JavaScript?",
        keywords: ["blocking","non-blocking","callback","promise","async","await","event loop","queue"],
        expectedPoints: [
          "Synchronous code executes line by line; each operation blocks until complete.",
          "Asynchronous code allows other code to run while waiting (e.g. API calls, timers).",
          "JavaScript is single-threaded — async is managed by the event loop and task queue.",
          "Callbacks → Promises → async/await are progressive patterns for handling async operations."
        ],
        expectedReply: "Contrast blocking vs non-blocking, explain why async is necessary in JS, then trace the evolution of async patterns.",
        modelAnswer: "JavaScript runs on a single thread, so synchronous code blocks — each line must complete before the next begins. This is a problem for I/O operations like network requests, which can take seconds. Asynchronous JavaScript allows the main thread to continue while waiting for a result. The event loop manages this: async operations are offloaded (to the browser's Web APIs or Node.js APIs), and their callbacks or resolved values are placed in a task queue to be processed when the main thread is free. Callbacks were the original pattern but led to 'callback hell'. Promises improved chaining. Async/await syntax (built on Promises) makes async code read like synchronous code.",
        followUp: "What is the difference between a microtask queue and a macrotask queue in the JavaScript event loop?",
        roles: ["frontend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "What is CORS and why does it exist?",
        keywords: ["cross-origin","resource sharing","browser","preflight","header","same-origin","security"],
        expectedPoints: [
          "CORS is a browser security mechanism enforcing the same-origin policy.",
          "Prevents scripts on one origin from making requests to a different origin without permission.",
          "The server must include Access-Control-Allow-Origin headers to permit cross-origin requests.",
          "Preflight requests (OPTIONS) are sent for non-simple requests to check permission first.",
          "CORS is enforced by browsers — server-to-server calls are unaffected."
        ],
        expectedReply: "Explain what the same-origin policy is, why CORS exists, how headers work, and what a preflight request is.",
        modelAnswer: "CORS (Cross-Origin Resource Sharing) is a browser-enforced security mechanism based on the same-origin policy — by default, a script on origin A cannot make AJAX requests to origin B. CORS allows servers to explicitly permit cross-origin requests by including response headers like Access-Control-Allow-Origin. For non-simple requests (PUT, DELETE, or requests with custom headers), browsers first send a preflight OPTIONS request to ask the server if the actual request is permitted. If the server responds with the correct headers, the browser proceeds. CORS is only enforced by browsers — server-to-server communication is not subject to it.",
        followUp: "What is the difference between a simple request and a non-simple (preflight) request in CORS?",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ]
  },

  /* ── BEHAVIORAL ─────────────────────────────────────────────────────────── */
  behavioral: {
    beginner: [
      {
        question: "Tell me about yourself.",
        keywords: ["computer science","skills","projects","goals","background","experience"],
        expectedPoints: [
          "State your current academic or professional position clearly.",
          "Mention your main technical strengths or areas of focus.",
          "Reference one or two relevant projects or experiences.",
          "Connect your background to the specific opportunity.",
          "Keep it under 2 minutes — structured and confident."
        ],
        expectedReply: "Structure as: who you are → what you've done → what you're good at → what you're looking for. Keep it concise and relevant.",
        modelAnswer: "I am a computer science student with a strong foundation in software development and problem-solving. I have built practical projects using technologies including HTML, CSS, JavaScript, and Python, which have strengthened both my technical skills and my ability to think about user needs. I am particularly interested in building systems that are clean, reliable, and intuitive to use. I am now actively looking for an opportunity where I can contribute real value, continue growing as a developer, and work alongside experienced engineers.",
        followUp: "What project best demonstrates your current technical level and why?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "Why do you want to work in software development?",
        keywords: ["passion","problem","build","create","impact","technology","solve"],
        expectedPoints: [
          "Articulate a genuine reason beyond 'I like computers'.",
          "Connect to a specific interest: problem-solving, building products, impact.",
          "Reference a formative experience or project.",
          "Show long-term thinking — where you want to go."
        ],
        expectedReply: "Be specific and personal. Avoid generic answers. Tie your reason to a real experience or concrete motivation.",
        modelAnswer: "I am drawn to software development because it combines logical problem-solving with real, visible impact. I realised this when I built my first project that solved an actual problem I faced — the satisfaction of turning an idea into a working tool was unlike anything else. I enjoy the challenge of breaking down complex problems into solvable pieces and improving my solutions over time. Long-term, I want to build software that people genuinely use and find valuable, and I see a career in software development as the path that best aligns with that goal.",
        followUp: "Describe a moment when you realised software development was the right path for you.",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "Describe a challenging technical bug you solved.",
        keywords: ["problem","investigate","debug","solution","result","root cause","systematic"],
        expectedPoints: [
          "Describe a specific, real situation.",
          "Explain how you identified and investigated the problem.",
          "State the root cause and the fix.",
          "Mention the result and what you learned from it."
        ],
        expectedReply: "Use STAR: Situation, Task, Action, Result. Be specific. Focus on your debugging process and the lesson learned.",
        modelAnswer: "In one of my web projects, user interface updates were not reflecting correctly after actions — the state was getting out of sync. My task was to identify the root cause without breaking other features. I approached it systematically: I isolated the affected components, added console logging to track state changes, and traced the data flow step by step. I discovered the issue was a race condition in the event handler — two events were modifying shared state simultaneously. I fixed it by restructuring the update logic to be sequential. The application became stable, and the experience taught me the value of systematic debugging over random trial and error.",
        followUp: "How did you confirm that the fix was complete and didn't introduce new issues?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "How do you manage your time and prioritise tasks when working on a project?",
        keywords: ["prioritise","deadline","plan","task","urgent","important","manage","organize"],
        expectedPoints: [
          "Name a specific method or framework you use.",
          "Distinguish between urgent and important tasks.",
          "Show awareness of scope and deadlines.",
          "Mention how you handle unexpected blockers."
        ],
        expectedReply: "Be specific. Mention a real method, give an example of applying it, and show self-awareness about productivity.",
        modelAnswer: "I use a simple prioritisation approach based on urgency and importance. I list all active tasks, then identify which are critical for progress (blocking other tasks or near a deadline) versus important but flexible. I work through high-priority items first and break large tasks into smaller steps so I can track progress. I allocate focused time blocks for deep technical work. When unexpected blockers arise — like a dependency I'm waiting on — I switch to a secondary task rather than losing time. This keeps momentum even when things don't go as planned.",
        followUp: "Describe a time when unexpected work disrupted your plan, and how you handled it.",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "Tell me about a time you received critical feedback and how you handled it.",
        keywords: ["feedback","criticism","improve","react","constructive","growth","mentor","review"],
        expectedPoints: [
          "Describe a specific situation where you received meaningful feedback.",
          "Show you listened without becoming defensive.",
          "Explain what action you took based on the feedback.",
          "Show the outcome and what you learned."
        ],
        expectedReply: "Use STAR. Show emotional maturity, openness to growth, and a concrete action taken.",
        modelAnswer: "During a code review on one of my projects, a senior developer pointed out that my code was functional but had poor separation of concerns — logic, data handling, and presentation were mixed together. My initial reaction was defensive, but I listened carefully and asked clarifying questions. I went back and refactored the code using a cleaner structure with clearly separated responsibilities. The result was code that was significantly easier to read, test, and modify. That feedback changed how I approach architecture from the start, rather than fixing it later.",
        followUp: "How do you now apply that lesson proactively in new projects?",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "Tell me about a time you had to learn a new technology quickly.",
        keywords: ["situation","action","result","learn","deadline","resource","practice","adapt"],
        expectedPoints: [
          "Describe why rapid learning was required.",
          "Explain your specific learning strategy.",
          "Show a practical outcome from applying the learning.",
          "Reflect on what this revealed about how you learn best."
        ],
        expectedReply: "Use STAR and focus on your learning process — not just the outcome. Interviewers want to understand how you learn under pressure.",
        modelAnswer: "I had a project deadline that required me to implement a feature using a technology I hadn't used before. Rather than trying to learn everything at once, I identified the minimum I needed to deliver the feature — the key concepts and APIs I would actually use. I read the official documentation focused on those areas, ran small isolated experiments to verify my understanding, and then applied what I had learned directly to the project. I delivered the feature on time. The process showed me that focused, goal-directed learning is more effective than broad studying when time is constrained.",
        followUp: "How do you decide what to prioritise learning when time and resources are limited?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "Describe a time you disagreed with a technical decision and how you handled it.",
        keywords: ["disagree","opinion","communicate","team","decision","outcome","respect","evidence"],
        expectedPoints: [
          "Show you expressed your view clearly with reasoning — not emotion.",
          "Show you were open to the other perspective.",
          "Describe the outcome — whether your view was accepted or you committed to the team decision.",
          "Show professionalism regardless of the outcome."
        ],
        expectedReply: "Use STAR. The key signals: did you raise your view constructively? Did you accept the final decision professionally?",
        modelAnswer: "In a group project, a teammate proposed an architecture I felt would create maintenance problems as the project grew. I raised my concern by first understanding their reasoning, then presenting an alternative with specific examples of why it would be easier to extend later. We discussed both options and agreed to test my approach in a smaller module first. After the test, the team saw the benefits and adopted the structure for the rest of the project. The key for me was to argue based on evidence and tradeoffs — not preference — and to stay open to being wrong if the evidence went the other way.",
        followUp: "What would you do differently if the team had chosen to proceed with their original approach anyway?",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ]
  },

  /* ── PROJECT DEFENSE ───────────────────────────────────────────────────── */
  projects: {
    beginner: [
      {
        question: "Tell me about a project you built — what was it and what problem did it solve?",
        keywords: ["problem","purpose","features","technologies","result","user","impact"],
        expectedPoints: [
          "State what the project is in one clear sentence.",
          "Explain the real problem it solves or the need it addresses.",
          "Name the main technologies used.",
          "Describe the key features.",
          "Share the result or what you learned."
        ],
        expectedReply: "Start with the problem, then the solution, then the tech stack, then the outcome. Avoid listing features without context.",
        modelAnswer: "One project I built is a web-based study organiser designed to help students track their coursework and deadlines in one place. The problem was that I was using multiple disconnected tools — notes apps, calendars, and reminder apps — none of which were connected. I built it using HTML, CSS, and JavaScript with a clean interface that lets users add courses, tasks, and due dates, and see their workload at a glance. The project taught me how to manage more complex client-side state and how important it is to design for the actual user workflow rather than just building features.",
        followUp: "What was the hardest technical challenge you faced while building that project?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "How did you decide what technology stack to use for your project?",
        keywords: ["choice","technology","reason","fit","requirement","trade-off","familiar"],
        expectedPoints: [
          "Show you made a deliberate decision — not just 'what I knew'.",
          "Mention the project requirements that drove the choice.",
          "Acknowledge any tradeoffs.",
          "Show awareness of alternatives."
        ],
        expectedReply: "Don't just list the stack. Explain why each piece was a good fit for the project requirements.",
        modelAnswer: "I chose the stack based on what the project actually needed. For a client-side-only application, I didn't need a backend framework — plain JavaScript was sufficient and kept the project lightweight. I used CSS custom properties for theming because the design had to work well across different screen sizes. I considered using a framework like React but decided it would be over-engineering for the project's scope. The key principle I applied was: choose what solves the problem clearly, not what is most impressive. I would revisit that choice if the project needed real-time data, authentication, or multi-user functionality.",
        followUp: "Looking back, would you make the same technology choices today, or would you change anything?",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ],
    intermediate: [
      {
        question: "What was the hardest technical challenge in one of your projects, and how did you solve it?",
        keywords: ["challenge","debug","design","solution","tradeoff","problem","approach"],
        expectedPoints: [
          "Identify a real, specific technical challenge.",
          "Explain clearly why it was difficult.",
          "Describe your approach to solving it.",
          "State the outcome and what you learned."
        ],
        expectedReply: "Make the challenge specific and show your technical thinking. Vague challenges produce weak answers.",
        modelAnswer: "One of the hardest challenges I faced was keeping application state consistent across multiple views in a project with no framework. When the user made changes in one view, those changes weren't always reflecting correctly in related parts of the interface. The difficulty was that I had no central state management — each part of the UI was updating its own data independently. I solved it by creating a simple central data store that all components referenced, and a lightweight update mechanism that notified affected parts of the UI when state changed. The outcome was a much more stable application and a clear understanding of why centralised state management exists in frameworks.",
        followUp: "What tradeoffs did you accept in your solution, and how would you improve it with more time?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "How did you ensure your project was maintainable and well-structured?",
        keywords: ["structure","separation","comments","naming","refactor","readable","modular"],
        expectedPoints: [
          "Name specific practices used: naming conventions, separation of concerns, modularity.",
          "Mention whether you commented or documented the code.",
          "Describe how you organised files and folders.",
          "Show awareness of technical debt."
        ],
        expectedReply: "Give concrete examples of the decisions you made to keep the code readable and maintainable.",
        modelAnswer: "I focused on a few key practices. First, I separated concerns clearly — keeping logic, presentation, and data handling in distinct sections rather than mixing them. Second, I used consistent and descriptive naming for variables and functions so the code could be read without relying on comments for every line. I added comments only where the 'why' wasn't obvious from the code itself. I organised files by feature rather than by type, which made it easier to find everything related to a feature in one place. I also refactored regularly — any time I found myself copying code, I converted it to a reusable function.",
        followUp: "If another developer had to take over your project, how quickly do you think they could get up to speed?",
        roles: ["frontend","backend","fullstack","graduate"]
      }
    ],
    advanced: [
      {
        question: "If you were to redesign one of your projects from scratch today, what would you do differently?",
        keywords: ["scalability","architecture","maintainability","performance","ux","refactor","improved"],
        expectedPoints: [
          "Show reflection and honest self-assessment.",
          "Name a concrete improvement — architecture, testing, UX, performance.",
          "Explain why that improvement would matter.",
          "Show growth in thinking since building the original."
        ],
        expectedReply: "This is a maturity question. The strongest answers are specific and show that you now see problems you couldn't see before.",
        modelAnswer: "If I were redesigning one of my projects today, I would start with a clearer architecture before writing a single line of code. At the time, I began coding features immediately and restructured later — which created technical debt and made the codebase harder to extend. Today I would define the data flow and component boundaries first. I would also add automated testing from the start rather than testing manually, which cost me time and confidence when making changes. Finally, I would spend more time on the user experience early — I focused heavily on the technical implementation and underestimated how much UX decisions affect the perceived quality of the product.",
        followUp: "What systems or habits have you put in place since then to avoid making the same architectural mistakes?",
        roles: ["frontend","backend","fullstack","graduate"]
      },
      {
        question: "How would you scale your project to handle ten times more users?",
        keywords: ["scale","server","database","cache","load balancer","optimize","performance","horizontal"],
        expectedPoints: [
          "Identify the likely bottlenecks at higher scale (database, server, frontend delivery).",
          "Mention caching strategies (CDN for static assets, Redis for dynamic data).",
          "Discuss database optimisation (indexing, query optimisation, read replicas).",
          "Mention horizontal scaling and load balancing at the server level.",
          "Show awareness of the difference between premature optimisation and scaling when needed."
        ],
        expectedReply: "Think aloud from the bottleneck backward. Don't just list buzzwords — reason through which part breaks first at 10x load.",
        modelAnswer: "To scale to ten times more users, I'd first identify where the bottleneck would appear. For most applications, the database becomes the first constraint — I'd address that with query optimisation, appropriate indexing, and potentially read replicas for distributing read traffic. Static assets (images, JS, CSS) would move to a CDN to reduce server load and improve delivery speed globally. For dynamic data accessed frequently, I'd introduce a caching layer like Redis to reduce redundant database queries. At the server level, I'd add horizontal scaling behind a load balancer rather than increasing server size indefinitely. I'd also implement monitoring and profiling before assuming which part breaks — scale investments should follow data, not guesses.",
        followUp: "What is the difference between horizontal and vertical scaling, and when would you choose each?",
        roles: ["backend","fullstack","graduate"]
      }
    ]
  }
};

/* ══════════════════════════════════════════════════════════════════════════
   SESSION STATE
   ══════════════════════════════════════════════════════════════════════════ */
let sessionQuestions = [];
let currentIndex = 0;
let sessionScores = [];
let currentQuestionData = null;
let timerInterval = null;
let secondsElapsed = 0;
let allTimeStats = {
  sessions: 0,
  answered: 0,
  scores: [],
  history: []
};

/* ── DOM REFS ──────────────────────────────────────────────────────────── */
const $  = id => document.getElementById(id);
const el = {
  rolePath: $('rolePath'),
  topic: $('topic'),
  difficulty: $('difficulty'),
  questionCount: $('questionCount'),
  questionText: $('questionText'),
  questionTitle: $('questionTitle'),
  answer: $('answer'),
  feedbackText: $('feedbackText'),
  strengthList: $('strengthList'),
  improvementList: $('improvementList'),
  expectedPointsList: $('expectedPointsList'),
  expectedReplyText: $('expectedReplyText'),
  modelAnswerText: $('modelAnswerText'),
  followUpText: $('followUpText'),
  currentQuestionNumber: $('currentQuestionNumber'),
  totalQuestionNumber: $('totalQuestionNumber'),
  averageScore: $('averageScore'),
  timer: $('timer'),
  wordCount: $('wordCount'),
  charCount: $('charCount'),
  scorePill: $('scorePill'),
  roleBadge: $('roleBadge'),
  categoryBadge: $('categoryBadge'),
  difficultyBadge: $('difficultyBadge'),
  progressBadge: $('progressBadge'),
  progressFill: $('progressFill'),
  diffTag: $('diffTag'),
  scoreDisplay: $('scoreDisplay'),
  scoreBar: $('scoreBar'),
  scoreMsg: $('scoreMsg'),
  feedbackSection: $('feedbackSection'),
  questionSearch: $('questionSearch'),
  bankRoleFilter: $('bankRoleFilter'),
  bankCategoryFilter: $('bankCategoryFilter'),
  bankDifficultyFilter: $('bankDifficultyFilter'),
  questionBankList: $('questionBankList'),
  bankSummary: $('bankSummary'),
  statSessions: $('statSessions'),
  statAnswered: $('statAnswered'),
  statAvg: $('statAvg'),
  statBest: $('statBest'),
  historyList: $('historyList')
};

/* ── TABS ──────────────────────────────────────────────────────────────── */
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    $('tab-' + btn.dataset.tab).classList.add('active');
    if (btn.dataset.tab === 'progress') updateProgressTab();
  });
});

/* ── BUTTONS ───────────────────────────────────────────────────────────── */
$('startBtn').addEventListener('click', startInterview);
$('submitBtn').addEventListener('click', submitAnswer);
$('nextBtn').addEventListener('click', nextQuestion);
$('resetBtn').addEventListener('click', resetSession);
$('showSectionQuestionsBtn').addEventListener('click', showSectionQuestions);
el.answer.addEventListener('input', updateCounts);
el.questionSearch.addEventListener('input', renderQuestionBank);
el.bankRoleFilter.addEventListener('change', renderQuestionBank);
el.bankCategoryFilter.addEventListener('change', renderQuestionBank);
el.bankDifficultyFilter.addEventListener('change', renderQuestionBank);

/* ══════════════════════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════════════════════ */
function updateCounts() {
  const text = el.answer.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  el.wordCount.textContent = words + ' words';
  el.charCount.textContent = el.answer.value.length + ' chars';
}

function getAllQuestions() {
  const all = [];
  Object.keys(questionBank).forEach(cat => {
    Object.keys(questionBank[cat]).forEach(diff => {
      questionBank[cat][diff].forEach(item => {
        all.push({ ...item, category: cat, difficulty: diff });
      });
    });
  });
  return all;
}

function matchesRole(q, role) {
  return role === 'all' || q.roles.includes(role);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
          .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function formatCategory(c) {
  const m = { dsa:'Data Structures & Algorithms', oop:'Object-Oriented Programming',
    dbms:'Databases', os:'Operating Systems', networking:'Networking',
    web:'Web Development', behavioral:'Behavioral', projects:'Project Defense' };
  return m[c] || c;
}

function formatRole(r) {
  const m = { frontend:'Frontend', backend:'Backend', fullstack:'Full-Stack', graduate:'Graduate' };
  return m[r] || r;
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function renderList(target, items) {
  target.innerHTML = items.map(i => `<li>${escapeHtml(i)}</li>`).join('');
}

function calcAvg(arr) {
  if (!arr.length) return 0;
  return Math.round(arr.reduce((s, v) => s + v, 0) / arr.length);
}

function scoreColor(s) {
  if (s >= 85) return 'var(--green)';
  if (s >= 65) return 'var(--accent)';
  if (s >= 45) return 'var(--amber)';
  return 'var(--red)';
}

/* ══════════════════════════════════════════════════════════════════════════
   INTERVIEW SESSION
   ══════════════════════════════════════════════════════════════════════════ */
function startInterview() {
  const role = el.rolePath.value;
  const category = el.topic.value;
  const difficulty = el.difficulty.value;
  const countVal = el.questionCount.value;

  const pool = [...questionBank[category][difficulty]].filter(q => matchesRole(q, role));
  const requested = countVal === 'all' ? pool.length : Number(countVal);
  sessionQuestions = shuffleArray(pool).slice(0, Math.min(requested, pool.length));
  currentIndex = 0;
  sessionScores = [];

  el.totalQuestionNumber.textContent = sessionQuestions.length;
  el.roleBadge.textContent = el.rolePath.options[el.rolePath.selectedIndex].text;
  el.categoryBadge.textContent = el.topic.options[el.topic.selectedIndex].text;
  el.difficultyBadge.textContent = cap(difficulty);
  el.scorePill.textContent = '—';

  if (!sessionQuestions.length) {
    el.questionTitle.textContent = 'No Matching Questions';
    el.questionText.textContent = 'No questions match the selected role, category, and difficulty. Try adjusting the filters.';
    el.followUpText.textContent = 'Adjust your settings and try again.';
    el.feedbackSection.classList.add('hidden');
    return;
  }

  el.feedbackSection.classList.add('hidden');
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  currentQuestionData = sessionQuestions[currentIndex];
  const num = currentIndex + 1;
  const total = sessionQuestions.length;
  const diff = el.difficulty.value;

  el.questionTitle.textContent = `Question ${num} of ${total}`;
  el.questionText.textContent = currentQuestionData.question;
  el.followUpText.textContent = currentQuestionData.followUp;
  el.expectedReplyText.textContent = currentQuestionData.expectedReply;
  el.modelAnswerText.textContent = currentQuestionData.modelAnswer;
  renderList(el.expectedPointsList, currentQuestionData.expectedPoints);

  el.diffTag.textContent = cap(diff);
  el.diffTag.className = 'q-tag ' + diff;

  el.answer.value = '';
  updateCounts();
  el.feedbackSection.classList.add('hidden');
  el.scorePill.textContent = '—';
  el.currentQuestionNumber.textContent = num;
  el.progressBadge.textContent = `Question ${num} of ${total}`;
  el.progressFill.style.width = ((num - 1) / total * 100) + '%';
}

function submitAnswer() {
  const answer = el.answer.value.trim().toLowerCase();
  if (!answer) { alert('Please type your answer before submitting.'); return; }

  const words = answer.split(/\s+/).length;
  const keywords = currentQuestionData.keywords;
  let matched = keywords.filter(k => answer.includes(k.toLowerCase())).length;
  const ratio = matched / keywords.length;

  let score = 0;
  const strengths = [];
  const improvements = [];

  // Length scoring
  if (words >= 60) { score += 20; strengths.push('Strong answer length — you provided enough detail for a real interview response.'); }
  else if (words >= 35) { score += 12; strengths.push('Reasonable answer length.'); improvements.push('Expand your explanation — aim for at least 60 words for interview depth.'); }
  else { improvements.push('Your answer is too brief. Interviewers expect thorough explanations, not one-liners.'); }

  // Keyword coverage
  if (ratio >= 0.65) { score += 30; strengths.push('You covered the core technical concepts expected for this question.'); }
  else if (ratio >= 0.35) { score += 17; strengths.push('You touched on some relevant concepts.'); improvements.push('You missed key technical terms. Review the expected answer points below.'); }
  else { improvements.push('Your response lacks the core technical concepts expected. Study the model answer below.'); }

  // Reasoning
  if (/because|therefore|this means|so that|as a result|which means|this allows/.test(answer)) {
    score += 15; strengths.push('You explained your reasoning, not just stated definitions — that\'s a strong interview habit.');
  } else {
    improvements.push('Explain why things work, not just what they are. Use words like "because" or "which means".');
  }

  // Examples
  if (/for example|for instance|such as|e\.g\.|like when|consider/.test(answer)) {
    score += 15; strengths.push('You used a concrete example, which makes your answer more convincing and memorable.');
  } else {
    improvements.push('Add a brief example or analogy to ground your explanation — it signals practical understanding.');
  }

  // Depth
  if (words >= 100) { score += 10; strengths.push('Impressive depth — your answer shows thorough understanding.'); }
  else { improvements.push('Add more depth — discuss tradeoffs, consequences, or real-world scenarios.'); }

  // Comparison/tradeoff
  if (/however|whereas|on the other hand|while|compared to|tradeoff|trade-off|advantage|disadvantage/.test(answer)) {
    score += 10; strengths.push('You demonstrated tradeoff thinking — a hallmark of an experienced developer.');
  } else {
    improvements.push('Mention tradeoffs or alternatives where relevant — interviewers test for balanced thinking.');
  }

  if (score > 100) score = 100;
  if (!strengths.length) strengths.push('You attempted the question — keep practising to build confidence and coverage.');
  if (!improvements.length) improvements.push('Excellent answer. Focus on polishing your delivery and precision.');

  sessionScores.push(score);
  allTimeStats.answered++;
  allTimeStats.scores.push(score);
  el.averageScore.textContent = calcAvg(sessionScores) + '%';

  // Update UI
  el.scorePill.textContent = score + '%';
  el.scoreDisplay.textContent = score + '%';
  el.scoreDisplay.style.color = scoreColor(score);
  el.scoreBar.style.width = score + '%';
  el.scoreBar.style.background = scoreColor(score);

  if (score >= 85) el.scoreMsg.textContent = 'Strong response — ready for a real interview.';
  else if (score >= 70) el.scoreMsg.textContent = 'Good response — a little more depth needed.';
  else if (score >= 50) el.scoreMsg.textContent = 'Developing — study the model answer below.';
  else el.scoreMsg.textContent = 'Needs work — review the expected points carefully.';

  renderList(el.strengthList, strengths);
  renderList(el.improvementList, improvements);
  el.feedbackText.textContent = buildFeedback(score, matched, keywords.length);
  el.feedbackSection.classList.remove('hidden');

  // Smooth scroll to feedback
  el.feedbackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildFeedback(score, matched, total) {
  let msg = `You matched ${matched} out of ${total} core concept indicators. `;
  if (score >= 85) msg += 'This is a polished, interview-ready answer — clear definition, sound reasoning, and practical context.';
  else if (score >= 70) msg += 'A solid attempt. Adding more technical precision and a concrete example would push this to a top answer.';
  else if (score >= 50) msg += 'Partial understanding shown. The key gaps are in technical coverage and reasoning clarity.';
  else msg += 'This answer needs significant improvement. Focus on learning the core concepts and practise explaining them aloud.';
  msg += ` A strong answer here should include: ${currentQuestionData.expectedPoints.slice(0,3).join(' ')}`;
  return msg;
}

function nextQuestion() {
  if (!sessionQuestions.length) { alert('Start an interview session first.'); return; }
  if (currentIndex < sessionQuestions.length - 1) {
    currentIndex++;
    loadQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    endSession();
  }
}

function endSession() {
  clearInterval(timerInterval);
  const avg = calcAvg(sessionScores);

  allTimeStats.sessions++;
  allTimeStats.history.unshift({
    date: new Date().toLocaleDateString(),
    category: el.topic.options[el.topic.selectedIndex].text,
    difficulty: cap(el.difficulty.value),
    questions: sessionQuestions.length,
    avg
  });

  el.progressFill.style.width = '100%';
  el.progressBadge.textContent = 'Session complete';
  el.questionTitle.textContent = 'Session Complete';
  el.questionText.textContent = `You completed ${sessionQuestions.length} question${sessionQuestions.length !== 1 ? 's' : ''} with an average score of ${avg}%. Review your feedback and model answers, then start a new session to keep improving.`;
  el.followUpText.textContent = 'Start a new session or browse the Question Bank to review all topics.';
  el.scorePill.textContent = 'Avg: ' + avg + '%';
  el.currentQuestionNumber.textContent = sessionQuestions.length;
  el.feedbackSection.classList.add('hidden');
}

function resetSession() {
  clearInterval(timerInterval);
  sessionQuestions = [];
  sessionScores = [];
  currentIndex = 0;
  currentQuestionData = null;
  secondsElapsed = 0;

  el.questionTitle.textContent = '—';
  el.questionText.textContent = 'Configure your session settings on the left, then press Start Session to begin your mock interview.';
  el.followUpText.textContent = 'A follow-up question will appear once the session starts.';
  el.answer.value = '';
  updateCounts();

  el.feedbackSection.classList.add('hidden');
  el.currentQuestionNumber.textContent = '—';
  el.totalQuestionNumber.textContent = '—';
  el.averageScore.textContent = '—';
  el.timer.textContent = '00:00';
  el.scorePill.textContent = '—';
  el.roleBadge.textContent = 'All Roles';
  el.categoryBadge.textContent = 'DSA';
  el.difficultyBadge.textContent = 'Intermediate';
  el.progressBadge.textContent = 'Start a session to begin';
  el.progressFill.style.width = '0%';
  el.diffTag.textContent = 'Intermediate';
  el.diffTag.className = 'q-tag intermediate';
}

function startTimer() {
  clearInterval(timerInterval);
  secondsElapsed = 0;
  el.timer.textContent = '00:00';
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const m = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const s = String(secondsElapsed % 60).padStart(2, '0');
    el.timer.textContent = `${m}:${s}`;
  }, 1000);
}

/* ══════════════════════════════════════════════════════════════════════════
   QUESTION BANK
   ══════════════════════════════════════════════════════════════════════════ */
function showSectionQuestions() {
  el.bankCategoryFilter.value = el.topic.value;
  el.bankDifficultyFilter.value = el.difficulty.value;
  el.bankRoleFilter.value = el.rolePath.value;
  el.questionSearch.value = '';
  renderQuestionBank();
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelector('[data-tab="bank"]').classList.add('active');
  $('tab-bank').classList.add('active');
}

function renderQuestionBank() {
  const search = el.questionSearch.value.trim().toLowerCase();
  const role = el.bankRoleFilter.value;
  const cat = el.bankCategoryFilter.value;
  const diff = el.bankDifficultyFilter.value;

  const questions = getAllQuestions().filter(item => {
    const text = [item.question, ...item.expectedPoints, item.modelAnswer, item.category, ...item.roles].join(' ').toLowerCase();
    const matchSearch = !search || text.includes(search);
    const matchRole = role === 'all' || item.roles.includes(role);
    const matchCat = cat === 'all' || item.category === cat;
    const matchDiff = diff === 'all' || item.difficulty === diff;
    return matchSearch && matchRole && matchCat && matchDiff;
  });

  el.bankSummary.textContent = `Showing ${questions.length} question${questions.length !== 1 ? 's' : ''}`;

  if (!questions.length) {
    el.questionBankList.innerHTML = '<div class="empty-state">No questions match your filters. Try widening your search.</div>';
    return;
  }

  el.questionBankList.innerHTML = questions.map((item, idx) => `
    <div class="bank-item" id="bank-${idx}">
      <div class="bank-item-header" onclick="toggleBankItem(${idx})">
        <h3>${escapeHtml(item.question)}</h3>
        <svg class="bank-item-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div class="bank-tags">
        <span class="bank-tag">${formatCategory(item.category)}</span>
        <span class="bank-tag">${cap(item.difficulty)}</span>
        ${item.roles.map(r => `<span class="bank-tag">${formatRole(r)}</span>`).join('')}
      </div>
      <div class="bank-body">
        <div class="bank-section">
          <p class="bank-section-label">Expected Key Points</p>
          <ul>${item.expectedPoints.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
        </div>
        <div class="bank-section">
          <p class="bank-section-label">How to Structure Your Reply</p>
          <p>${escapeHtml(item.expectedReply)}</p>
        </div>
        <div class="bank-section">
          <p class="bank-section-label">Model Answer</p>
          <p>${escapeHtml(item.modelAnswer)}</p>
        </div>
        <div class="bank-section">
          <p class="bank-section-label">Possible Follow-Up</p>
          <p>${escapeHtml(item.followUp)}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleBankItem(idx) {
  const item = $(`bank-${idx}`);
  item.classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════════════════════
   PROGRESS TAB
   ══════════════════════════════════════════════════════════════════════════ */
function updateProgressTab() {
  el.statSessions.textContent = allTimeStats.sessions;
  el.statAnswered.textContent = allTimeStats.answered;
  const overall = calcAvg(allTimeStats.scores);
  el.statAvg.textContent = allTimeStats.scores.length ? overall + '%' : '—';
  const best = allTimeStats.scores.length ? Math.max(...allTimeStats.scores) : null;
  el.statBest.textContent = best !== null ? best + '%' : '—';

  if (!allTimeStats.history.length) {
    el.historyList.innerHTML = '<div class="empty-history">No session history yet. Complete a session to see your progress here.</div>';
    return;
  }

  el.historyList.innerHTML = allTimeStats.history.map(h => `
    <div class="history-item">
      <div class="history-meta">
        <strong>${h.category}</strong> · ${h.difficulty} · ${h.questions} questions · ${h.date}
      </div>
      <div class="history-score" style="color:${scoreColor(h.avg)}">${h.avg}%</div>
    </div>
  `).join('');
}

/* ── INIT ─────────────────────────────────────────────────────────────── */
renderQuestionBank();