# Appendix Y to Subpart B of Part 430—Uniform Test Method for Measuring the Energy Consumption of Battery Chargers




For any amended standards for battery chargers published after September 8, 2022, manufacturers must use the results of testing under appendix Y1 to determine compliance. Representations related to energy consumption must be made in accordance with the appropriate appendix that applies (*i.e.,* appendix Y or appendix Y1) when determining compliance with the relevant standard. Manufacturers may also use appendix Y1 to certify compliance with amended standards, published after September 8, 2022, prior to the applicable compliance date for those standards.




DOE incorporated by reference in § 430.3 the entire test standard for IEC 62040-3 Ed. 3.0. However, only enumerated provisions of this standard are applicable to this appendix, as follows. In cases in which there is a conflict, the language of the test procedure in this appendix takes precedence over the referenced test standard.


0.1 IEC 62040-3 Ed. 3.0:


(a) Section 3.5, Specified values;


(b) Section 3.5.49, total harmonic distortion;


(c) Section 5, Electrical conditions, performance and declared values;


(d) Section 5.2, UPS input specification, as specified in section 2.27.2 of this appendix;


(e) Section 5.2.1, Conditions for normal mode of operation; Clause 5.2.1.a;


(f) Clause 5.2.1.b;


(g) Section 5.2.2, Conditions to be declared by the manufacturer; Clause 5.2.2.k;


(h) Clause 5.2.2.l;


(i) Clause 5.2.2.m;


(j) Section 5.3, UPS output specification; Section 5.3.2, Characteristics to be declared by the manufacturer; Clause 5.3.2.b;


(k) Clause 5.3.2.c;


(l) Clause 5.3.2.d;


(m) Clause 5.3.2.e;


(n) Section 5.3.4.2, Input dependency AAA;


(o) Section 6.2, Routine test procedure; Section 6.2.2, Electrical; Section 6.2.2.4, No load, as specified in section 4.3.3(c) of this appendix;


(p) Section 6.2.2.7, AC input failure, as specified in Note to section 2.27.1 of this appendix;


(q) Section 6.4, Type test procedure (electrical); Section 6.4.1, Input—AC input power compatibility; Section 6.4.1.2, Steady state input voltage tolerance and VI input independency, as specified in Note to section 2.27.3 of this appendix;


(r) Section 6.4.1.3, Combined input voltage/frequency tolerance and VFI input independency, as specified in Note to section 2.27.2 of this appendix;






(s) Annex G—AC input power failure—Test method;


(t) Annex J—UPS efficiency and no load losses—Methods of measurement, as specified in sections 4.2.1 and 4.3.3 of this appendix.


This appendix provides the test requirements used to measure the energy consumption of battery chargers operating at either DC or United States AC line voltage (115V at 60Hz). This appendix also provides the test requirements used to measure the energy efficiency of uninterruptible power supplies as defined in section 2 of this appendix that utilize the standardized National Electrical Manufacturer Association (NEMA) plug, 1-15P or 5-15P, as specified in ANSI/NEMA WD 6-2016 (incorporated by reference, see § 430.3) and have an AC output. This appendix does not provide a method for testing back-up battery chargers.


The following definitions are for the purposes of explaining the terminology associated with the test method for measuring battery charger energy consumption.
1

2.1. *Active mode* or *charge mode* is the state in which the battery charger system is connected to the main electricity supply, and the battery charger is delivering current, equalizing the cells, and performing other one-time or limited-time functions in order to bring the battery to a fully charged state.


2.2. *Active power* or *real power* (P) means the average power consumed by a unit. For a two terminal device with current and voltage waveforms i(t) and v(t), which are periodic with period T, the real or active power P is:


2.3. *Ambient temperature* is the temperature of the ambient air immediately surrounding the unit under test.


2.4. *Apparent power* (S) is the product of root-mean-square (RMS) voltage and RMS current in volt-amperes (VA).


2.5. *Batch charger* is a battery charger that charges two or more identical batteries simultaneously in a series, parallel, series-parallel, or parallel-series configuration. A batch charger does not have separate voltage or current regulation, nor does it have any separate indicators for each battery in the batch. When testing a batch charger, the term “battery” is understood to mean, collectively, all the batteries in the batch that are charged together. A charger can be both a batch charger and a multi-port charger or multi-voltage charger.


2.6. *Battery* or *battery pack* is an assembly of one or more rechargeable cells and any integral protective circuitry intended to provide electrical energy to a consumer product, and may be in one of the following forms: (a) Detachable battery (a battery that is contained in a separate enclosure from the consumer product and is intended to be removed or disconnected from the consumer product for recharging); or (b) integral battery (a battery that is contained within the consumer product and is not removed from the consumer product for charging purposes). The word “intended” in this context refers to the whether a battery has been designed in such a way as to permit its removal or disconnection from its associated consumer product.


2.7. *Battery energy* is the energy, in watt-hours, delivered by the battery under the specified discharge conditions in the test procedure.


2.8. *Battery maintenance mode* or *maintenance mode* is the mode of operation when the battery charger is connected to the main electricity supply and the battery is fully charged, but is still connected to the charger.


2.9. *Battery rest period* is a period of time between discharge and charge or between charge and discharge, during which the battery is resting in an open-circuit state in ambient air.


2.10. *C-Rate (C)* is the rate of charge or discharge, calculated by dividing the charge or discharge current by the nameplate battery charge capacity of the battery. For example, a 0.2 C-rate would result in a charge or discharge period of 5 hours.


2.11. *Cradle* is an electrical interface between an integral battery product and the rest of the battery charger designed to hold the product between uses.


2.12. *Energy storage system* is a system consisting of single or multiple devices designed to provide power to the UPS inverter circuitry.


2.13. *Equalization* is a process whereby a battery is overcharged, beyond what would be considered “normal” charge return, so that cells can be balanced, electrolyte mixed, and plate sulfation removed.


2.14. *Instructions* or *manufacturer's instructions* means the documentation packaged with a product in printed or electronic form and any information about the product listed on a Web site maintained by the manufacturer and accessible by the general public at the time of the test. It also includes any information on the packaging or on the product itself. “Instructions” also includes any service manuals or data sheets that the manufacturer offers to independent service technicians, whether printed or in electronic form.


2.15. *Measured charge capacity* of a battery is the product of the discharge current in amperes and the time in decimal hours required to reach the specified end-of-discharge voltage.


2.16. *Manual on-off switch* is a switch activated by the user to control power reaching the battery charger. This term does not apply to any mechanical, optical, or electronic switches that automatically disconnect mains power from the battery charger when a battery is removed from a cradle or charging base, or for products with non-detachable batteries that control power to the product itself.


2.17. *Multi-port charger* means a battery charger that charges two or more batteries (which may be identical or different) simultaneously. The batteries are not connected in series or in parallel but with each port having separate voltage and/or current regulation. If the charger has status indicators, each port has its own indicator(s). A charger can be both a batch charger and a multi-port charger if it is capable of charging two or more batches of batteries simultaneously and each batch has separate regulation and/or indicator(s).


2.18. *Multi-voltage charger* is a battery charger that, by design, can charge a variety of batteries (or batches of batteries, if also a batch charger) that are of different nameplate battery voltages. A multi-voltage charger can also be a multi-port charger if it can charge two or more batteries simultaneously with independent voltages and/or current regulation.


2.19. *Normal mode* is a mode of operation for a UPS in which:


(1) The AC input supply is within required tolerances and supplies the UPS,


(2) The energy storage system is being maintained at full charge or is under recharge, and


(3) The load connected to the UPS is within the UPS's specified power rating.


2.20. *Off mode* is the condition, applicable only to units with manual on-off switches, in which the battery charger:


(1) Is connected to the main electricity supply;


(2) Is not connected to the battery; and


(3) All manual on-off switches are turned off.


2.21. *Nameplate battery voltage* is specified by the battery manufacturer and typically printed on the label of the battery itself. If there are multiple batteries that are connected in series, the nameplate battery voltage of the batteries is the total voltage of the series configuration—that is, the nameplate voltage of each battery multiplied by the number of batteries connected in series. Connecting multiple batteries in parallel does not affect the nameplate battery voltage.


2.22. *Nameplate battery charge capacity* is the capacity, claimed by the battery manufacturer on a label or in instructions, that the battery can store, usually given in ampere-hours (Ah) or milliampere-hours (mAh) and typically printed on the label of the battery itself. If there are multiple batteries that are connected in parallel, the nameplate battery charge capacity of the batteries is the total charge capacity of the parallel configuration, that is, the nameplate charge capacity of each battery multiplied by the number of batteries connected in parallel. Connecting multiple batteries in series does not affect the nameplate charge capacity.


2.23. *Nameplate battery energy capacity* means the product (in watts-hours (Wh)) of the nameplate battery voltage and the nameplate battery charge capacity.


2.24. *Reference test load* is a load or a condition with a power factor of greater than 0.99 in which the AC output socket of the UPS delivers the active power (W) for which the UPS is rated.


2.25. *Standby mode* or *no-battery mode* means the condition in which:


(1) The battery charger is connected to the main electricity supply;


(2) The battery is not connected to the charger; and


(3) For battery chargers with manual on-off switches, all such switches are turned on.


2.26. *Total harmonic distortion (THD),* expressed as a percent, is as defined in section 3.5.9 of IEC 62040-3 Ed. 3.0.




2.27. *Uninterruptible power supply or UPS* means a battery charger consisting of a combination of convertors, switches and energy storage devices (such as batteries), constituting a power system for maintaining continuity of load power in case of AC input power failure.








2.27.1. *Voltage and frequency dependent UPS or VFD UPS* means a UPS that protects the load from a complete loss of AC input power. The output of a VFD UPS is dependent on changes in voltage and frequency of the AC input power and is not intended to provide additional voltage corrective functions, such as those arising from the use of tapped transformers.


_Note to 2.27.1:_ VFD input dependency may be verified by performing the AC input failure test in section 6.2.2.7 of IEC 62040-3 Ed. 3.0 and observing that, at a minimum, the UPS switches from normal mode of operation to battery power while the input is interrupted.










2.27.2. *Voltage and frequency independent UPS or VFI UPS* means a UPS that is independent of AC input power voltage and frequency variations as specified and declared in section 5.2 of IEC 62040-3 Ed. 3.0 and shall protect the load against adverse effects from such variations without discharging the energy storage device.


_Note to 2.27.2:_ VFI input dependency may be verified by performing the combined input voltage/frequency tolerance and VFI input independency test in section 6.4.1.3 of IEC 62040-3 Ed. 3.0 respectively and observing that, at a minimum, the UPS produces an output voltage and frequency within the specified output range when the input voltage is varied by ±10% of the rated input voltage and the input frequency is varied by ±2% of the rated input frequency.






2.27.3. *Voltage independent UPS or VI UPS* means a UPS that protects the load as required for VFD and also from (a) under-voltage applied continuously to the input, and (b) over-voltage applied continuously to the input. The output voltage of a VI UPS shall remain within declared voltage limits (provided by voltage corrective functions, such as those arising from the use of active and/or passive circuits). The output voltage tolerance band shall be narrower than the input voltage tolerance band.


_Note to 2.27.3:_ VI input dependency may be verified by performing the steady state input voltage tolerance test in section 6.4.1.2 of IEC 62040-3 Ed. 3.0 and ensuring that the UPS remains in normal mode with the output voltage within the specified output range when the input voltage is varied by ±10% of the rated input voltage.




2.28. *Unit under test* (UUT) in this appendix refers to the combination of the battery charger and battery being tested.


The values that may be measured or calculated during the conduct of this test procedure have been summarized for easy reference in Table 3.1.1. of this appendix.




Any power measurement equipment utilized for testing must conform to the uncertainty and resolution requirements outlined in section 4, “General conditions for measurement”, as well as annexes B, “Notes on the measurement of low power modes”, and D, “Determination of uncertainty of measurement”, of IEC 62301 (incorporated by reference, see § 430.3).


All tests, battery conditioning, and battery rest periods shall be carried out in a room with an air speed immediately surrounding the UUT of ≤0.5 m/s. The ambient temperature shall be maintained at 20 °C ± 5 °C throughout the test. There shall be no intentional cooling of the UUT such as by use of separately powered fans, air conditioners, or heat sinks. The UUT shall be conditioned, rested, and tested on a thermally non-conductive surface. When not undergoing active testing, batteries shall be stored at 20 °C ± 5 °C.


(a) If the UUT is intended for operation on AC line-voltage input in the United States, it shall be tested at 115 V at 60 Hz. If the UUT is intended for operation on AC line-voltage input but cannot be operated at 115 V at 60 Hz, it shall not be tested.


(b) If a charger is powered by a low-voltage DC or AC input, and the manufacturer packages the charger with an external power supply (“EPS”), sells, or recommends an optional EPS capable of providing that low voltage input, then the charger shall be tested using that EPS and the input reference source shall be 115 V at 60 Hz. If the EPS cannot be operated with AC input voltage at 115 V at 60 Hz, the charger shall not be tested.


(c) If the UUT is designed for operation only on DC input voltage and the provisions of section 3.1.4(b) of this appendix do not apply, it shall be tested with one of the following input voltages: 5.0 V DC for products drawing power from a computer USB port or the midpoint of the rated input voltage range for all other products. The input voltage shall be within ±1 percent of the above specified voltage.


(d) If the input voltage is AC, the input frequency shall be within ±1 percent of the specified frequency. The THD of the input voltage shall be ≤2 percent, up to and including the 13th harmonic. The crest factor of the input voltage shall be between 1.34 and 1.49.


(e) If the input voltage is DC, the AC ripple voltage (RMS) shall be:


(1) ≤0.2 V for DC voltages up to 10 V; or


(2) ≤2 percent of the DC voltage for DC voltages over 10 V.


(a) The battery charger system shall be prepared and set up in accordance with the manufacturer's instructions, except where those instructions conflict with the requirements of this test procedure. If no instructions are given, then factory or “default” settings shall be used, or where there are no indications of such settings, the UUT shall be tested in the condition as it would be supplied to an end user.


(b) If the battery charger has user controls to select from two or more charge rates (such as regular or fast charge) or different charge currents, the test shall be conducted at the fastest charge rate that is recommended by the manufacturer for everyday use, or, failing any explicit recommendation, the factory-default charge rate. If the charger has user controls for selecting special charge cycles that are recommended only for occasional use to preserve battery health, such as equalization charge, removing memory, or battery conditioning, these modes are not required to be tested. The settings of the controls shall be listed in the report for each test.


The UUT, including the battery charger and its associated battery, shall be new products of the type and condition that would be sold to a customer. If the battery is lead-acid chemistry and the battery is to be stored for more than 24 hours between its initial acquisition and testing, the battery shall be charged before such storage.


(a) For chargers with integral batteries, the battery packaged with the charger shall be used for testing. For chargers with detachable batteries, the battery or batteries to be used for testing will vary depending on whether there are any batteries packaged with the battery charger.


(1) If batteries are packaged with the charger, batteries for testing shall be selected from the batteries packaged with the battery charger, according to the procedure in section 3.2.3(b) of this appendix.


(2) If no batteries are packaged with the charger, but the instructions specify or recommend batteries for use with the charger, batteries for testing shall be selected from those recommended or specified in the instructions, according to the procedure in section 3.2.3(b) of this appendix.


(3) If no batteries are packaged with the charger and the instructions do not specify or recommend batteries for use with the charger, batteries for testing shall be selected from any that are suitable for use with the charger, according to the procedure in section 3.2.3(b) of this appendix.


(b)(1) From the detachable batteries specified above, use Table 3.2.1 of this appendix to select the batteries to be used for testing, depending on the type of battery charger being tested. The battery charger types represented by the rows in the table are mutually exclusive. Find the single applicable row for the UUT, and test according to those requirements. Select only the single battery configuration specified for the battery charger type in Table 3.2.1 of this appendix.


(2) If the battery selection criteria specified in Table 3.2.1 of this appendix results in two or more batteries or configurations of batteries of different chemistries, but with equal voltage and capacity ratings, determine the maintenance mode power, as specified in section 3.3.9 of this appendix, for each of the batteries or configurations of batteries, and select for testing the battery or configuration of batteries with the highest maintenance mode power.


(c) A charger is considered as:


(1) Single-capacity if all associated batteries have the same nameplate battery charge capacity (see definition) and, if it is a batch charger, all configurations of the batteries have the same nameplate battery charge capacity.


(2) Multi-capacity if there are associated batteries or configurations of batteries that have different nameplate battery charge capacities.


(d) The selected battery or batteries will be referred to as the “test battery” and will be used through the remainder of this test procedure.




(a) If the battery charger or product containing the battery charger does not have any additional functions unrelated to battery charging, this subsection may be skipped.


(b) Any optional functions controlled by the user and not associated with the battery charging process (*e.g.,* the answering machine in a cordless telephone charging base) shall be switched off. If it is not possible to switch such functions off, they shall be set to their lowest power-consuming mode during the test.


(c) If the battery charger takes any physically separate connectors or cables not required for battery charging but associated with its other functionality (such as phone lines, serial or USB connections, Ethernet, cable TV lines, *etc.*), these connectors or cables shall be left disconnected during the testing.


(d) Any manual on-off switches specifically associated with the battery charging process shall be switched on for the duration of the charge, maintenance, and no-battery mode tests, and switched off for the off mode test.


(a) The technician may need to disassemble the end-use product or battery charger to gain access to the battery terminals for the Battery Discharge Energy Test in section 3.3.8 of this appendix. If the battery terminals are not clearly labeled, the technician shall use a voltmeter to identify the positive and negative terminals. These terminals will be the ones that give the largest voltage difference and are able to deliver significant current (0.2 C or 1/hr) into a load.


(b) All conductors used for contacting the battery must be cleaned and burnished prior to connecting in order to decrease voltage drops and achieve consistent results.


(c) Manufacturer's instructions for disassembly shall be followed, except those instructions that:


(1) Lead to any permanent alteration of the battery charger circuitry or function;


(2) Could alter the energy consumption of the battery charger compared to that experienced by a user during typical use, *e.g.,* due to changes in the airflow through the enclosure of the UUT; or


(3) Conflict requirements of this test procedure.


(d) Care shall be taken by the technician during disassembly to follow appropriate safety precautions. If the functionality of the device or its safety features is compromised, the product shall be discarded after testing.


(e) Some products may include protective circuitry between the battery cells and the remainder of the device. If the manufacturer provides a description for accessing the connections at the output of the protective circuitry, these connections shall be used to discharge the battery and measure the discharge energy. The energy consumed by the protective circuitry during discharge shall not be measured or credited as battery energy.


(f) If any of the following conditions noted immediately below in sections 3.2.5.(f)(1) to 3.2.5.(f)(3) are applicable, preventing the measurement of the Battery Discharge Energy and the Charging and Maintenance Mode Energy, a manufacturer must submit a petition for a test procedure waiver in accordance with § 430.27:


(1) Inability to access the battery terminals;


(2) Access to the battery terminals destroys charger functionality; or


(3) Inability to draw current from the test battery.


(a) If there is no rating for the battery charge capacity on the battery or in the instructions, then the technician shall determine a discharge current that meets the following requirements. The battery shall be fully charged and then discharged at this constant-current rate until it reaches the end-of-discharge voltage specified in Table 3.3.2 of this appendix. The discharge time must be not less than 4.5 hours nor more than 5 hours. In addition, the discharge test (section 3.3.8 of this appendix) (which may not be starting with a fully-charged battery) shall reach the end-of-discharge voltage within 5 hours. The same discharge current shall be used for both the preparations step (section 3.3.4 of this appendix) and the discharge test (section 3.3.8 of this appendix). The test report shall include the discharge current used and the resulting discharge times for both a fully-charged battery and for the discharge test.


(b) For this section, the battery is considered as “fully charged” when either: it has been charged by the UUT until an indicator on the UUT shows that the charge is complete; or it has been charged by a battery analyzer at a current not greater than the discharge current until the battery analyzer indicates that the battery is fully charged.


(c) When there is no capacity rating, a suitable discharge current must generally be determined by trial and error. Since the conditioning step does not require constant-current discharges, the trials themselves may also be counted as part of battery conditioning.


The test sequence to measure the battery charger energy consumption is summarized in Table 3.3.1 of this appendix, and explained in detail in this appendix. Measurements shall be made under test conditions and with the equipment specified in sections 3.1 and 3.2 of this appendix.




The technician shall record:


(a) The manufacturer and model of the battery charger;


(b) The presence and status of any additional functions unrelated to battery charging;


(c) The manufacturer, model, and number of batteries in the test battery;


(d) The nameplate battery voltage of the test battery;


(e) The nameplate battery charge capacity of the test battery; and


(f) The nameplate battery charge energy of the test battery.


(g) The settings of the controls, if battery charger has user controls to select from two or more charge rates.


(a) The charging and maintenance mode test, described in detail in section 3.3.6 of this appendix, shall be 24 hours in length or longer, as determined by the items below. Proceed in order until a test duration is determined.


(1) If the battery charger has an indicator to show that the battery is fully charged, that indicator shall be used as follows: If the indicator shows that the battery is charged after 19 hours of charging, the test shall be terminated at 24 hours. Conversely, if the full-charge indication is not yet present after 19 hours of charging, the test shall continue until 5 hours after the indication is present.


(2) If there is no indicator, but the manufacturer's instructions indicate that charging this battery or this capacity of battery should be complete within 19 hours, the test shall be for 24 hours. If the instructions indicate that charging may take longer than 19 hours, the test shall be run for the longest estimated charge time plus 5 hours.


(3) If there is no indicator and no time estimate in the instructions, but the charging current is stated on the charger or in the instructions, calculate the test duration as the longer of 24 hours or:


(b) If none of the above applies, the duration of the test shall be 24 hours.


(a) No conditioning is to be done on lithium-ion batteries. The test technician shall proceed directly to battery preparation, section 3.3.4 of this appendix, when testing chargers for these batteries.


(b) Products with integral batteries will have to be disassembled per the instructions in section 3.2.5 of this appendix, and the battery disconnected from the charger for discharging.


(c) Batteries of other chemistries that have not been previously cycled are to be conditioned by performing two charges and two discharges, followed by a charge, as below. No data need be recorded during battery conditioning.


(1) The test battery shall be fully charged for the duration specified in section 3.3.2 of this appendix or longer using the UUT.


(2) The test battery shall then be fully discharged using either:


(i) A battery analyzer at a rate not to exceed 1 C, until its average cell voltage under load reaches the end-of-discharge voltage specified in Table 3.3.2 of this appendix for the relevant battery chemistry; or


(ii) The UUT, until the UUT ceases operation due to low battery voltage.


(3) The test battery shall again be fully charged as in step (c)(1) of this section.


(4) The test battery shall again be fully discharged as per step (c)(2) of this section.


(5) The test battery shall be again fully charged as in step (c)(1) of this section.


(d) Batteries of chemistries, other than lithium-ion, that are known to have been through at least two previous full charge/discharge cycles shall only be charged once per step (c)(5), of this section.


Following any conditioning prior to beginning the battery charge test (section 3.3.6 of this appendix), the test battery shall be fully discharged to the end of discharge voltage prescribed in Table 3.3.2 of this appendix, or until the UUT circuitry terminates the discharge.


The test battery shall be rested between preparation and the battery charge test. The rest period shall be at least one hour and not exceed 24 hours. For batteries with flooded cells, the electrolyte temperature shall be less than 30 °C before charging, even if the rest period must be extended longer than 24 hours.


(a) The Charge and Battery Maintenance Mode test measures the energy consumed during charge mode and some time spent in the maintenance mode of the UUT. Functions required for battery conditioning that happen only with some user-selected switch or other control shall not be included in this measurement. (The technician shall manually turn off any battery conditioning cycle or setting.) Regularly occurring battery conditioning or maintenance functions that are not controlled by the user will, by default, be incorporated into this measurement.


(b) During the measurement period, input power values to the UUT shall be recorded at least once every minute.


(1) If possible, the technician shall set the data logging system to record the average power during the sample interval. The total energy is computed as the sum of power samples (in watts) multiplied by the sample interval (in hours).


(2) If this setting is not possible, then the power analyzer shall be set to integrate or accumulate the input power over the measurement period and this result shall be used as the total energy.


(c) The technician shall follow these steps:


(1) Ensure that the user-controllable device functionality not associated with battery charging and any battery conditioning cycle or setting are turned off, as instructed in section 3.2.4 of this appendix;


(2) Ensure that the test battery used in this test has been conditioned, prepared, discharged, and rested as described in sections 3.3.3 through 3.3.5 of this appendix;


(3) Connect the data logging equipment to the battery charger;


(4) Record the start time of the measurement period, and begin logging the input power;


(5) Connect the test battery to the battery charger within 3 minutes of beginning logging. For integral battery products, connect the product to a cradle or EPS within 3 minutes of beginning logging;


(6) After the test battery is connected, record the initial time and power (W) of the input current to the UUT. These measurements shall be taken within the first 10 minutes of active charging;


(7) Record the input power for the duration of the “Charging and Maintenance Mode Test” period, as determined by section 3.3.2 of this appendix. The actual time that power is connected to the UUT shall be within ±5 minutes of the specified period; and


(8) Disconnect power to the UUT, terminate data logging, and record the final time.


The test battery shall be rested between charging and discharging. The rest period shall be at least 1 hour and not more than 4 hours, with an exception for flooded cells. For batteries with flooded cells, the electrolyte temperature shall be less than 30 °C before charging, even if the rest period must be extended beyond 4 hours.


(a) If multiple batteries were charged simultaneously, the discharge energy is the sum of the discharge energies of all the batteries.


(1) For a multi-port charger, batteries that were charged in separate ports shall be discharged independently.


(2) For a batch charger, batteries that were charged as a group may be discharged individually, as a group, or in sub-groups connected in series and/or parallel. The position of each battery with respect to the other batteries need not be maintained.


(b) During discharge, the battery voltage and discharge current shall be sampled and recorded at least once per minute. The values recorded may be average or instantaneous values.


(c) For this test, the technician shall follow these steps:


(1) Ensure that the test battery has been charged by the UUT and rested according to sections 3.3.6. and 3.3.7 of this appendix.


(2) Set the battery analyzer for a constant discharge rate and the end-of-discharge voltage in Table 3.3.2 of this appendix for the relevant battery chemistry.


(3) Connect the test battery to the analyzer and begin recording the voltage, current, and wattage, if available from the battery analyzer. When the end-of-discharge voltage is reached or the UUT circuitry terminates the discharge, the test battery shall be returned to an open-circuit condition. If current continues to be drawn from the test battery after the end-of-discharge condition is first reached, this additional energy is not to be counted in the battery discharge energy.


(d) If not available from the battery analyzer, the battery discharge energy (in watt-hours) is calculated by multiplying the voltage (in volts), current (in amperes), and sample period (in hours) for each sample, and then summing over all sample periods until the end-of-discharge voltage is reached.


After the measurement period is complete, the technician shall determine the average maintenance mode power consumption by examining the power-versus-time data from the charge and maintenance test and:


(a) If the maintenance mode power is cyclic or shows periodic pulses, compute the average power over a time period that spans a whole number of cycles and includes at least the last 4 hours.


(b) Otherwise, calculate the average power value over the last 4 hours.


The accumulated energy or the average input power, integrated over the test period from the charge and maintenance mode test, shall be used to calculate 24-hour energy consumption.


The standby mode measurement depends on the configuration of the battery charger, as follows:


(a) Conduct a measurement of standby power consumption while the battery charger is connected to the power source. Disconnect the battery from the charger, allow the charger to operate for at least 30 minutes, and record the power (*i.e.,* watts) consumed as the time series integral of the power consumed over a 10-minute test period, divided by the period of measurement. If the battery charger has manual on-off switches, all must be turned on for the duration of the standby mode test.


(b) Standby mode may also apply to products with integral batteries, as follows:


(1) If the product uses a cradle and/or adapter for power conversion and charging, then “disconnecting the battery from the charger” will require disconnection of the end-use product, which contains the batteries. The other enclosures of the battery charging system will remain connected to the main electricity supply, and standby mode power consumption will equal that of the cradle and/or adapter alone.


(2) If the product is powered through a detachable AC power cord and contains integrated power conversion and charging circuitry, then only the cord will remain connected to mains, and standby mode power consumption will equal that of the AC power cord (*i.e.,* zero watts).


(3) If the product contains integrated power conversion and charging circuitry but is powered through a non-detachable AC power cord or plug blades, then no part of the system will remain connected to mains, and standby mode measurement is not applicable.


The off mode measurement depends on the configuration of the battery charger, as follows:


(a) If the battery charger has manual on-off switches, record a measurement of off mode energy consumption while the battery charger is connected to the power source. Remove the battery from the charger, allow the charger to operate for at least 30 minutes, and record the power (*i.e.,* watts) consumed as the time series integral of the power consumed over a 10-minute test period, divided by the period of measurement, with all manual on-off switches turned off. If the battery charger does not have manual on-off switches, record that the off mode measurement is not applicable to this product.


(b) Off mode may also apply to products with integral batteries, as follows:


(1) If the product uses a cradle and/or adapter for power conversion and charging, then “disconnecting the battery from the charger” will require disconnection of the end-use product, which contains the batteries. The other enclosures of the battery charging system will remain connected to the main electricity supply, and off mode power consumption will equal that of the cradle and/or adapter alone.


(2) If the product is powered through a detachable AC power cord and contains integrated power conversion and charging circuitry, then only the cord will remain connected to mains, and off mode power consumption will equal that of the AC power cord (*i.e.,* zero watts).


(3) If the product contains integrated power conversion and charging circuitry but is powered through a non-detachable AC power cord or plug blades, then no part of the system will remain connected to mains, and off mode measurement is not applicable.


Unit energy consumption (UEC) shall be calculated for a battery charger using one of the two equations (equation (i) or equation (ii)) listed in this section. If a battery charger is tested and its charge duration as determined in section 3.3.2 of this appendix minus 5 hours is greater than the threshold charge time listed in Table 3.3.3 of this appendix (*i.e.* (t_cd_ − 5) * n > t_a&m_), equation (ii) shall be used to calculate UEC; otherwise a battery charger's UEC shall be calculated using equation (i).


(a) The power or energy meter must provide true root mean square (r. m. s) measurements of the active input and output measurements, with an uncertainty at full rated load of less than or equal to 0.5% at the 95% confidence level notwithstanding that voltage and current waveforms can include harmonic components. The meter must measure input and output values simultaneously.


(b) All measurement equipment used to conduct the tests must be calibrated within the measurement equipment manufacturer specified calibration period by a standard traceable to International System of Units such that measurements meet the uncertainty requirements specified in section 4.1.1(a) of this appendix.


All portions of the test must be carried out in a room with an air speed immediately surrounding the UUT of ≤0.5 m/s in all directions. Maintain the ambient temperature in the range of 20.0 °C to 30.0 °C, including all inaccuracies and uncertainties introduced by the temperature measurement equipment, throughout the test. No intentional cooling of the UUT, such as by use of separately powered fans, air conditioners, or heat sinks, is permitted. Test the UUT on a thermally non-conductive surface.


The AC input voltage and frequency to the UPS during testing must be within 3 percent of the highest rated voltage and within 1 percent of the highest rated frequency of the device.


Configure the UPS according to Annex J.2 of IEC 62040-3 Ed. 3.0 with the following additional requirements:




(a) *UPS Operating Mode Conditions.* If the UPS can operate in two or more distinct normal modes as more than one UPS architecture, conduct the test in its lowest input dependency as well as in its highest input dependency mode where VFD represents the highest possible input dependency, followed by VI and then VFI.


(b) *Energy Storage System.* The UPS must not be modified or adjusted to disable energy storage charging features. Minimize the transfer of energy to and from the energy storage system by ensuring the energy storage system is fully charged (at the start of testing) as follows:


(1) If the UUT has a battery charge indicator, charge the battery for 5 hours after the UUT has indicated that it is fully charged.


(2) If the UUT does not have a battery charge indicator but the user manual shipped with the UUT specifies a time to reach full charge, charge the battery for 5 hours longer than the time specified.


(3) If the UUT does not have a battery charge indicator or user manual instructions, charge the battery for 24 hours.


(c) *DC output port(s).* All DC output port(s) of the UUT must remain unloaded during testing.


(a) Any feature unrelated to maintaining the energy storage system at full charge or delivery of load power (*e.g.,* LCD display) shall be switched off. If it is not possible to switch such features off, they shall be set to their lowest power-consuming mode during the test.


(b) If the UPS takes any physically separate connectors or cables not required for maintaining the energy storage system at full charge or delivery of load power but associated with other features (such as serial or USB connections, Ethernet, etc.), these connectors or cables shall be left disconnected during the test.


(c) Any manual on-off switches specifically associated with maintaining the energy storage system at full charge or delivery of load power shall be switched on for the duration of the test.


Efficiency can be calculated from either average power or accumulated energy.


If efficiency calculation are to be made using average power, calculate the average power consumption (P_avg_) by sampling the power at a rate of at least 1 sample per second and computing the arithmetic mean of all samples over the time period specified for each test as follows:


Operate the UUT and the load for a sufficient length of time to reach steady state conditions. To determine if steady state conditions have been attained, perform the following steady state check, in which the difference between the two efficiency calculations must be less than 1 percent:


(a)(1) Simultaneously measure the UUT's input and output power for at least 5 minutes, as specified in section 4.3.1 of this appendix, and record the average of each over the duration as *P*_avg__in_ and *P*_avg__out_, respectively. Or,


(2) Simultaneously measure the UUT's input and output energy for at least 5 minutes and record the accumulation of each over the duration as *E*_in_ and *E*_out_, respectively.


(b) Calculate the UUT's efficiency, *Eff*_1_, using one of the following two equations:


(c) Wait a minimum of 10 minutes.


(d) Repeat the steps listed in paragraphs (a) and (b) of section 4.3.2 of this appendix to calculate another efficiency value, *Eff*_2_.


(e) Determine if the product is at steady state using the following equation:


If the percentage difference of *Eff*_1_ and *Eff*_2_ as described in the equation, is less than 1 percent, the product is at steady state.


(f) If the percentage difference is greater than or equal to 1 percent, the product is not at steady state. Repeat the steps listed in paragraphs (c) to (e) of section 4.3.2 of this appendix until the product is at steady state.


Measure input and output power of the UUT according to section J.3 of Annex J of IEC 62040-3 Ed. 3.0, or measure the input and output energy of the UUT for efficiency calculations with the following exceptions:


(a) Test the UUT at the following reference test load conditions, in the following order: 100 percent, 75 percent, 50 percent, and 25 percent of the rated output power.


(b) Perform the test at each of the reference test loads by simultaneously measuring the UUT's input and output power in Watts (W), or input and output energy in Watt-Hours (Wh) over a 15 minute test period at a rate of at least 1 Hz. Calculate the efficiency for that reference load using one of the following two equations:


(c) For representations of no-load losses, measure the active power at the UPS input port with no load applied in accordance with section 6.2.2.4 of IEC 62040-3 Ed. 3.0.


*4.3.4 UUT Classification*

Optional Test for determination of UPS architecture. Determine the UPS architecture by performing the tests specified in the definitions of VI, VFD, and VFI (sections 2.27.1 through 2.27.3 of this appendix).




(a) Use the load weightings from Table 4.3.1 to determine the average load adjusted efficiency as follows:


(b) Round the calculated efficiency value to one tenth of a percentage point.





---

[N] [76 FR 31776, June 1, 2011, as amended at 81 FR 31842, May 20, 2016; 81 FR 42235, June 29, 2016; 81 FR 89822, Dec. 12, 2016; 87 FR 28756, May 11, 2022; 87 FR 55122, Sept. 8, 2022; 89 FR 28592, Apr. 19, 2024; 90 FR 6791, Jan. 21, 2025]







