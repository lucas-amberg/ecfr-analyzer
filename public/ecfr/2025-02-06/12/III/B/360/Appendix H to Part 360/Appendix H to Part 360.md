# Appendix H to Part 360—Possible File Combinations for Deposit Data


A covered institution must provide deposit data using separate deposit, sweep/automated credit, hold, customer, and deposit-customer join files. The simplest file structure involves providing one of each file. This basic file format is shown in Figure 1.


Multiple combinations of deposit, sweep/automated credit, hold, customer, and deposit-customer join files are permissible, but only in the following circumstances:


1. Each separate deposit file must have companion sweep/automated credit and hold files covering the same deposit accounts.


2. A single customer file may be submitted covering customers affiliated with deposit accounts in one or more deposit files as long as the customer file contains information on all of the customers affiliated with the deposit files.


3. Several customer files may be submitted as long as each separate customer file contains information on all of the customers affiliated with the associated deposit files.


Figure 2 shows a permissible file configuration using a single Customer File affiliated with Deposit File A and Deposit File B. As required, Deposit File A has a companion Sweep/Automated Credit File A and Hold File A. The same is true for Deposit File B.


Another permissible combination of files is shown in Figure 3, which is a variation of the basic data file structure shown in Figure 1.



---

[N] [73 FR 41197, July 17, 2008]







