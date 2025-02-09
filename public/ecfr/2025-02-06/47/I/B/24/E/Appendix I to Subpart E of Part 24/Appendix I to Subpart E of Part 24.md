# Appendix I to Subpart E of Part 24—A Procedure for Calculating PCS Signal Levels at Microwave Receivers (Appendix E of the Memorandum Opinion and Order)


The new Rules adopted in Part 24 stipulate that estimates of interference to fixed microwave operations from a PCS operation will be based on the sum of signals received at a microwave receiver from the PCS operation. This appendix describes a procedure for computing this PCS level.


In general, the procedure involves four steps:


1. Determine the geographical coordinates of all microwave receivers operating on co-channel and adjacent frequencies within the coordination distance of each base station and the characteristics of each receiver, *i.e.,* adjacent channel susceptibility, antenna gain, pattern and height, and line and other losses.


2. Determine an equivalent isotropically radiated power (e.i.r.p.) for each base station and equivalent e.i.r.p. values for the mobiles and portables associated with each base station. Determine the values of pertinent correction and weighting factors based on building heights and density and distribution of portables. Close-in situations, prominent hills, and extra tall buildings require special treatment.


3. Based on PCS e.i.r.p. values, correction and weighting factors, and microwave receiving system characteristics determined above, calculate the total interference power at the input of each microwave receiver, using the Longley-Rice propagation model.


4. Based on the interference power level computed in step 3, determine interference to each microwave receiver using criteria described in Part 24 and EIA/TIA Bulletin 10-F.


The interference from each base station and the mobiles and portables associated with it is calculated as follows:


Finally, the total PCS interference power at a given microwave receiver from all the base stations in a given frequency band is found by summing the contributions from the individual stations. Likewise, the total interference power at a given microwave receiver from all mobiles and portables operating in a given frequency band is found by summing the contributions from the mobiles and portables associated with each cell.


*Base Stations.* Interference from each base station to each microwave should normally be considered independently. A group of base stations having more or less (within ±50 percent) the same height above average terrain, the same e.i.r.p., basically the same path to a microwave receiving site, and subtending an angle to that receiving site of less than 5 degrees, may be treated as a group, using the total power of the group and the average antenna height of the group to calculate path loss, L.


*Mobile Stations.* The e.i.r.p. from mobile transmitters is weighted according to the number of base station channels expected to be devoted to mobile operation at any given time. The antenna height of mobiles used in calculating path loss, L, is assumed to be 2 meters.


*Portable Stations.* The e.i.r.p. from the portable units associated with each base station is weighted according to the estimated portion of portables associated with that cell expected to be operated inside buildings at any given time and the portion which could be expected to be operating from elevated locations, such as balconies or building rooftops. For example, in the case of service intended for business use in an urban area, one might expect that perhaps 85 percent of the portables in use at any given time would be operating from within buildings and perhaps 5 percent might be operating from rooftops or balconies. The remaining 10 percent would be outside at street level.


Calculation of an equivalent e.i.r.p. for cells in suburban areas will involve different weighting criteria.


*Urban Correction Factor.* The urban correction factor (UC) depends on the height and density of buildings surrounding a base station. For the core area of large cities, it is assumed to be 35 dB. For medium size cities and fringe areas of large cities (4- to 6-story buildings with scattered taller buildings and lower buildings and open spaces) it is assumed to be 25 dB; for small cities and towns, 15 dB, and for suburban residential areas (one- and two-story, single family houses with scattered multiple-story apartment buildings, shopping centers and open areas), 10 dB.


The unadjusted urban correction factor, UC, should not be applied to base station antenna heights that are greater than 50 percent of the average building height for a cell.


*Building Height and Building Penetration Factors.* The building height correction, BH, is a function of the average building height within the nominal coverage area of the base station. It is used in conjunction with the building penetration loss, BP, to adjust the expected interference contribution from that portion of the portables transmitting from within buildings. The adjustment is given by:


(Note that this formula implies a net gain when the average building height is greater than 8 floors). All buildings more than twice the average height should be considered individually. The contribution to BH from that portion of portables in the building above the average building height should be increased by a factor of 20Log(h) dB, where h is the height of the portables above the average building height in meters.


*Channel Discrimination Factor.* A factor based on the interference selectivity of the microwave receiver.


*Propagation Model.* The PCS to microwave path loss, L, is calculated using the Longley-Rice propagation model, Version 1.2.2., in the point-to-point mode. The Longley-Rice [1] model was derived from NBS Technical Note 101 [2], and updated in 1982 by Hufford [3]. Version 1.2.2 incorporated modifications described in a letter by Hufford [4] in 1985. Terrain elevations used as input to the model should be from the U.S. Geological Survey 3-second digitized terrain database.


*Special Situations.* If a cell size is large compared to the distance between the cell and a microwave receiving site so that it subtends an angle greater than 5 degrees, the cell should be subdivided and calculations should be based on the expected distribution of mobiles and portables within each subdivision.


If terrain elevations within a cell differ by more than a factor of two-to-one, the cell should be subdivided and microwave interference calculations should be based on the average terrain elevation for each subdivision.


If a co-channel PCS base station lies within the main beam of a microwave antenna (±5 degrees), there is no intervening terrain obstructions, and the power at the microwave receiver from that base station, assuming free space propagation, would be 3 dB or less below the interference threshold, interference will be assumed to exist unless the PCS licensee can demonstrate otherwise by specific path loss calculations based on terrain and building losses.


If any part of a cell or cell subdivision lies within the main beam of a co-channel microwave antenna, there is no intervening terrain obstructions, and the accumulative power of 5 percent or less of the mobiles, assuming free space propagation would be 3 dB or less below the interference threshold, interference will be assumed to exist unless the PCS licensee can demonstrate otherwise by specific path loss calculations based on terrain and building losses.


If a building within a cell or cell subdivision lies within the main beam of a co-channel microwave antenna, there is no intervening terrain obstructions, and the cumulative power of 5 percent or fewer of the portables, assuming free space propagation, would be 3 dB or less below the interference threshold, interference will be assumed to exist unless the PCS licensee can demonstrate otherwise by specific path loss calculations based on terrain and building losses.


1. Longley, A.G. and Rice, P.L., “Prediction of Tropospheric Radio Transmission Loss Over Irregular Terrain, A Computer Method-1968”, ESSA Technical Report ERL 79-ITS 67, Institute for Telecommunications Sciences, July 1968.


2. Rice, P.L. Longley, A.G., Norton, K.A., Barsis, A.P., “Transmission Loss Predictions for Tropospheric Communications Circuits,” NBS Technical Note 101 (Revised), Volumes I and II, U.S. Department of Commerce, 1967.


3. Hufford, G.A., Longley, A.G. and Kissick, W.A., “A Guide to the use of the ITS Irregular Terrain Model in the Area Prediction Mode”, NTIA Report 82-100, U.S. Department of Commerce, April 1982. Also, Circular letter, dated January 30, 1985, from G.A. Hufford, identifying modifications to the computer program.


4. Hufford, G.A., Memorandum to Users of the ITS Irregular Terrain Model, Institute for Telecommunications Sciences, U.S. Department of Commerce, January 30, 1985.




