# Appendix IV to Part 264—Cochran's Approximation to the Behrens-Fisher Students' t-test


Using all the available background data (n_b_ readings), calculate the background mean (X_b_) and background variance (s_b_2). For the single monitoring well under investigation (n_m_ reading), calculate the monitoring mean (X_m_) and monitoring variance (s_m_2).


For any set of data (X_1_, X_2_, . . ., X_n_) the mean is calculated by:


The t-test uses these data summary measures to calculate a t-statistic (t*) and a comparison t-statistic (t_c_). The t* value is compared to the t_c_ value and a conclusion reached as to whether there has been a statistically significant change in any indicator parameter.


The t-statistic for all parameters except pH and similar monitoring parameters is:


The t-statistic (t_c_), against which t* will be compared, necessitates finding t_b_ and t_m_ from standard (one-tailed) tables where,


Finally, the special weightings W_b_ and W_m_ are defined as:


The t-statistic (t*) is now compared with the comparison t-statistic (t_c_) using the following decision-rule:


The t-statistic for testing pH and similar monitoring parameters is constructed in the same manner as previously described except the negative sign (if any) is discarded and the caveat concerning the negative value is ignored. The standard (two-tailed) tables are used in the construction t_c_ for pH and similar monitoring parameters.


If t* is equal to or larger than t_c_, then conclude that there most likely *has been a significant increase* (if the initial t* had been negative, this would imply a significant decrease). If t* is less than t_c_, then conclude that there most likely has been no change.


A further discussion of the test may be found in *Statistical Methods* (6th Edition, Section 4.14) by G. W. Snedecor and W. G. Cochran, or *Principles and Procedures of Statistics* (1st Edition, Section 5.8) by R. G. D. Steel and J. H. Torrie.



---

[N] [47 FR 32367, July 26, 1982]




