# Appendix B to Part 1000—IHBG Block Grant Formula Mechanisms


1. The first step in running the Indian Housing Block Grant (IHBG) formula is to determine the total amount available for allocation in the current Fiscal Year (FY).


2. If there is carryover as defined in § 1000.329, the amount of carryover up to $3 million, is then held aside for allocation under the minimum total grant provisions of the formula (see Step 10), then:


3. The FCAS component is calculated first. FCAS consists of two parts, Operating Subsidy (OPSUB) and Modernization (MOD), such that:


a. OPSUB is calculated in two steps, as follows:


(i) First, the number of Low-Rent, Section 8 and homeownership units are multiplied by the applicable national per unit subsidy (§ 1000.302 National Per Unit Subsidy). The amounts are summed to create an initial calculation of the Operating Subsidy component.


(ii) The initial Operating Subsidy component amount is then adjusted for local area costs, using an adjustment factor called the AELFMR. The AELFMR factor is calculated for each tribe in three steps. First, an AEL factor is calculated by dividing the tribe's Allowable Expense Level (AEL), a historic per-unit measure of operating cost, by the national weighted average AEL (see § 1000.302 defining Allowable Expense Level)


Second, an FMR factor is calculated by dividing the tribe's Fair Market Rent amount (FMR), an area-specific index published annually by HUD (see § 1000.302 Fair Market Rent factor), by the national weighted average FMR.


Third, an AELFMR factor is created by assigning each tribe the greater of its AEL or FMR factor, and dividing that figure by the national weighted average AELFMR. In all cases, when the national average figure is calculated, tribes are weighted by the amount of their initial operating subsidy as calculated in 3(a)(i) above. (See § 1000.320).


Finally, the AELFMR factor is used to adjust the initial operating subsidy calculation for differences in local area costs.


b. The modernization component, MOD, is calculated by two different methods, depending on whether the tribe had an Indian housing authority (IHA) that owned or operated more than 250 public housing units on October 1, 1997.


(i) MOD1 is calculated for all tribes and considers the number of Low-Rent, and Mutual Help and Turnkey III FCAS units. Each of these is adjusted by the national per-unit modernization subsidy


(ii) MODAVG is calculated only for tribes that had an IHA that owned or operated fewer than 250 public housing units on October 1, 1997, as the annual average amount they received for FYs 1992 through 1997 under the assistance program authorized by section 14 of the 1937 Act (not including emergency assistance). If this alternative calculation is greater than the amount calculated in (i), it is used to calculate the tribe's modernization component.


c. The modernization calculation is adjusted for local area costs:


4. Now that calculation for FCAS is complete, the amount allocated using the need component of the formula can be determined:


5. The first step in calculating needs is identifying weighted needs variables and adjusting for local area cost differences.


a. The basic needs calculation uses seven weighted criteria based on population and housing data in a tribe's Formula Area or share of Formula Area if Formula Areas overlap (see § 1000.302 Formula Area and § 1000.326) to allocate the funds available for the needs component. The person count variable is adjusted for statistically significant undercounts for reservations, trust lands and remote Alaska and for changes in population since the latest Decennial Census.


The Population Cap provision in § 1000.302 Formula Area (5) is then applied. Needs data are capped if AIAN population counts exceed twice tribal enrollment unless a tribe can demonstrate that it serves more than twice as many non-tribal members as tribal members, in which case the cap is adjusted upward.


If POPCAPTEST=1, (tribes subject to Population Cap) then:


For tribes NOT subject to Population Cap,


Where:


An initial calculation of the needs component is then calculated by determining each tribe's share of national totals on each variable, and applying weights to the variables as specified in regulation.


b. The basic needs calculation is adjusted to reflect differences in local area costs.


6. The need allocation computed above is adjusted to take into account the minimum needs provision. Tribes allocated less than $200,000 under the FCAS component of the IHBG formula and that certify the presence of any households at or below 80 percent of median income in their Indian Housing Plan are allocated an additional amount so their needs allocation equals 0.007826 percent of the available appropriations for that FY after set-asides.


If in the first need computation, a qualified tribe is allocated less than the minimum needs funding level, its need allocation will go up. Other tribes whose needs allocations are greater than the minimum needs amount will have their allocations adjusted downward to keep the total allocation within available funds:


After allocation adjustments are made under § 1000.331 for a FY, the needs allocation of an Indian tribe whose needs allocation increased as a result of the introduction of a new data source shall be adjusted downward proportionate to its share of the total increase in funding resulting from the introduction of a new data source to keep the overall need component within available appropriations. For each tribe which benefitted from the introduction of the new data source, their share of the total gain is calculated and that share is used to determine the amount of contribution they will make in each year following the introduction of the new data source to allow the phase down adjustments to be made without exceeding the amount available for allocation.


The initial needs allocation for each tribe is adjusted based on the phase down adjustments and contribution amounts in the phase down schedule.


PDADJ_n_ and CONTRIB_n_ as calculated in the initial phase down adjustment schedule may have to be adjusted downward in subsequent FYs if the total amount available for allocation under the needs Component (*i.e.* NEEDALLOCAMT in Step 4) is lower than the amount available for that purpose in the FY prior to the introduction of the new data source. If so, both PDADJ_n_ and CONTRIB_n_ will be reduced by a factor which is the ratio of NEEDALLOCAMT in current FY to NEEDALLOCAMT in the year prior to the introduction of the new data source.


Furthermore, when the 2020 Decennial Census or other new data source is introduced, a new phase down adjustment schedule will be calculated in a similar manner as that was calculated for FY 2018.


8. A tribe's preliminary total allocation is calculated by summing the amounts calculated under the FCAS and need components that will serve as the basis for further adjustments in accordance with § 1000.340.


GRANT1 is compared to how much a tribe received in FY 1996 for operating subsidy and modernization under the 1937 Housing Act. If a tribe received more in FY 1996 for operating subsidy and modernization than its IHBG formula allocation, its preliminary total allocation is adjusted up to the FY 1996 amount (See § 1000.340(b)). Indian tribes receiving more under the IHBG formula than in FY 1996 have their grant allocations adjusted downward to offset the upward adjustment for the other tribes.


9. The initial allocation amount for the current FY is calculated by adding any adjustments for over- or under-funding occurring in prior FYs to the allocation calculated in the previous step. These adjustments typically result from late reporting of FCAS changes, or conveyances.




So the UDFFadj = REPGRANTaftUDFF − GRANT2 and UDFFadjTOT= Absolute value of the sum of UDFF adjustments for tribes subject to reduction.


If UDFFtest is not equal to 1, tribes receive a portion of the funds recovered under the UDFF provision based on their share of total needs excluding any tribes with UDFFtest = 1. For these tribes, then:


11. A final adjustment is made under § 1000.329 which allocates available carryover amounts up to $3 million to achieve minimum total allocations. Tribes that certify in their Indian Housing Plans the presence of any eligible households at or below 80 percent of median income and whose total allocation determined in the preceding step is less than 0.011547 percent of the FY appropriation after set-asides, will have their allocation adjusted upwards to 0.011547 percent of the FY appropriation after set-asides, or to a lesser percentage which can be achieved for all eligible tribes with available carryover funds set-aside for this purpose.


If (GRANT2 + UDFFADJ) < MINGRANT and income-based need has been identified in a tribe's IHP, then tribe qualifies for MINGRANTADJ. For Tribes that qualify, calculate:


If the Sum for all tribes of MINGRANTADJTEST > MGHOLD, then:


12. A tribe's final allocation consists of the initial current FY formula allocation with three adjustments.



---

[N] [81 FR 83682, Nov. 22, 2016]




