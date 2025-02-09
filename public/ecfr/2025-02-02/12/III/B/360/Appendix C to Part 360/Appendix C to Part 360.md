# Appendix C to Part 360—Deposit File Structure


This is the structure for the data file to provide deposit data to the FDIC. If data or information are not maintained or do not apply, a null value in the appropriate field should be indicated. The file will be in a tab-or pipe-delimited ASCII format. Each file name will contain the institution's FDIC Certificate Number, an indication that it is a deposit file type and the date of the extract. The files will be encrypted using an FDIC-supplied algorithm. The FDIC will transmit to the covered institution the encryption algorithm over FDIC*connect.*

The total deposit balances and the number of deposit accounts in each deposit file must be reconciled to the subsidiary system control totals.


The FDIC intends to fully utilize a covered institution's understanding of its customers and the data maintained around deposit accounts. Should additional information be available to the covered institution to help the FDIC more quickly complete its insurance determination process, it may add this information to the end of this data file. Should additional data elements be provided, a complete data dictionary for these elements must be supplied along with a description of how this information could be best used to establish account ownership or insurance category.


The deposit data elements provide information specific to deposit account balances and account data. The sequencing of these elements, their physical data structures and the field data format and field length must be provided to the FDIC along with the data structures identified below.


A header record will also be required at the beginning of this file. This record will contain the number of accounts to be included in this file, the maximum number of characters contained in largest account title field maintained within the deposit file and the maximum number of characters contained in largest address field maintained within the deposit file.



---

[N] [73 FR 41197, July 17, 2008]





