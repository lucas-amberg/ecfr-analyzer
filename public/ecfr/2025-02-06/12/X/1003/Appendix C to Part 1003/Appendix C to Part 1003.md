# Appendix C to Part 1003—Procedures for Generating a Check Digit and Validating a ULI


The check digit for the Universal Loan Identifier (ULI) pursuant to § 1003.4(a)(1)(i)(C) is calculated using the ISO/IEC 7064, MOD 97-10 as it appears on the International Standard ISO/IEC 7064:2003, which is published by the International Organization for Standardization (ISO).


©ISO. This material is reproduced from ISO/IEC 7064:2003 with permission of the American National Standards Institute (ANSI) on behalf of ISO. All rights reserved.


*Step 1:* Starting with the leftmost character in the string that consists of the combination of the Legal Entity Identifier (LEI) pursuant to § 1003.4(a)(1)(i)(A) and the additional characters identifying the covered loan or application pursuant to § 1003.4(a)(1)(i)(B), replace each alphabetic character with numbers in accordance with Table I below to obtain all numeric values in the string.


The alphabetic characters are not case-sensitive and each letter, whether it is capitalized or in lower-case, is equal to the same value as each letter illustrates in the conversion table. For example, A and a are each equal to 10.


*Step 2:* After converting the combined string of characters to all numeric values, append two zeros to the rightmost positions.


*Step 3:* Apply the mathematical function mod = (*n,*97) where *n =* the number obtained in step 2 above and 97 is the divisor.


Alternatively, to calculate without using the modulus operator, divide the numbers in step 2 above by 97. Truncate the remainder to three digits and multiply it by 97. Round the result to the nearest whole number.


*Step 4:* Subtract the result in step 3 from 98. If the result is one digit, add a leading 0 to make it two digits.


*Step 5:* The two digits in the result from step 4 is the check digit. Append the resulting check digit to the rightmost position in the combined string of characters described in step 1 above to generate the ULI.


For example, assume the LEI for a financial institution is 10Bx939c5543TqA1144M and the financial institution assigned the following string of characters to identify the covered loan: 999143X. The combined string of characters is 10Bx939c5543TqA1144M999143X.


*Step 1:* Starting with the leftmost character in the combined string of characters, replace each alphabetic character with numbers in accordance with Table I above to obtain all numeric values in the string. The result is 10113393912554329261011442299914333.


*Step 2:* Append two zeros to the rightmost positions in the combined string. The result is 1011339391255432926101144229991433300.


*Step 3:* Apply the mathematical function mod = (*n,*97) where *n =* the number obtained in step 2 above and 97 is the divisor. The result is 60.


Alternatively, to calculate without using the modulus operator, divide the numbers in step 2 above by 97. The result is 1042617929129312294946332267952920.618556701030928. Truncate the remainder to three digits, which is .618, and multiply it by 97. The result is 59.946. Round this result to the nearest whole number, which is 60.


*Step 4:* Subtract the result in step 3 from 98. The result is 38.


*Step 5:* The two digits in the result from step 4 is the check digit. Append the check digit to the rightmost positions in the combined string of characters that consists of the LEI and the string of characters assigned by the financial institution to identify the covered loan to obtain the ULI. In this example, the ULI would be 10Bx939c5543TqA1144M999143X38.


To determine whether the ULI contains a transcription error using the check digit calculation, the procedures are described below.


Step 1: Starting with the leftmost character in the ULI, replace each alphabetic character with numbers in accordance with Table I above to obtain all numeric values in the string.


Step 2: Apply the mathematical function mod=(*n,*97) where *n=*the number obtained in step 1 above and 97 is the divisor.


Step 3: If the result is 1, the ULI does not contain transcription errors.


For example, the ULI assigned to a covered loan is 10Bx939c5543TqA1144M999143X38.


Step 1: Starting with the leftmost character in the ULI, replace each alphabetic character with numbers in accordance with Table I above to obtain all numeric values in the string. The result is 1011339391255432926101144229991433338.


Step 2: Apply the mathematical function mod=(*n,*97) where *n* is the number obtained in step 1 above and 97 is the divisor.


Step 3: The result is 1. The ULI does not contain transcription errors.



---

[N] [80 FR 66316, Oct. 28, 2015, as amended at 82 FR 43135, Sept. 13, 2017]




