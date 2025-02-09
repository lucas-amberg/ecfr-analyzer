# Appendix B to Part 370—Output Files Structure


These output files will include the data necessary for the FDIC to determine deposit insurance coverage in a resolution. A covered institution's information technology system must have the capability to prepare and maintain the files detailed below. These files must be prepared in successive iterations as the FDIC receives additional data from external sources necessary to complete the deposit insurance determinations, and, as it updates pending determinations. The files will be comprised of the following four tables. The unique identifier and government identification are required in all four tables so those tables can be linked where necessary.


A null value, as indicated in the table below, is allowed for fields that are not immediately needed to calculate deposit insurance. To ensure timely calculations for depositor liquidity purposes, the information with null-value designations can be obtained after the initial deposit insurance calculation. As due diligence for recordkeeping progresses throughout the years of ongoing compliance, the FDIC expects that the banks will continue efforts to capture the null-value designations and populate the output file to alleviate the burden at failure. If a null value is allowed in a field, the record should not be placed in the pending file.


These files must be prepared in successive iterations as the covered institution receives additional data from external sources necessary to complete any pending deposit insurance calculations. The unique identifier is required in all four files to link the customer information. All files are pipe delimited. Do not pad leading and trailing spacing or zeros for the data fields.


*Customer File.* Customer File will be used by the FDIC to identify the customers. One record represents one unique customer.


The data elements will include:


*Account File.* The Account File contains the deposit ownership rights and capacities information, allocated balances, insured amounts, and uninsured amounts. The balances are in U.S. dollars. The Account file is linked to the Customer File by the CS__Unique__ID.


The data elements will include:


*Account Participant File.* The Account Participant File will be used by the FDIC to identify account participants, to include the official custodian, beneficiary, bond holder, mortgagor, or employee benefit plan participant, for each account and account holder. One record represents one unique account participant. The Account Participant File is linked to the Account File by CS__Unique__ID and DP__Acct__Identifier.


The data elements will include:


*Pending File.* The Pending File contains the information needed for the FDIC to contact the owner or agent requesting additional information to complete the deposit insurance calculation. Each record represents a deposit account.


The data elements will include:


