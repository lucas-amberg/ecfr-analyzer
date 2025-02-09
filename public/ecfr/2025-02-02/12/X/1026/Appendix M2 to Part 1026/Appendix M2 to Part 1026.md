# Appendix M2 to Part 1026—Sample Calculations of Repayment Disclosures


The following is an example of how to calculate the minimum payment repayment estimate, the minimum payment total cost estimate, the estimated monthly payment for repayment in 36 months, the total cost estimate for repayment in 36 months, and the savings estimate for repayment in 36 months using the guidance in appendix M1 to this part where three annual percentage rates apply (where one of the rates is a promotional APR), the total outstanding balance is $1000, and the minimum payment formula is 2 percent of the outstanding balance or $20, whichever is greater. The following calculation is written in SAS code.


data one;


pvaf = (1-(1 + perrate36) ** -dmonths)/perrate36; * calculate present value of annuity factor;


