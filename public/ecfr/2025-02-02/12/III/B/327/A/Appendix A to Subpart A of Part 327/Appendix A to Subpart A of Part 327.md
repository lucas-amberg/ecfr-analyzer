# Appendix A to Subpart A of Part 327—Method to Derive Pricing Multipliers and Uniform Amount 


The uniform amount and pricing multipliers are derived from:


• A model (the Statistical Model) that estimates the probability of failure of an institution over a three-year horizon;


• The minimum initial base assessment rate;


• The maximum initial base assessment rate;


• Thresholds marking the points at which the maximum and minimum assessment rates become effective.


The Statistical Model estimates the probability of an insured depository institution failing within three years using a logistic regression and pooled time-series cross-sectional data;
1 that is, the dependent variable in the estimation is whether an insured depository institution failed during the following three-year period. Actual model parameters for the Statistical Model are an average of each of three regression estimates for each parameter. Each of the three regressions uses end-of-year data from insured depository institutions' quarterly reports of condition and income (Call Reports and Thrift Financial Reports or TFRs
2) for every third year to estimate probability of failure within the ensuing three years. One regression (Regression 1) uses insured depository institutions' Call Report and TFR data for the end of 1985 and failures from 1986 through 1988; Call Report and TFR data for the end of 1988 and failures from 1989 through 1991; and so on, ending with Call Report data for the end of 2009 and failures from 2010 through 2012. The second regression (Regression 2) uses insured depository institutions' Call Report and TFR data for the end of 1986 and failures from 1987 through 1989, and so on, ending with Call Report data for the end of 2010 and failures from 2011 through 2013. The third regression (Regression 3) uses insured depository institutions' Call Report and TFR data for the end of 1987 and failures from 1988 through 1990, and so on, ending with Call Report data for the end of 2011 and failures from 2012 through 2014. The regressions include only Call Report data and failures for established small institutions.


Table A.1 lists and defines the explanatory variables (regressors) in the Statistical Model.


The financial variable measures used to estimate the failure probabilities are obtained from Call Reports and TFRs. The weighted average of the “C,” “A,” “M,” “E,” “L,”, and “S” component ratings measure is based on component ratings obtained from the most recent bank examination conducted within 24 months before the date of the Call Report or TFR.


The Loan Mix Index assigns loans to the categories of loans described in Table A.2. For each loan category, a charge-off rate is calculated for each year from 2001 through 2014. The charge-off rate for each year is the aggregate charge-off rate on all such loans held by small institutions in that year. A weighted average charge-off rate is then calculated for each loan category, where the weight for each year is based on the number of small-bank failures during that year.
3 A Loan Mix Index for each established small institution is calculated by: (1) multiplying the ratio of the institution's amount of loans in a particular loan category to its total assets by the associated weighted average charge-off rate for that loan category; and (2) summing the products for all loan categories. Table A.2 gives the weighted average charge-off rate for each category of loan, as calculated through the end of 2014. The Loan Mix Index excludes credit card loans.


For each of the three regression estimates (Regression 1, Regression 2 and Regression 3), the estimated probability of failure (over a three-year horizon) of institution *i* at time *T* is


The uniform amount and pricing multipliers used to compute the annual initial base assessment rate in basis points, *R*_iT_, for any such institution *i* at a given time *T* will be determined from the Statistical Model as follows:




Solving equation 3 for minimum and maximum initial base assessment rates simultaneously,


The values for Z_X_ and Z_N_ will be selected to ensure that, for an assessment period shortly before adoption of a final rule, aggregate assessments for all established small institutions would have been approximately the same under the final rule as they would have been under the assessment rate schedule that—under rules in effect before adoption of the final rule—will automatically go into effect when the reserve ratio reaches 1.15 percent. As an example, using aggregate assessments for all established small institutions for the third quarter of 2013 to determine Z_X_ and Z_N_, and assuming that *Min* had equaled 3 basis points and *Max* had equaled 30 basis points, the value of Z_X_ would have been 0.87 and the value of Z_N_ −6.36. Hence based on equations 4 and 5,


Therefore from equation 3, it follows that


Substituting equation 2 produces an annual initial base assessment rate for institution *i* at time *T,* R_iT_, in terms of the uniform amount, the pricing multipliers and model variables:



---

[N] [74 FR 9557, Mar. 4, 2009, as amended at 76 FR 10720, Feb. 25, 2011; 76 FR 17521, Mar. 30, 2011; 77 FR 66015, Oct. 31, 2012; 78 FR 55594, Sept. 10, 2013; 79 FR 70437, Nov. 26, 2014; 83 FR 17740, Apr. 24, 2018; 85 FR 4443, Jan. 24, 2020; 85 FR 71228, Nov. 9, 2020; 86 FR 11399, Feb. 25, 2021; 87 FR 64340, 64354, Oct. 24, 2022]





