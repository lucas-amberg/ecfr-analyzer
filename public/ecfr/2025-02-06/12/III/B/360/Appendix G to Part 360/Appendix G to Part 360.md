# Appendix G to Part 360—Deposit-Customer Join File Structure


This is the structure of the data file to provide to the FDIC information necessary to link the records in the deposit and customer files. If data or information are not maintained or do not apply, a null value in the appropriate field should be indicated. The file will be in a tab- or pipe-delimited ASCII format. Each file name will contain the institution's FDIC Certificate Number, an indication that it is a join file type and the date of the extract. The files will be encrypted using an FDIC-supplied algorithm. The FDIC will transmit the encryption algorithm over FDIC*connect.*

The deposit-customer join file will have one or more records for each deposit account, depending on the number of relationships to each account. A simple individual account, for example, will be associated with only one record in the deposit-customer join file indicating the owner of the account. A joint account with two owners will be associated with two records in the deposit-customer join file, one for each owner. The deposit-customer join file will contain other records associated with a deposit account to designate, among other things, beneficiaries, custodians, trustees and agents. This methodology allows the FDIC to know all of the possible relationships for an individual account and also whether a single customer is involved in many accounts.



---

[N] [73 FR 41197, July 17, 2008]





