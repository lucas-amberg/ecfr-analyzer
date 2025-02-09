# Appendix A to Subpart B of Part 652—Risk-Based Capital Stress Test


a. Appendix A provides details about the risk-based capital stress test (stress test) for Farmer Mac. The stress test calculates the risk-based capital level required by statute under stipulated conditions of credit risk and interest rate risk. The stress test uses loan-level data from Farmer Mac's agricultural mortgage portfolio or proxy data as described in section 4.1 d.(3) below, as well as quarterly Call Report and related information to generate pro forma financial statements and calculate a risk-based capital requirement. The stress test also uses historic agricultural real estate mortgage performance data, rural utility guarantee fees, relevant economic variables, and other inputs in its calculations of Farmer Mac's capital needs over a 10-year period.


b. Appendix A establishes the requirements for all components of the stress test. The key components of the stress test are: Specifications of credit risk, interest rate risk, the cashflow generator, and the capital calculation. Linkages among the components ensure that the measures of credit and interest rate risk pass into the cashflow generator. The linkages also transfer cashflows through the financial statements to represent values of assets, liabilities, and equity capital. The 10-year projection is designed to reflect a steady state in the scope and composition of Farmer Mac's assets.


Loan loss rates are determined by applying the loss-frequency equation and the loss-severity factor to Farmer Mac loan-level data. Using this equation and severity factor, you must calculate loan losses under stressful economic conditions assuming Farmer Mac's portfolio remains at a “steady state.” Steady state assumes the underlying characteristics and risks of Farmer Mac's portfolio remain constant over the 10 years of the stress test. Loss rates discussed in this section apply to all loans, unless otherwise indicated. Loss rates are computed from estimated dollar losses for use in the stress test. The loan volume subject to loss throughout the stress test is then multiplied by the loss rate. Lastly, the stress test allocates losses to each of the 10 years assuming a time pattern for loss occurrence as discussed in section 4.3, “Risk Measures.” 


a. Credit risks are modeled in the stress test using historical time series loan-level data to measure the frequency and severity of losses on agricultural mortgage loans. The model relates loss frequency and severity to loan-level characteristics and economic conditions through appropriately specified regression equations to account explicitly for the effects of these characteristics on loan losses. Loan losses for Farmer Mac are estimated from the resulting loss-frequency equation combined with the loss-severity factor by substituting the respective values of Farmer Mac's loan-level data or proxy data as described in section 4.1 d.(3) below, and applying stressful economic inputs.


b. The loss-frequency equation and loss-severity factor were estimated from historical agricultural real estate mortgage loan data from the Farm Credit Bank of Texas (FCBT). Due to Farmer Mac's relatively short history, its own loan-level data are insufficiently developed for use in estimating the default frequency equation and loss-severity factor. In the future, however, expansions in both the scope and historic length of Farmer Mac's lending operations may support the use of its data in estimating the relationships.


c. To estimate the equations, the data used included FCBT loans, which satisfied three of the four underwriting standards Farmer Mac currently uses (estimation data). The four standards specify: (1) The debt-to-assets ratio (D/A) must be less than 0.50, (2) the loan-to-value ratio (LTV) must be less than 0.70, (3) the debt-service-coverage ratio (DSCR) must exceed 1.25, (4) and the current ratio (current assets divided by current liabilities) must exceed 1.0. Furthermore, the D/A and LTV ratios were restricted to be less than or equal to 0.85.


d. Several limitations in the FCBT loan-level data affect construction of the loss-frequency equation. The data contained loans that were originated between 1979 and 1992, but there were virtually no losses during the early years of the sample period. As a result, losses attributable to specific loans are only available from 1986 through 1992. In addition, no prepayment information was available in the data.


e. The FCBT data used for estimation also included as performing loans, those loans that were re-amortized, paid in full, or merged with a new loan. Including these loans may lead to an understatement of loss-frequency probabilities if some of the re-amortized, paid, or merged loans experience default or incur losses. In contrast, when the loans that are re-amortized, paid in full, or merged are excluded from the analysis, the loss-frequency rates are overstated if a higher proportion of loans that are re-amortized, paid in full, or combined (merged) into a new loan are non-default loans compared to live loans. 
1

f. The structure of the historical FCBT data supports estimation of loss frequency based on origination information and economic conditions. Under an origination year approach, each observation is used only once in estimating loan default. The underwriting variables at origination and economic factors occurring over the life of the loan are then used to estimate loan-loss frequency.


g. The final loss-frequency equation is based on origination year data and represents a lifetime loss-frequency model. The final equation for loss frequency is:


h. The estimated logit coefficients and p-values are: 
4

i. The low p-values on each coefficient indicate a highly significant relationship between the probability ratio of loan-loss frequency and the respective independent variables. Other goodness-of-fit indicators are: 


j. These variables have logical relationships to the incidence of loan default and loss, as evidenced by the findings of numerous credit-scoring studies in agricultural finance. 
5 Each of the variable coefficients has directional relationships that appropriately capture credit risk from underwriting variables and, therefore, the incidence of loan-loss frequency. The frequency of loan loss was found to differ significantly across all of the loan characteristics and lending conditions. Farmland values represent an appropriate variable for capturing the effects of exogenous economic factors. It is commonly accepted that farmland values at any point in time reflect the discounted present value of expected returns to the land. 
6 Thus, changes in land values, as expressed in the loss-frequency equation, represent the combined effects of the level and growth rates of farm income, interest rates, and inflationary expectations—each of which is accounted for in the discounted, present value process.


k. When applying the equation to Farmer Mac's portfolio, you must get the input values for X_1_, X_3_, X_4_, and X_5_ for each loan in Farmer Mac's portfolio on the date at which the stress test is conducted, using either submitted data or proxy data as described in section 4.1 d.(3) below. For the variable X_2_, the stressful input value from the benchmark loss experience is −23.52 percent. You must apply this input to all Farmer Mac loans subject to loss to calculate loss frequency under stressful economic conditions. 
7 The maximum land value decline from the benchmark loss experience is the simple average of annual land value changes for Iowa, Illinois, and Minnesota for the years 1984 and 1985. 
8

l. Forecasting with data outside the range of the estimation data requires special treatment for implementation. While the estimation data embody Farmer Mac values for various loan characteristics, the maximum farmland price decline experienced in Texas was −16.69 percent, a value below the benchmark experience of −23.52 percent. To control for this effect, you must apply a procedure that restricts the slope of all the independent variables to that observed at the maximum land value decline observed in the estimation data. Essentially, you must approximate the slope of the loss-frequency equation at the point −16.69 percent in order to adjust the probability of loan default and loss occurrence for data beyond the range in the estimating data. The adjustment procedure is shown in step 4 of section 2.3 entitled, “Example Calculation of Dollar Loss on One Loan.”


m. Loss severity was not found to vary systematically and was considered constant across the tested loan characteristics and lending conditions. Thus, the simple weighted average by loss volume of 20.9 percent is used in the stress test. 
9 You must multiply loss severity with the probability estimate computed from the loss-frequency equation to determine the loss rate for a loan.


n. Using original loan balance results in estimated probabilities of loss frequency over the entire life of a loan. To account for loan seasoning, you must reduce the loan-loss exposure by the cumulative probability of loss already experienced by each loan as discussed in section 2.2 entitled, “Loan-Seasoning Adjustment.” This subtraction is based on loan age and reduces the loss estimated by the loss-frequency and loss-severity equations. The result is an age-adjusted lifetime dollar loss that can be used in subsequent calculations of loss rates as discussed in section 2.4, “Calculation of Loss Rates for Use in the Stress Test.” 


a. You must use the seasoning function supplied by FCA to adjust the calculated probability of loss for each Farmer Mac loan for the cumulative loss exposure already experienced based on the age of each loan. The seasoning function is based on the same data used to determine the loss-frequency equation and an assumed average life of 14 years for agricultural mortgages. If we determine that the relationship between the loss experience in Farmer Mac's portfolio over time and the seasoning function can be improved, we may augment or replace the seasoning function.


b. The seasoning function is parameterized as a beta distribution with parameters of p = 4.288 and q = 5.3185. 
10 How the loan-seasoning distribution is used is shown in Step 7 of section 2.3, “Example Calculation of Dollar Loss on One Loan.” 


Here is an example of the calculation of the dollar losses for an individual loan with the following characteristics and input values: 
11

*Step 1:* Convert 1996 Origination Value to 1997 dollar value (LOAN) based on the consumer price index and transform as follows:


*Step 2:* Calculate the default probabilities using −16.64 percent and −16.74 percent land value declines as follows: 
12

*Step 3:* Calculate the slope adjustment. You must calculate slope by subtracting the difference between “Loss-Frequency Probability at −16.64 percent” and “Loss-Frequency Probability at −16.74 percent” and dividing by −0.1 (the difference between −16.64 percent and −16.74 percent) as follows:


*Step 4:* Make the linear adjustment. You make the adjustment by increasing the loss-frequency probability where the dampened stressed farmland value input is less than −16.69 percent to reflect the stressed farmland value input, appropriately discounted. As discussed previously, the stressed land value input is discounted to reflect the declining effect that the maximum land value decline has on the probability of default when it occurs later in a loan's life. 
13 The linear adjustment is the difference between −16.69 percent land value decline and the adjusted stressed maximum land value decline input of −23.52 multiplied by the slope estimated in Step 3 as follows:


*Step 5:* Multiply loan default probability times the average severity of 0.209 as follows:


*Step 6:* Multiply the loss rate times the origination loan balance as follows:


*Step 7:* Adjust the origination based dollar losses for 4 years of loan seasoning as follows:


You must calculate the age-adjusted loss rates for these loans that include adjustments to scale losses according to the proportion of total submitted collateral to the guaranteed amount as provided for in the “Dollar Losses” column of the transformed worksheets in the Credit Loss Module based on new data inputs required in the “Coefficients” worksheet of the Credit Loss Module. Then, you must adjust the calculated loss rates as follows.


a. For loans in which the seller retains a subordinated interest, subtract from the total estimated age-adjusted dollar losses on the pool the amount equal to current unpaid principal times the subordinated interest percentage.


b. Some pools of loans underlying specific transactions could include loan collateral volume pledged to Farmer Mac in excess of Farmer Mac's guarantee amount (“overcollateral”). Overcollateral can be either: (i) Contractually required according to the terms of the transaction, or (ii) not contractually required, but pledged in addition to the contractually required amount at the discretion of the counterparty, often for purposes of administrative convenience regarding the collateral substitution process, or (iii) both (i) and (ii).


1. If a pool of loans includes collateral pledged in excess of the guaranteed amount, you must adjust the age-adjusted, loan-level dollar losses by a factor equal to the ratio of the guarantee amount to total submitted collateral. For example, consider a pool of two loans serving as security for a Farmer Mac guarantee on a note with a total issuance face value of $2 million and on which the counterparty has submitted 10-percent overcollateral. The two loans in the example have the following characteristics and adjustments.


2. If a pool of loans includes collateral pledged in excess of the guaranteed amount that is required under the terms of the transaction, you must further adjust the dollar losses as follows. Calculate the total losses on the subject portfolio of loans after age adjustments and any adjustments related to total submitted overcollateral as described in “1.” above. Calculate the total dollar amount of contractually required overcollateral in the subject pool. Subtract the total dollars of contractually required overcollateral from the adjusted total losses on the subject pool. If the result is less than or equal to zero, input a loss rate of zero for this transaction pool in the Data Inputs worksheet of the RBCST. A new category must be created for each such transaction in the RBCST. If the loss rate after subtracting contractually required overcollateral is greater than zero, proceed to additional adjustment for the risk-reducing effects of the counterparty's general obligation described in “3.” below.


3. Loans with a positive loss estimate remaining after adjustments in “1.” and “2.” above are further adjusted for the security provided by the general obligation of the counterparty. To make this adjustment in our example, multiply the estimated dollar losses remaining after adjustments in “1.” and “2.” above by the appropriate general obligation adjustment (GOA) factor based on the counterparty's whole-letter issuer credit rating by a nationally recognized statistical rating organization (NRSRO) and the ratio of the counterparty's concentration of risk in the same industry sector as the loans backing the AgVantage Plus volume, as determined by the Director.


A. The Director will make final determinations of concentration ratios on a case-by-case basis by using publicly reported data on counterparty portfolios, non-public data submitted and certified by Farmer Mac as part of its RBCST submissions, and will generally recognize rural electric cooperatives and rural telephone cooperatives as separate rural utility sectors. The following table sets forth the GOA factors and their components by whole-letter credit rating (Adjustment Factor = Default Rate × Severity Rate × 3), which may be further adjusted for industry sector concentration by the Director.
15

B. The adjustment factors will be updated annually as Moody's annual report on Default and Recovery Rates of Corporate Bond Issuers becomes available, normally in January or February of each year. In the event that there is an interruption of Moody's publication of this annual report, or FCA determines that the format of the report has changed enough to prevent or call into question the identification of updated factors, the prior year's factors will remain in effect until FCA revises the process through rulemaking.


4. Continuing the previous example, the pool contains two loans on which Farmer Mac is guaranteeing a total of $2 million and with total submitted collateral of 110 percent of the guaranteed amount. Of the 10-percent total overcollateral, 5 percent is contractually required under the terms of the transaction. The pool consists of two loans of slightly over $1 million. Total overcollateral is $200,000 of which $100,000 is contractually required. The counterparty has a single “A” credit rating, a 25-percent concentration ratio, and after adjusting for contractually required overcollateral, estimated losses are greater than zero. The net loss rate is calculated as described in the steps in the table below.


A. The net, fully adjusted losses are distributed over time on a straight-line basis. When a transaction reaches maturity within the 10-year modeling horizon, the losses are distributed on a straightline over a timepath that ends in the year of the transaction's maturity.


B. [Reserved]


a. You must compute the loss rates by state as the dollar weighted average seasoned loss rates from the Cash Window and Standby loan portfolios by state. The spreadsheet entitled, “Credit Loss Module.XLS” can be used for these calculations. This spreadsheet is available for download on our Web site, *www.fca.gov*, or will be provided upon request. The blended loss rates for each state are copied from the “Credit Loss Module” to the stress test spreadsheet for determining Farmer Mac's regulatory capital requirement.


b. The stress test use of the blended loss rates is further discussed in section 4.3, “Risk Measures.” 


You must submit the outstanding principal, maturity date of the loan, maturity date of the AgVantage Plus contract (if applicable), and the rural utility guarantee fee percentage for each loan in Farmer Mac's rural utility loan portfolio on the date at which the stress test is conducted. You must multiply the rural utility guarantee fee by two to calculate the loss rate on rural utility loans under stressful economic conditions and then multiply the loss rate by the total outstanding principal. To arrive at the net rural utility loan losses, you must next apply the steps “5” through “11” of section 2.4.b.4 of this Appendix. For loans under an AgVantage Plus-type structure, the calculated losses are distributed over time on a straight-line basis. For loans that are not part of an AgVantage Plus-type structure, losses are distributed over the 10-year modeling horizon, consistent with other non-AgVantage Plus loan volume.


The stress test explicitly accounts for Farmer Mac's vulnerability to interest rate risk from the movement in interest rates specified in the statute. The stress test considers Farmer Mac's interest rate risk position through the current structure of its balance sheet, reported interest rate risk shock-test results, 
16 and other financial activities. The stress test calculates the effect of interest rate risk exposure through market value changes of interest-bearing assets, liabilities, and off-balance sheet transactions, and thereby the effects to equity capital. The stress test also captures this exposure through the cashflows on rate-sensitive assets and liabilities. We discuss how to calculate the dollar impact of interest rate risk in section 4.6, “Balance Sheets.” 


a. The stress test uses the 10-year Constant Maturity Treasury (10-year CMT) released by the Federal Reserve in HR. 15, “Selected Interest Rates.” The stress test uses the 10-year CMT to generate earnings yields on assets, expense rates on liabilities, and changes in the market value of assets and liabilities. For stress test purposes, the starting rate for the 10-year CMT is the 3-month average of the most recent monthly rate series published by the Federal Reserve. The 3-month average is calculated by summing the latest monthly series of the 10-year CMT and dividing by three. For instance, you would calculate the initial rate on June 30, 1999, as:


b. The amount by which the stress test shocks the initial rate up and down is determined by calculating the 12-month average of the 10-year CMT monthly series. If the resulting average is less than 12 percent, the stress test shocks the initial rate by an amount determined by multiplying the 12-month average rate by 50 percent. However, if the average is greater than or equal to 12 percent, the stress test shocks the initial rate by 600 basis points. For example, determine the amount by which to increase and decrease the initial rate for June 30, 1999, as follows:


c. You must run the stress test for two separate changes in interest rates: (i) An immediate increase in the initial rate by the shock amount; and (ii) immediate decrease in the initial rate by the shock amount. The stress test then holds the changed interest rate constant for the remainder of the 10-year stress period. For example, at June 30, 1999, the stress test would be run for an immediate and sustained (for 10 years) upward movement in interest rates to 8.09 percent (5.54 percent plus 255 basis points) and also for an immediate and sustained (for 10 years) downward movement in interest rates to 2.99 percent (5.54 percent minus 255 basis points). The movement in interest rates that results in the greatest need for capital is then used to determine Farmer Mac's risk-based capital requirement.


a. This section describes the elements that are required for implementation of the stress test and assessment of Farmer Mac capital performance through time. An Excel spreadsheet named FAMC RBCST, available at *http://www.fca.gov*, contains the stress test, including the cashflow generator. The spreadsheet contains the following seven worksheets:


(1) Data Input;


(2) Assumptions and Relationships;


(3) Risk Measures (credit risk and interest rate risk);


(4) Loan and Cash Flow Accounts;


(5) Income Statements;


(6) Balance Sheets; and


(7) Capital.


b. Each of the components is described in further detail below with references where appropriate to the specific worksheets within the Excel spreadsheet. The stress test may be generally described as a set of linked financial statements that evolve over a period of 10 years using generally accepted accounting conventions and specified sets of stressed inputs. The stress test uses the initial financial condition of Farmer Mac, including earnings and funding relationships, and the credit and interest rate stressed inputs to calculate Farmer Mac's capital performance through time. The stress test then subjects the initial financial conditions to the first period set of credit and interest rate risk stresses, generates cashflows by asset and liability category, performs necessary accounting postings into relevant accounts, and generates an income statement associated with the first interval of time. The stress test then uses the income statement to update the balance sheet for the end of period 1 (beginning of period 2). All necessary capital calculations for that point in time are then performed.


c. The beginning of the period 2 balance sheet then serves as the departure point for the second income cycle. The second period's cashflows and resulting income statement are generated in similar fashion as the first period's except all inputs (*i.e.*, the periodic loan losses, portfolio balance by category, and liability balances) are updated appropriately to reflect conditions at that point in time. The process evolves forward for a period of 10 years with each pair of balance sheets linked by an intervening set of cashflow and income statements. In this and the following sections, additional details are provided about the specification of the income-generating model to be used by Farmer Mac in calculating the risk-based capital requirement.


The stress test requires the initial financial statement conditions and income generating relationships for Farmer Mac. The worksheet named “Data Inputs” contains the complete data inputs and the data form used in the stress test. The stress test uses these data and various assumptions to calculate pro forma financial statements. For stress test purposes, Farmer Mac is required to supply:


a. *Call Report Schedules RC: Balance Sheet and RI: Income Statement.* These schedules form the starting financial position for the stress test. In addition, the stress test calculates basic financial relationships and assumptions used in generating pro forma annual financial statements over the 10-year stress period. Financial relationships and assumptions are in section 4.2, “Assumptions and Relationships.”


b. *Cashflow Data for Asset and Liability Account Categories.* The necessary cashflow data for the spreadsheet-based stress test are book value, weighted average yield, weighted average maturity, conditional prepayment rate, weighted average amortization, and weighted average guarantee fees and rural utility guarantee fees. The spreadsheet uses this cashflow information to generate starting and ending account balances, interest earnings, guarantee fees, rural utility guarantee fees, and interest expense. Each asset and liability account category identified in this data requirement is discussed in section 4.2 “Assumptions and Relationships.”


c. *Interest Rate Risk Measurement Results.* The stress test uses the results from Farmer Mac's interest rate risk model to represent changes in the market value of assets, liabilities, and off-balance sheet positions during upward and downward instantaneous shocks in interest rates of 300, 250, 200, 150, and 100 basis points. The stress test uses these data to calculate a schedule of estimated effective durations representing the market value effects from a change in interest rates. The stress test uses a linear interpolation of the duration schedule to relate a change in interest rates to a change in the market value of equity. This calculation is described in section 4.4 entitled, “Loan and Cashflow Accounts,” and is illustrated in the referenced worksheet of the stress test.


d. *Loan-Level Data for all Farmer Mac I Program Assets.*

(1) The stress test requires loan-level data for all Farmer Mac I program assets to determine lifetime age-adjusted loss rates. The specific loan data fields required for running the credit risk component are:


(2) From the loan-level data, you must identify the geographic distribution by state of Farmer Mac's loan portfolio and enter the current loan balance for each state in the “Data Inputs” worksheet. The lifetime age-adjustment of origination year loss rates was discussed in section 2.0, “Credit Risk.” The lifetime age-adjusted loss rates are entered in the “Risk Measures” worksheet of the stress test. The stress test application of the loss rates is discussed in section 4.3, “Risk Measures.”


(3) Under certain circumstances, described below, you must substitute the following data proxies for the variables LTV, DSCR, and D/A: LTV = 0.70, DSCR = 1.25, and D/A = 0.50. The substitution must be done whenever any of these data are missing, i.e., cells are blank, or one or more of the conditions in the following table is true.


In addition, the following loan data adjustments must be made in response to the situations listed below: 


Further, because it would not be possible to compile an exhaustive list of loan data anomalies, FCA reserves the authority to require an explanation on other data anomalies it identifies and to apply the loan data proxies on such cases until the anomaly is adequately addressed by the Corporation.


e. *Loan-Level Data for All Rural Utility Program Volume.* The stress test requires loan-level data for all rural utility program volume. The specific loan data fields required for calculating the credit risk are outstanding principal, maturity date of the loan, maturity date of the AgVantage Plus contract (if applicable), and the rural utility guarantee fee percentage for each loan in Farmer Mac's rural utility loan portfolio on the date at which the stress test is conducted.


f. *Weighted Haircuts for Non-Program Investments.* For non-program investments, the stress test adjusts the weighted average yield data referenced in section 4.1.b. to reflect counterparty risk. Non-program investments are defined in § 652.5. The Corporation must calculate the haircut to be applied to each investment based on the lowest whole-letter credit rating the investment received from an NRSRO using the haircut levels in effect at the time. Haircut levels shall be the same amounts calculated for the GOA factor in section 2.4.b.3 above. The first table provides the mappings of NRSRO ratings to whole-letter ratings for purposes of applying haircuts. Any “ + ” or “−” signs appended to NRSRO ratings that are not shown in the table should be ignored for purposes of mapping NRSRO ratings to FCA whole-letter ratings. The second table provides the haircut levels by whole-letter rating category.


1. Certain special cases will receive the following treatment. For an investment structured as a collateralized obligation backed by the issuer's general obligation and, in turn, a pool of collateral, reference the Issuer Rating or Financial Strength Rating of that issuer as the credit rating applicable to the security. Unrated securities that are fully guaranteed by Government-sponsored enterprises (GSE) such as the Federal National Mortgage Corporation (Fannie Mae) will receive the same treatment as AAA securities. Unrated securities backed by the full faith and credit of the U.S. Government will not receive a haircut. Unrated securities that are not fully guaranteed by a GSE will receive the haircut level in place at that time for “Below BBB and Unrated” investments unless the Director, at the Director's discretion, determines to apply a lesser haircut. In making this determination, the Director will consider the risk characteristics associated with the structure of individual instruments.


2. If portions of investments are later sold by Farmer Mac according to their specific risk characteristics, the Director will take reasonable measures to adjust the haircut level applied to the investment to recognize the change in the risk characteristics of the retained portion. The Director will consider relevant similar methods for dealing with capital requirements adopted by other Federal financial institution regulators in similar situations.


3. Individual investment haircuts must then be aggregated into weighted-average haircuts by investment category and submitted in the “Data Inputs” worksheet. The spreadsheet uses these inputs to reduce the weighted-average yield on the investment category to account for counterparty insolvency according to a 10-year linear phase-in of the haircuts. Each asset account category identified in this data requirement is discussed in section 4.2, “Assumptions and Relationships.”


a. The stress test assumptions are summarized on the worksheet called “Assumptions and Relationships.” Some of the entries on this page are direct user entries. Other entries are relationships generated from data supplied by Farmer Mac or other sources as discussed in section 4.1, “Data Inputs.” After current financial data are entered, the user selects the date for running the stress test. This action causes the stress test to identify and select the appropriate data from the “Data Inputs” worksheet. The next section highlights the degree of disaggregation needed to maintain reasonably representative financial characterizations of Farmer Mac in the stress test. Several specific assumptions are established about the future relationships of account balances and how they evolve.


b. From the data and assumptions, the stress test computes pro forma financial statements for 10 years. The stress test must be run as a “steady state” with regard to program balances (with the exception of AgVantage Plus volume, in which case maturities are recognized by the model), and where possible, will use information gleaned from recent financial statements and other data supplied by Farmer Mac to establish earnings and cost relationships on major program assets that are applied forward in time. As documented in the stress test, entries of “1” imply no growth and/or no change in account balances or proportions relative to initial conditions with the exception of pre-1996 loan volume being transferred to post-1996 loan volume. The interest rate risk and credit loss components are applied to the stress test through time. The individual sections of that worksheet are:


(1) *Elements related to cashflows, earnings rates, and disposition of discontinued program assets.*

(A) The stress test accounts for earnings rates by asset class and cost rates on funding. The stress test aggregates investments into the categories of: Cash and money market securities; commercial paper; certificates of deposit; agency mortgage-backed securities and collateralized mortgage obligations; and other investments. With FCA's concurrence, Farmer Mac is permitted to further disaggregate these categories. Similarly, we may require new categories for future activities to be added to the stress test. Loan items requiring separate accounts include the following:


(i) Farmer Mac I program assets post-1996 Act;


(ii) Farmer Mac I program assets post-1996 Act Swap balances;


(iii) Farmer Mac I program assets pre-1996 Act;


(iv) Farmer Mac I AgVantage securities;


(v) Loans held for securitization;


(vi) Farmer Mac II program assets; and


(vii) Rural Utility program volume on balance sheet.


(B) The stress test also uses data elements related to amortization and prepayment experience to calculate and process the implied rates at which asset and liability balances terminate or “roll off” through time. Further, for each category, the stress test has the capacity to track account balances that are expected to change through time for each of the above categories. For purposes of the stress test, all assets are assumed to maintain a “steady state” with the implication that any principal balances retired or prepaid are replaced with new balances. The exceptions are that expiring pre-1996 Act program assets are replaced with post-1996 Act program assets and AgVantage Plus volume maturities are recognized by the model.


(2) *Elements related to other balance sheet assumptions through time.* As well as interest earning assets, the other categories of the balance sheet that are modeled through time include interest receivable, guarantee fees receivable, rural utility guarantee fees receivable, prepaid expenses, accrued interest payable, accounts payable, accrued expenses, reserves for losses (loans held and guaranteed securities), and other off-balance sheet obligations. The stress test is consistent with Farmer Mac's existing reporting categories and practices. If reporting practices change substantially, the above list will be adjusted accordingly. The stress test has the capacity to have the balances in each of these accounts determined based upon existing relationships to other earning accounts, to keep their balances either in constant proportions of loan or security accounts, or to evolve according to a user-selected rule. For purposes of the stress test, these accounts are to remain constant relative to the proportions of their associated balance sheet accounts that generated the accrued balances.


(3) *Elements related to income and expense assumptions.* Several other parameters that are required to generate pro forma financial statements may not be easily captured from historic data or may have characteristics that suggest that they be individually supplied. These parameters are the gain on agricultural mortgage-backed securities (AMBS) sales, miscellaneous income, operating expenses, reserve requirement, guarantee fees, rural utility guarantee fees, and loan loss resolution timing.


(A) The stress test applies the actual weighted average gain rate on sales of AMBS over the most recent 3 years to the dollar amount of AMBS sold during the most recent four quarters in order to estimate gain on sale of AMBS over the stress period.


(B) The stress test assumes miscellaneous income at a level equal to the average of the most recent 3-year's actual miscellaneous income as a percent of the sum of; cash, investments, guaranteed securities, and loans held for investment.


(C) The stress test assumes that short-term cost of funds is incurred in relation to the amount of defaulting loans purchased from off-balance sheet pools. The remaining unpaid principal balance on this loan volume is the origination amount reduced by the proportion of the total portfolio that has amortized as of the end of the most recent quarter. This volume is assumed to be funded at the short-term cost of funds and this expense continues for a period equal to the loan loss resolution timing period (LLRT) period minus 1. We will calculate the LLRT period from Farmer Mac data. In addition, during the LLRT period, all guarantee income associated with the loan volume ceases.


(D) The stress test generates no interest income on the estimated volume of defaulted on-balance sheet loan volume required to be carried during the LLRT period, but continues to accrue funding costs during the remainder of the LLRT period.


(E) You must update the LLRT period in response to changes in the Corporation's actual experience with each quarterly submission.


(F) Operating costs are determined in the model using weighted moving average of operating expenses as a percentage of the sum of on-balance sheet assets and off-balance sheet program activities over the previous four quarters inclusive of the current submission date. The share will then be applied forward to the balances of the same categories throughout the 10-year period of the RBCST model. As additional data accumulate, the specification will be re-examined and modified if we deem changing the specification results in a more appropriate representation of operating expenses.


(G) The reserve requirement as a fraction of loan assets can also be specified. However, the stress test is run with the reserve requirement set to zero. Setting the parameter to zero causes the stress test to calculate a risk-based capital level that is comparable to regulatory capital, which includes reserves. Thus, the risk-based capital requirement contains the regulatory capital required, including reserves. The amount of total capital that is allocated to the reserve account is determined by GAAP. The stress test applies quarterly updates of the weighted average guarantee rates for post-1996 Farmer Mac I assets, pre-1996 Farmer Mac I assets, and Farmer Mac II assets.


(4) *Elements related to earnings rates and funding costs.*

(A) The stress test can accommodate numerous specifications of earnings and funding costs. In general, both relationships are tied to the 10-year CMT interest rate. Specifically, each investment account, each loan item, and each liability account can be specified as fixed rate, or fixed spread to the 10-year CMT with initial rates determined by actual data. The stress test calculates specific spreads (weighted average yield less initial 10-year CMT) by category from the weighted average yield data supplied by Farmer Mac as described earlier. For example, the fixed spread for Farmer Mac I program post-1996 Act mortgages is calculated as follows:


(B) The resulting fixed spread of 1.40 percent is then added to the 10-year CMT when it is shocked to determine the new yield. For instance, if the 10-year CMT is shocked upward by 300 basis points, the yield on Farmer Mac I program post-1996 Act loans would change as follows:


(C) The adjusted yield is then used for income calculations when generating pro forma financial statements. All fixed-spread asset and liability classes are computed in an identical manner using starting yields provided as data inputs from Farmer Mac. The fixed-yield option holds the starting yield data constant for the entire 10-year stress test period. You must run the stress test using the fixed-spread option for all accounts except for discontinued program activities, such as Farmer Mac I program loans made before the 1996 Act. For discontinued loans, the fixed-rate specification must be used if the loans are primarily fixed-rate mortgages.


(5) *Elements related to interest rate shock test.* As described earlier, the interest rate shock test is implemented as a single set of forward interest rates. The stress test applies the up-rate scenario and down-rate scenario separately. The stress test also uses the results of Farmer Mac's shock test, as described in paragraph c. of section 4.1, “Data Inputs,” to calculate the impact on equity from a stressful change in interest rates as discussed in section 3.0 titled, “Interest Rate Risk.” The stress test uses a schedule relating a change in interest rates to a change in the market value of equity. For instance, if interest rates are shocked upward so that the percentage change is 262 basis points, the linearly interpolated effective estimated duration of equity is −6.7405 years given Farmer Mac's interest rate measurement results at 250 and 300 basis points of −6.7316 and 76.7688 years, respectively found on the effective duration schedule. The stress test uses the linearly interpolated estimated effective duration for equity to calculate the market value change by multiplying duration by the base value of equity before any rate change from Farmer Mac's interest rate risk measurement results with the percentage change in interest rates.


a. This section describes the elements of the stress test in the worksheet named “Risk Measures” that reflect the interest rate shock and credit loss requirements of the stress test.


b. As described in section 3.1, the stress test applies the statutory interest rate shock to the initial 10-year CMT rate. It then generates a series of fixed annual interest rates for the 10-year stress period that serve as indices for earnings yields and cost of funds rates used in the stress test. (See the “Risk Measures” worksheet for the resulting interest rate series used in the stress test.)


c. The Credit Loss Module's state-level loss rates, as described in section 2.4 entitled, “Calculation of Loss Rates for Use in the Stress Test,” are entered into the “Risk Measures” worksheet and applied to the loan balances that exist in each state. The distribution of loan balances by state is used to allocate new loans that replace loan products that roll off the balance sheet through time. The loss rates are applied both to the initial volume and to new loan volume that replaces expiring loans. The total life of loan losses that are expected at origination are then allocated through time based on a set of user entries describing the time-path of losses.


d. The loss rates estimated in the credit risk component of the stress test are based on an origination year concept, adjusted for loan seasoning. All losses arising from loans originated in a particular year are expressed as lifetime age-adjusted losses irrespective of when the losses actually occur. The fraction of the origination year loss rates that must be used to allocate losses through time are 43 percent to year 1, 17 percent to year 2, 11.66 percent to year 3, and 4.03 percent for the remaining years. The total allocated losses in any year are expressed as a percent of loan volume in that year to reflect the conversion to exposure year.


e. The credit loss exposure on rural utility volume, described in section 2.6, “Calculation of Loss Rates on Rural Utility Volume for Use in the Stress Test,” is entered into the “Risk Measures” worksheet applied to the volume balance. All losses arising from rural utility loans are expressed as annual loss rates and distributed over the weighted average maturity of the rural utility AgVantage Plus Volume, or as annual loss across the full 10-year modeling horizon in the case of rural utility Cash Window loans.


The worksheet labeled “Loan and Cashflow Data” contains the categorized loan data and cashflow accounting relationships that are used in the stress test to generate projections of Farmer Mac's performance and condition. The steady-state formulation results in account balances that remain constant except for the effects of discontinued programs, maturing AgVantage Plus positions, and the LLRT adjustment. For assets with maturities under 1 year, the results are reported for convenience as though they matured only one time per year with the additional convention that the earnings/cost rates are annualized. For the pre-1996 Act assets, maturing balances are added back to post-1996 Act account balances. The liability accounts are used to satisfy the accounting identity, which requires assets to equal liabilities plus owner equity. In addition to the replacement of maturities under a steady state, liabilities are increased to reflect net losses or decreased to reflect resulting net gains. Adjustments must be made to the long- and short-term debt accounts to maintain the same relative proportions as existed at the beginning period from which the stress test is run with the exception of changes associated with the funding of defaulted loans during the LLRT period. The primary receivable and payable accounts are also maintained on this worksheet, as is a summary balance of the volume of loans subject to credit losses.


a. Information related to income performance through time is contained on the worksheet named “Income Statements.” Information from the first period balance sheet is used in conjunction with the earnings and cost-spread relationships from Farmer Mac supplied data to generate the first period's income statement. The same set of accounts is maintained in this worksheet as “Loan and Cashflow Accounts” for consistency in reporting each annual period of the 10-year stress period of the test with the exception of the line item labeled “Interest reversals to carry loan losses” which incorporates the LLRT adjustment to earnings from the “Risk Measures” worksheet. Loans that defaulted do not earn interest or guarantee and commitment fees during LLRT period. The income from each interest-bearing account is calculated, as are costs of interest-bearing liabilities. In each case, these entries are the associated interest rate for that period multiplied by the account balances.


b. The credit losses described in section 2.0, “Credit Risk,” are transmitted through the provision account, as is any change needed to re-establish the target reserve balance. For determining risk-based capital, the reserve target is set to zero as previously indicated in section 4.2. Under the income tax section, it must first be determined whether it is appropriate to carry forward tax losses or recapture tax credits. The tax section then establishes the appropriate income tax liability that permits the calculation of final net income (loss), which is credited (debited) to the retained earnings account.


a. The worksheet named “Balance Sheets” is used to construct pro forma balance sheets from which the capital calculations can be performed. As can be seen in the Excel spreadsheet, the worksheet is organized to correspond to Farmer Mac's normal reporting practices. Asset accounts are built from the initial financial statement conditions, and loan and cashflow accounts. Liability accounts including the reserve account are likewise built from the previous period's results to balance the asset and equity positions. The equity section uses initial conditions and standard accounts to monitor equity through time. The equity section maintains separate categories for increments to paid-in-capital and retained earnings and for mark-to-market effects of changes in account values. The process described below in the “Capital” worksheet uses the initial retained earnings and paid-in-capital account to test for the change in initial capital that permits conformance to the statutory requirements. Therefore, these accounts must be maintained separately for test solution purposes.


b. The market valuation changes due to interest rate movements must be computed utilizing the linearly interpolated schedule of estimated equity effects due to changes in interest rates, contained in the “Assumptions & Relationships” worksheet. The stress test calculates the dollar change in the market value of equity by multiplying the base value of equity before any rate change from Farmer Mac's interest rate risk measurement results, the linearly interpolated estimated effective duration of equity, and the percentage change in interest rates. In addition, the earnings effect of the measured dollar change in the market value of equity is estimated by multiplying the dollar change by the blended cost of funds rate found on the “Assumptions & Relationships” worksheet. Next, divide by 2 the computed earnings effect to approximate the impact as a theoretical shock in the interest rates that occurs at the mid-point of the income cycle from period t _0_ to period t _1_. The measured dollar change in the market value of equity and related earnings effect are then adjusted to reflect any tax-related benefits. Tax adjustments are determined by including the measured dollar change in the market value of equity and the earnings effect in the tax calculations found in the “Income Statements” worksheet. This approach ensures that the value of equity reflects the economic loss or gain in value of Farmer Mac's capital position from a change in interest rates and reflects any immediate tax benefits that Farmer Mac could realize. Any tax benefits in the module are posted through the income statement by adjusting the net taxes due before calculating final net income. Final net income is posted to accumulated unretained earnings in the shareholders' equity portion of the balance sheet. The tax section is also described in section 4.5 entitled, “Income Statements.”


c. After one cycle of income has been calculated, the balance sheet as of the end of the income period is then generated. The “Balance Sheet” worksheet shows the periodic pro forma balance sheets in a format convenient to track capital shifts through time.


d. The stress test considers Farmer Mac's balance sheet as subject to interest rate risk and, therefore, the capital position reflects mark-to-market changes in the value of equity. This approach ensures that the stress test captures interest rate risk in a meaningful way by addressing explicitly the loss or gain in value resulting from the change in interest rates required by the statute.


The “Capital” worksheet contains the results of the required capital calculations as described below, and provides a method to calculate the level of initial capital that would permit Farmer Mac to maintain positive capital throughout the 10-year stress test period.


a. The stress test computes regulatory capital as the sum of the following:


(1) The par value of outstanding common stock;


(2) The par value of outstanding preferred stock;


(3) Paid-in capital;


(4) Retained earnings; and


(5) Reserve for loan and guarantee losses.


b. Inclusion of the reserve account in regulatory capital is an important difference compared to minimum capital as defined by the statute. Therefore, the calculation of reserves in the stress test is also important because reserves are reduced by loan and guarantee losses. The reserve account is linked to the income statement through the provision for loan-loss expense (provision). Provision expense reflects the amount of current income necessary to rebuild the reserve account to acceptable levels after loan losses reduce the account or as a result of increases in the level of risky mortgage positions, both on- and off-balance sheet. Provision reversals represent reductions in the reserve levels due to reduced risk of loan losses or loan volume of risky mortgage positions. The liabilities section of the “Balance Sheets” worksheet also includes separate line items to disaggregate the Guarantee and commitment obligation related to the Financial Accounting Standards Board Accounting Standards Codification Topic 460, Guarantees. This item is disaggregated to permit accurate calculation of regulatory capital post-adoption of FIN 45. When calculating the stress test, the reserve is maintained at zero to result in a risk-based capital requirement that includes reserves, thereby making the requirement comparable to the statutory definition of regulatory capital. By setting the reserve requirement to zero, the capital position includes all financial resources Farmer Mac has at its disposal to withstand risk.


a. Risk-based capital is calculated in the stress test as the minimum initial capital that would permit Farmer Mac to remain solvent for the ensuing 10 years. To this amount, an additional 30 percent is added to account for managerial and operational risks not reflected in the specific components of the stress test.


b. The relationship between the solvency constraint (*i.e.*, future capital position not less than zero) and the risk-based capital requirement reflects the appropriate earnings and funding cost rates that may vary through time based on initial conditions. Therefore, the minimum capital at a future point in time cannot be directly used to determine the risk-based capital requirement. To calculate the risk-based capital requirement, the stress test includes a section to solve for the minimum initial capital value that results in a minimum capital level over the 10 years of zero at the point in time that it would actually occur. In solving for initial capital, it is assumed that reductions or additions to the initial capital accounts are made in the retained earnings accounts, and balanced in the debt accounts at terms proportionate to initial balances (same relative proportion of long- and short-term debt at existing initial rates). Because the initial capital position affects the earnings, and hence capital positions and appropriate discount rates through time, the initial and future capital are simultaneously determined and must be solved iteratively. The resulting minimum initial capital from the stress test is then reported on the “Capital” worksheet of the stress test. The “Capital” worksheet includes an element that uses Excel's “solver” or “goal seek” capability to calculate the minimum initial capital that, when added (subtracted) from initial capital and replaced with debt, results in a minimum capital balance over the following 10 years of zero.



---

[N] [71 FR 77253, Dec. 26, 2006, as amended at 73 FR 31940, June 5, 2008; 76 FR 23467, Apr. 27, 2011; 78 FR 21037, Apr. 9, 2013]




