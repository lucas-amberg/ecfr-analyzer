# Appendix D to Part 360—Sweep/Automated Credit Account File Structure


This is the structure of the data file to provide information to the FDIC on funds residing in investment vehicles linked to each non-closed deposit account or sub-account: (1) Involved in sweep activity where the sweep investment vehicle is not a deposit and is reflected on the books and records of the covered institution or (2) which accepts automated credits. A single record should be used for each instance where funds affiliated with the deposit account are held in an alternative investment vehicle. For any alternative investment vehicle, a separate account may or may not exist. If an account exists for the investment vehicle, it should be noted in the record. If no account exists, then a null value for the Sweep/Automated Credit Account Identifiers should be provided, but the remainder of the data fields defined below should be populated.


For data provided in the Sweep/Automated Credit Account File, the total account balances and the number of accounts must be reconciled to subsidiary system control totals. The file will be in a tab- or pipe-delimited ASCII format. The files will be encrypted using an FDIC-supplied algorithm. The FDIC will transmit the encryption algorithm over FDIC*connect.*


---

[N] [73 FR 41197, July 17, 2008]





