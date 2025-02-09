# Appendix Z to Subpart B of Part 430—Uniform Test Method for Measuring the Energy Consumption of External Power Supplies


DOE incorporated by reference the entire standard for IEC 62301 in § 430.3; however, only enumerated provisions of this document are applicable to this appendix, as follows:


0.1 IEC 62301, (“IEC 62301”), Household electrical appliances—Measurement of standby power, (Edition 2.0, 2011-01), as follows:


(a) Section 4.3.2 “Supply voltage waveform,” as referenced in section 3 of this appendix;


(b) Section 4.4.1 “Power measurement uncertainty,” as referenced in section 4 of this appendix;


(c) Section 5.3.3 “Average reading method,” as referenced in sections 5 and 6 of this appendix;


(d) Annex B “Notes on the measurement of low power modes,” as referenced in section 4 of this appendix; and


(e) Annex D “Determination of uncertainty of measurement,” as referenced in section 4 of this appendix. 


0.2 Reserved.


This appendix covers the test requirements used to measure the energy consumption of external power supplies subject to the energy conservation standards set forth at § 430.32(w)(1). Additionally, this appendix does not apply to external power supplies for which the primary load of the converted voltage within the device is not delivered to a separate end-use product, *i.e.,* products in which the primary load of converted voltage is delivered within the device itself to execute the primary function of the device. Examples of excluded products may include, but are not limited to, consumer electronics with USB outputs and lighting products with USB outputs.


The following definitions are for the purposes of understanding terminology associated with the test method for measuring external power supply energy consumption.


*Active mode* means the mode of operation when the external power supply is connected to the main electricity supply and the output is (or “all outputs are” for external power supplies with multiple outputs) connected to a load (or “loads” for external power supplies with multiple outputs).


*Active mode efficiency* is the ratio, expressed as a percentage, of the total real output power produced by a power supply to the real input power required to produce it. IEEE Standard 1515-2000, 4.3.1.1 (Reference for guidance only, see § 430.4.)


*Active power (P)* (also *real power*) means the average power consumed by a unit. For a two-terminal device with current and voltage waveforms i(t) and v(t), respectively, which are periodic with period T, the real or active power P is:


*Adaptive external power supply* means an external power supply that can alter its output voltage during active-mode based on an established digital communication protocol with the end-use application without any user-generated action.


*Ambient temperature* means the temperature of the ambient air immediately surrounding the unit under test.


*Average Active-Mode Efficiency* means the average of the active mode efficiencies at the loading conditions (100, 75, 50 percent, and 25 percent of unit under test's nameplate output current) for which that unit can sustain the output current.


*Manual on-off switch* is a switch activated by the user to control power reaching the device. This term does not apply to any mechanical, optical, or electronic switches that automatically disconnect mains power from the device when a load is disconnected from the device, or that control power to the load itself.


*Minimum output current* means the minimum current that must be drawn from an output bus for an external power supply to operate within its specifications.


*Multiple-voltage external power supply* means an external power supply that is designed to convert line voltage AC input into more than one simultaneous lower-voltage output.


*Nameplate output current* means the current output of the power supply as specified on the manufacturer's label on the power supply housing (either DC or AC) or, if absent from the housing, as provided by the manufacturer.


*Nameplate output power* means the power output of the power supply as specified on the manufacturer's label on the power supply housing or, if absent from the housing, as specified in documentation provided by the manufacturer. For an adaptive external power supply with USB-PD ports, in place of the nameplate output power at the lowest voltage, use an output power calculated as the product of its lowest nameplate output voltage and 2 amps for each USB-PD port and as specified on the manufacturer's label or documentation at the highest voltage. This definition only applies to DOE testing and certification requirements and is unrelated to the physical nameplate label or documentation of an EPS.


*Nameplate output voltage* means the voltage output of the power supply as specified on the manufacturer's label on the power supply housing (either DC or AC).


*No-load mode* means the mode of operation when an external power supply is connected to the main electricity supply and the output is (or “all outputs are” for a multiple-voltage external power supply) not connected to a load (or “loads” for a multiple-voltage external power supply).


*Off-mode* is the condition, applicable only to units with manual on-off switches, in which the external power supply is:


(1) Connected to the main electricity supply;


(2) The output is not connected to any load; and


(3) All manual on-off switches are turned off.


*Output bus* means any of the outputs of the power supply to which loads can be connected and from which power can be drawn, as opposed to signal connections used for communication.


*RMS* means root mean square.


*Single-voltage external AC-AC power supply* means an external power supply that is designed to convert line voltage AC input into lower voltage AC output and is able to convert to only one AC output voltage at a time.


*Single-voltage external AC-DC power supply* means an external power supply that is designed to convert line voltage AC input into lower-voltage DC output and is able to convert to only one DC output voltage at a time.


*Standby mode* means the condition in which the external power supply is in no-load mode and, for external power supplies with manual on-off switches, all such switches are turned on.


*Switch-selectable single voltage external power supply* means a single-voltage AC-AC or AC-DC power supply that allows users to choose from more than one output voltage.


*Total harmonic distortion (THD),* expressed as a percentage, is the RMS value of an AC signal after the fundamental component is removed and interharmonic components are ignored, divided by the RMS value of the fundamental component. THD of current is defined as:


*Unit under test (UUT)* is the external power supply being tested.


*USB Power Delivery (USB-PD) EPS* means an adaptive EPS that utilizes a USB Type-C output port and uses a digital protocol to communicate between the EPS and the end-use product to automatically switch between any output voltage within the range of 3.3 volts to 20 volts. The USB-PD output bus must be capable of delivering 3 amps at the lowest output voltage, and the currents must not exceed any of the following values for the supported voltages: 3 amps at 9 volts; 3 amps at 15 volts; and 5 amps at 20 volts.


*USB Type-C* means the reversible 24-pin physical USB connector system that supports USB-PD and allows for the transmission of data and power between compatible USB products.


(a) Any power measurements recorded, as well as any power measurement equipment utilized for testing, shall conform to the uncertainty and resolution specifications in Section 4.4.1, “Power measurement uncertainty,” as well as Annexes B, “Notes on the measurement of low power modes,” and D, “Determination of uncertainty of measurement,” of IEC 62301.


(b) Carry out tests in a room that has an air speed close to the UUT of ≤0.5 m/s. Maintain ambient temperature at 20 ± 5 °C throughout the test. Do not intentionally cool the UUT, for example, by use of separately powered fans, air conditioners, or heat sinks. Test the UUT on a thermally non-conductive surface. Products intended for outdoor use may be tested at additional temperatures, provided those are in addition to the conditions specified and are noted in a separate section on the test report.


(c) If the UUT is intended for operation on AC line-voltage input in the United States, test it at 115 V at 60 Hz. If the UUT is intended for operation on AC line-voltage input but cannot be operated at 115 V at 60 Hz, do not test it. Ensure the input voltage is within ±1 percent of the above specified voltage and the input frequency is within ±1 percent of the specified frequency.


(d) The input voltage source must be capable of delivering at least 10 times the nameplate input power of the UUT as is specified in IEEE 1515-2000 (Referenced for guidance only, see § 430.4). Regardless of the AC source type, the THD of the supply voltage when supplying the UUT in the specified mode must not exceed 2 percent, up to and including the 13th harmonic. The peak value of the test voltage must be within 1.34 and 1.49 multiplied by its RMS value.


(e) Select all leads used in the test set-up with appropriate wire gauges and lengths to minimize voltage drops across the wires during testing. See Table B.2 — “Commonly used values for wire gages [*sic*] and related voltage drops” in IEEE 1515-2000 for further guidance.


(f) Test Load. To load the power supply to produce all active-mode loading conditions, use passive loads, such as rheostats, or active loads, such as electronic loads. Resistive loads need not be measured precisely with an ohmmeter; simply adjust a variable resistor to the point where the ammeter confirms that the desired percentage of nameplate output current is flowing. For electronic loads, adjust the desired output current in constant current mode rather than adjusting the required output power in constant power mode.


(g) Test the external power supply at the end of the wire or cord that connects to an end-use product, regardless of whether the end of the wire or cord is integrated into an end-use product or plugs into and out of an end-use product. If a separate wire or cord is provided by the manufacturer to connect the external power supply to an end-use product, use this wire or cord and perform tests at the end of the cord that connects to an end-use product. An external power supply that is not supplied with a wire or cord must be tested with a wire or an output cord recommended by the manufacturer. If the external power supply is not supplied with a wire or cord and for which the manufacturer does not recommend one, the EPS must be tested with a 3-foot-long output wire or cord with a conductor thickness that is minimally sufficient to carry the maximum required current.


(1) If the connection to an end-use product is removable, there are two options for connecting metering equipment to the output connection of the external power supply:


(i) Cut the cord immediately adjacent to the output connector, or


(ii) Attach leads and measure the efficiency from the output connector itself.


(2) If the connection to an end-use product is not removable, cut the cord immediately adjacent to the powered product and connect metering equipment at that point.


(h) Conduct the tests on the sets of output wires that constitute the output busses. If the product has more than two output wires, including those wires that are necessary for controlling the product, the manufacturer must supply a connection diagram or test fixture that will allow the testing laboratory to put the UUT into active mode. Figure 1 of this section provides one illustration of how to set up a single-voltage external power supply for testing; however, the actual test setup may vary pursuant to the type of external power supply being tested and the requirements of this appendix.


(i) Except as provided in section 4(j) of this appendix, external power supplies must be tested in their final, completed configuration in order to represent their measured efficiency on product labels or specification sheets. Although the same procedure may be used to test the efficiency of a bare circuit board power supply prior to its incorporation into a finished housing and the attachment of its DC output cord, the efficiency of the bare circuit board power supply may not be used to characterize the efficiency of the final product (once enclosed in a case and fitted with a DC output cord). For example, a power supply manufacturer or component manufacturer may wish to assess the efficiency of a design that it intends to provide to an OEM for incorporation into a finished external power supply, but these results may not be used to represent the efficiency of the finished external power supply.


(j) If a product serves one or more other major functions in addition to converting household electric current into DC current or lower-voltage AC current, components of the product that serve other functions may be disconnected before testing so that test measurements do not include power used by other functions and as long as disconnecting such components do not affect the ability of the product to convert household electric current into DC current or lower-voltage AC current. For example, consider an EPS that also acts as a surge protector that offers outlets supplying AC household electric current and one or more USB outputs supplying DC current. If power is provided to the AC outlets through a surge protection circuit, but power to the USB outlet(s) is not, then the surge protection circuit may be disconnected from AC power during testing. Similarly, if a lighted manual on-off switch disconnects power only to the AC outlets, but not the USB outputs, then the manual on-off switch may be turned off and power to the light disconnected during testing. If a disconnection is performed by a technician, the disconnection must be able to be replicated by a third-party test facility.


(a) Single-Voltage External Power Supply


(1) Standby Mode and Active-Mode Measurement.


(i) Place in the “on” position any built-in switch in the UUT controlling power flow to the AC input and note the existence of such a switch in the final test report.


(ii) Operate the UUT at 100 percent of nameplate output current for at least 30 minutes immediately prior to conducting efficiency measurements. After this warm-up period, monitor AC input power for a period of 5 minutes to assess the stability of the UUT. If the power level does not drift by more than 5 percent from the maximum value observed, the UUT is considered stable. If the UUT is stable, record the measurements obtained at the end of this 5-minute period. Measure subsequent loading conditions under the same 5-minute stability parameters. Note that only one warm-up period of 30 minutes is required for each UUT at the beginning of the test procedure. If the AC input power is not stable over a 5-minute period, follow the guidelines established by Section 5.3.3 of IEC 62301 for measuring average power or accumulated energy over time for both input and output.


(iii) Test the UUT at the nameplate output voltage(s) at the loading conditions listed in Table 1, derated per the proportional allocation method presented in section 5(a)(1)(iv) of this appendix. Conduct efficiency measurements in sequence from Loading Condition 1 to Loading Condition 4 as indicated in Table 1 of this section. For Loading Condition 5, place the UUT in no-load mode, disconnect any additional signal connections to the UUT, and measure input power.


(A) If testing of additional, optional loading conditions is desired, conduct that testing in accordance with this test procedure and subsequent to completing the sequence described in section 5(a)(1)(iii) of this appendix.


(B) Where the external power supply lists both an instantaneous and continuous output current, test the external power supply at the continuous condition only.


(C) If an external power supply cannot sustain output at one or more of the Loading Conditions 1-4 as specified in Table 1 of this section, test the external power supply only at the loading conditions for which it can sustain output.


(iv) Use the following proportional allocation method to provide consistent loading conditions for single-voltage external power supplies with multiple-output busses. For additional explanation (provided for guidance only), please refer to section 6.1.1 of the California Energy Commission's “Generalized Test Protocol for Calculating the Energy Efficiency of Internal Ac-Dc Power Supplies Revision 6.7,” March 2014.


(A) Consider a power supply with N output busses, each with the same nameplate output voltages V_1_, * * *, V_N_, corresponding output current ratings I_1_, * * *, I_N_, and a nameplate output power P. Calculate the derating factor D by dividing the power supply maximum output power P by the sum of the maximum output powers of the individual output busses, equal to the product of port nameplate output voltage and current I_i_V_i_, as follows:


(B) If D ≥1, then loading every port to its nameplate output current does not exceed the overall maximum output power for the power supply. In this case, load each output bus to the percentages of its nameplate output current listed in Table 1 of this section. However, if D <1, it is an indication that loading each port to its nameplate output current will exceed the overall maximum output power for the power supply. In this case, and at each loading condition, load each output bus to the appropriate percentage of its nameplate output current as listed in Table 1, multiplied by the derating factor D.


(v) Test switch-selectable single-voltage external power supplies twice—once at the highest nameplate output voltage and once at the lowest.


(vi) Efficiency calculation. Calculate and record efficiency at each loading point by dividing the UUT's measured active output power at a given loading condition by the active AC input power measured at that loading condition.


(A) Calculate and record average efficiency of the UUT as the arithmetic mean of the efficiency values calculated at Loading Conditions 1, 2, 3, and 4 in Table 1 of this section.


(B) If, when tested, a UUT cannot sustain output current at one or more of the loading conditions as specified in Table 1, the average active-mode efficiency is calculated as the average of the loading conditions for which it can sustain output.


(C) If the UUT can only sustain one output current at any of the output busses, test it at the loading condition that allows for the maximum output power on that bus (*i.e.,* the highest output current possible at the highest output voltage on that bus).


(vii) Power consumption calculation. The power consumption of Loading Condition 5 (no-load) is equal to the active AC input power (W) at that loading condition.


(viii) Off-Mode Measurement. If the UUT incorporates manual on-off switches, place the UUT in off-mode, and measure and record its power consumption at Loading Condition 5 in Table 1 of this section. The measurement of the off-mode energy consumption must conform to the requirements specified in section 5(a)(1) of this appendix, except that all manual on-off switches must be placed in the “off” position for the off-mode measurement. The UUT is considered stable if, over 5 minutes with samples taken at least once every second, the AC input power does not drift from the maximum value observed by more than 1 percent or 50 milliwatts, whichever is greater. Measure the off-mode power consumption of a switch-selectable single-voltage external power supply twice—once at the highest nameplate output voltage and once at the lowest.


(b) Multiple-Voltage External Power Supply.


(1) Standby-Mode and Active-Mode Measurement.


(i) Place in the “on” position any built-in switch in the UUT controlling power flow to the AC input and note the existence of such a switch in the final test report.


(ii) Operate the UUT at 100 percent of nameplate output current for at least 30 minutes immediately prior to conducting efficiency measurements. After this warm-up period, monitor AC input power for a period of 5 minutes to assess the stability of the UUT. If the power level does not drift by more than 1 percent from the maximum value observed, the UUT is considered stable. If the UUT is stable, record the measurements obtained at the end of this 5-minute period. Measure subsequent loading conditions under the same 5-minute stability parameters. Note that only one warm-up period of 30 minutes is required for each UUT at the beginning of the test procedure. If the AC input power is not stable over a 5-minute period, follow the guidelines established by Section 5.3.3 of IEC 62301 for measuring average power or accumulated energy over time for both input and output.


(iii) Test the UUT at the nameplate output voltage(s) at the loading conditions listed in Table 2 of this section, derated per the proportional allocation method presented in section 5(b)(1)(iv) of this appendix. Active or passive loads used for efficiency testing of the UUT must maintain the required current loading set point for each output voltage within an accuracy of ±0.5 percent. Conduct efficiency measurements in sequence from Loading Condition 1 to Loading Condition 4 as indicated in Table 2 of this section. For Loading Condition 5, place the UUT in no-load mode, disconnect any additional signal connections to the UUT, and measure input power.


(A) If testing of additional, optional loading conditions is desired, conduct that testing in accordance with this test procedure and subsequent to completing the sequence described in section 5(b)(1)(iii) of this appendix.


(B) Where the external power supply lists both an instantaneous and continuous output current, test the external power supply at the continuous condition only.


(C) If an external power supply cannot sustain output at one or more of the Loading Conditions 1-4 as specified in Table 2 of this section, test the external power supply only at the loading conditions for which it can sustain output.


(iv) Use the following proportional allocation method to provide consistent loading conditions for multiple-voltage external power supplies. For additional explanation (provided for guidance only), please refer to section 6.1.1 of the California Energy Commission's “Proposed Test Protocol for Calculating the Energy Efficiency of Internal Ac-Dc Power Supplies Revision 6.7,” March 2014.


(A) Consider a power supply with N output busses, and nameplate output voltages V_1_, * * *, V_N_, corresponding output current ratings I_1_, * * *, I_N_, and a maximum output power P as specified on the manufacturer's label on the power supply housing, or, if absent from the housing, as specified in the documentation provided with the unit by the manufacturer. Calculate the derating factor D by dividing the power supply maximum output power P by the sum of the maximum output powers of the individual output busses, equal to the product of bus nameplate output voltage and current I_i_V_i_, as follows:


(B) If D ≥1, then loading every bus to its nameplate output current does not exceed the overall maximum output power for the power supply. In this case, load each output bus to the percentages of its nameplate output current listed in Table 2 of this section. However, if D <1, it is an indication that loading each bus to its nameplate output current will exceed the overall maximum output power for the power supply. In this case, and at each loading condition, load each output bus to the appropriate percentage of its nameplate output current listed in Table 2 of this section, multiplied by the derating factor D.


(v) Minimum output current requirements. Depending on their application, some multiple-voltage power supplies may require a minimum output current for each output bus of the power supply for correct operation. In these cases, ensure that the load current for each output at Loading Condition 4 in Table 2 is greater than the minimum output current requirement. Thus, if the test method's calculated load current for a given voltage bus is smaller than the minimum output current requirement, the minimum output current must be used to load the bus. This load current shall be properly recorded in any test report.


(vi) Efficiency calculation. Calculate and record efficiency at each loading point by dividing the UUT's measured active output power at a given loading condition by the active AC input power measured at that loading condition.


(A) Calculate and record average efficiency of the UUT as the arithmetic mean of the efficiency values calculated at Loading Conditions 1, 2, 3, and 4, in Table 2 of this section.


(B) If, when tested, a UUT cannot sustain output current at one or more of the loading conditions as specified in Table 2 of this section, the average active mode efficiency is calculated as the average of the loading conditions for which it can sustain output.


(C) If the UUT can only sustain one output current at any of the output busses, test it at the loading condition that allows for the maximum output power on that bus (*i.e.,* the highest output current possible at the highest output voltage on that bus).


(vii) Power consumption calculation. The power consumption of Loading Condition 5 (no-load) is equal to the active AC input power (W) at that loading condition.


(2) Off-mode Measurement—If the UUT incorporates manual on-off switches, place the UUT in off-mode and measure and record its power consumption at Loading Condition 5 in Table 2 of this section. The measurement of the off-mode energy consumption must conform to the requirements specified in section (5)(b)(1) of this appendix, except that all manual on-off switches must be placed in the “off” position for the off-mode measurement. The UUT is considered stable if, over 5 minutes with samples taken at least once every second, the AC input power does not drift from the maximum value observed by more than 1 percent or 50 milliwatts, whichever is greater.


(a) Single-Voltage Adaptive External Power Supply.


(1) Standby Mode and Active-Mode Measurement.


(i) Place in the “on” position any built-in switch in the UUT controlling power flow to the AC input and note the existence of such a switch in the final test report.


(ii) Operate the UUT at 100 percent of nameplate output current for at least 30 minutes immediately prior to conducting efficiency measurements. After this warm-up period, monitor AC input power for a period of 5 minutes to assess the stability of the UUT. If the power level does not drift by more than 5 percent from the maximum value observed, the UUT is considered stable. If the UUT is stable, record the measurements obtained at the end of this 5-minute period. Measure subsequent loading conditions under the same 5-minute stability parameters. Note that only one warm-up period of 30 minutes is required for each UUT at the beginning of the test procedure. If the AC input power is not stable over a 5-minute period, follow the guidelines established by Section 5.3.3 of IEC 62301 for measuring average power or accumulated energy over time for both input and output.


(iii) Test the UUT at the nameplate output voltage(s) at the loading conditions listed in Table 3 of this section, derated per the proportional allocation method presented in section 6(a)(1)(iv) of this appendix. Adaptive external power supplies must be tested twice—once at the highest nameplate output voltage and once at the lowest nameplate output voltage as described in the following sections.


(A) At the highest nameplate output voltage, test adaptive external power supplies in sequence from Loading Condition 1 to Loading Condition 4, as indicated in Table 3 of this section. For Loading Condition 5, place the UUT in no-load mode, disconnect any additional signal connections, and measure the input power.


(B) At the lowest nameplate output voltage, with the exception of USB-PD EPSs, test all adaptive external power supplies in sequence from Loading Condition 1 to Loading Condition 4, as indicated in Table 3 of this section. For USB-PD adaptive external power supplies, at the lowest nameplate output voltage, test the external power supply such that for Loading Conditions 1, 2, 3, and 4, all adaptive ports are loaded to 2 amperes, 1.5 amperes, 1 ampere, and 0.5 amperes, respectively. All non-adaptive ports will continue to be loaded as indicated in Table 3 of this section. For Loading Condition 5, test all adaptive external power supplies by placing the UUT in no-load mode, disconnecting any additional signal connections, and measuring the input power.


(C) If testing of additional, optional loading conditions is desired, conduct that testing in accordance with this test procedure and subsequent to completing the sequence described in section 6(a)(1)(iii) of this appendix.


(D) Where the external power supply lists both an instantaneous and continuous output current, test the external power supply at the continuous condition only.


(E) If an external power supply cannot sustain output at one or more of the Loading Conditions 1-4 as specified in Table 3 of this section, test the external power supply only at the loading conditions for which it can sustain output.


(iv) Use the following proportional allocation method to provide consistent loading conditions for single-voltage adaptive external power supplies with multiple-output busses. For additional explanation, please refer to section 6.1.1 of the California Energy Commission's “Proposed Test Protocol for Calculating the Energy Efficiency of Internal Ac-Dc Power Supplies Revision 6.7,” March 2014.


(A) Consider a power supply with N output busses, each with the same nameplate output voltages V_1_, * * *, V_N_, corresponding output current ratings I_1_, * * *, I_N_, and a maximum output power P as specified on the manufacturer's label on the power supply housing, or, if absent from the housing, as specified in the documentation provided with the unit by the manufacturer. Calculate the derating factor D by dividing the power supply maximum output power P by the sum of the maximum output powers of the individual output busses, equal to the product of port nameplate output voltage and current I_i_V_i_, as follows:


For USB-PD adaptive external power supplies, at the lowest nameplate output voltage, limit the contribution from each port to 10W when calculating the derating factor.


(B) If D ≥1, then loading every port to its nameplate output current does not exceed the overall maximum output power for the power supply. In this case, load each output bus to the percentages of its nameplate output current listed in Table 3 of this section. However, if D <1, it is an indication that loading each port to its nameplate output current will exceed the overall maximum output power for the power supply. In this case, and at each loading condition, each output bus will be loaded to the appropriate percentage of its nameplate output current listed in Table 3 of this section, multiplied by the derating factor D.


(v) Efficiency calculation. Calculate and record the efficiency at each loading point by dividing the UUT's measured active output power at that loading condition by the active AC input power measured at that loading condition.


(A) Calculate and record average efficiency of the UUT as the arithmetic mean of the efficiency values calculated at Loading Conditions 1, 2, 3, and 4 in Table 3 of this section.


(B) If, when tested, a UUT cannot sustain the output current at one or more of the loading conditions as specified in Table 3 of this section, the average active-mode efficiency is calculated as the average of the loading conditions for which it can sustain output.


(C) If the UUT can only sustain one output current at any of the output busses, test it at the loading condition that allows for the maximum output power on that bus (*i.e.,* the highest output current possible at the highest output voltage on that bus).


(vi) Power consumption calculation. The power consumption of Loading Condition 5 (no-load) is equal to the active AC input power (W) at that loading condition.


(2) Off-Mode Measurement—If the UUT incorporates manual on-off switches, place the UUT in off-mode and measure and record its power consumption at Loading Condition 5 in Table 3 of this section. The measurement of the off-mode energy consumption must conform to the requirements specified in section 6(a)(1) of this appendix, except that all manual on-off switches must be placed in the “off” position for the off-mode measurement. The UUT is considered stable if, over 5 minutes with samples taken at least once every second, the AC input power does not drift from the maximum value observed by more than 1 percent or 50 milliwatts, whichever is greater. Measure the off-mode power consumption of a single-voltage adaptive external power supply twice—once at the highest nameplate output voltage and once at the lowest.


(b) Multiple-Voltage Adaptive External Power Supply.


(1) Standby Mode and Active-Mode Measurement.


(i) Place in the “on” position any built-in switch in the UUT controlling power flow to the AC input and note the existence of such a switch in the final test report.


(ii) Operate the UUT at 100 percent of nameplate output current for at least 30 minutes immediately prior to conducting efficiency measurements. After this warm-up period, monitor AC input power for a period of 5 minutes to assess the stability of the UUT. If the power level does not drift by more than 1 percent from the maximum value observed, the UUT is considered stable. If the UUT is stable, record the measurements obtained at the end of this 5-minute period. Measure subsequent loading conditions under the same 5-minute stability parameters. Note that only one warm-up period of 30 minutes is required for each UUT at the beginning of the test procedure. If the AC input power is not stable over a 5-minute period, follow the guidelines established by Section 5.3.3 of IEC 62301 for measuring average power or accumulated energy over time for both input and output.


(iii) Test the UUT at the nameplate output voltage(s) at the loading conditions listed in Table 4 of this section, derated per the proportional allocation method presented in section 6(b)(1)(iv) of this appendix. Active or passive loads used for efficiency testing of the UUT must maintain the required current loading set point for each output voltage within an accuracy of ±0.5 percent. Adaptive external power supplies must be tested twice—once at the highest nameplate output voltage and once at the lowest nameplate output voltage as described in the following sections.


(A) At the highest nameplate output voltage, test adaptive external power supplies in sequence from Loading Condition 1 to Loading Condition 4, as indicated in Table 4 of this section. For Loading Condition 5, place the UUT in no-load mode, disconnect any additional signal connections, and measure the input power.


(B) At the lowest nameplate output voltage, with the exception of USB-PD EPSs, test all other adaptive external power supplies, in sequence from Loading Condition 1 to Loading Condition 4, as indicated in Table 4 of this section. For USB-PD adaptive external power supplies, at the lowest nameplate output voltage, test the external power supply such that for Loading Conditions 1, 2, 3, and 4, all adaptive ports are loaded to 2 amperes, 1.5 amperes, 1 ampere, and 0.5 amperes, respectively. All non-adaptive ports will continue to be loaded as indicated in Table 4 of this section. For Loading Condition 5, test all adaptive external power supplies by placing the UUT in no-load mode, disconnecting any additional signal connections, and measuring the input power.


(C) If testing of additional, optional loading conditions is desired, conduct that testing in accordance with this test procedure and subsequent to completing the sequence described in section 6(b)(1)(iii) of this appendix.


(D) Where the external power supply lists both an instantaneous and continuous output current, test the external power supply at the continuous condition only.


(E) If an adaptive external power supply is operating as a multiple-voltage external power supply at only the highest nameplate output voltage or lowest nameplate output voltage, test this external power supply as a multiple-voltage adaptive external power supply at both the highest nameplate output voltage and the lowest nameplate output voltage.


(F) If an external power supply has both adaptive and non-adaptive ports, and these ports operate simultaneously at multiple voltages, ensure that testing is performed with all ports active at both the highest and lowest nameplate output voltage. For example, if an external power supply has a USB-PD adaptive output bus that operates at 5 volts and 20 volts and a second non-adaptive output bus that operates at 9 volts, test this EPS at the highest nameplate output voltage with both the adaptive and non-adaptive ports respectively loaded at 20 volts and 9 volts; likewise, test it at the lowest nameplate output voltage with both the adaptive and non-adaptive ports respectively loaded at 5 volts and 9 volts.


(G) If an external power supply cannot sustain output at one or more of the Loading Conditions 1-4 as specified in Table 4 of this section, test the external power supply only at the loading conditions for which it can sustain output.


(iv) Use the following proportional allocation method to provide consistent loading conditions for multiple-voltage adaptive external power supplies. For additional explanation, please refer to section 6.1.1 of the California Energy Commission's “Proposed Test Protocol for Calculating the Energy Efficiency of Internal Ac-Dc Power Supplies Revision 6.7,” March 2014.


(A) Consider a multiple-voltage power supply with N output busses, and nameplate output voltages V_1_, * * *, V_N_, corresponding output current ratings I_1_, * * *, I_N_, and a maximum output power P as specified on the manufacturer's label on the power supply housing, or, if absent from the housing, as specified in the documentation provided with the unit by the manufacturer. Calculate the derating factor D by dividing the power supply maximum output power P by the sum of the maximum output powers of the individual output busses, equal to the product of bus nameplate output voltage and current I_i_V_i_, as follows:


For USB-PD adaptive external power supplies, at the lowest nameplate output voltage, limit the contribution from each port to 10W when calculating the derating factor.


(B) If D ≥1, then loading every bus to its nameplate output current does not exceed the overall maximum output power for the power supply. In this case, load each output bus to the percentages of its nameplate output current listed in Table 4 of this section. However, if D <1, it is an indication that loading each bus to its nameplate output current will exceed the overall maximum output power for the power supply. In this case, at each loading condition, load each output bus to the appropriate percentage of its nameplate output current listed in Table 4 of this section, multiplied by the derating factor D.


(v) Minimum output current requirements. Depending on their application, some multiple-voltage adaptive external power supplies may require a minimum output current for each output bus of the power supply for correct operation. In these cases, ensure that the load current for each output at Loading Condition 4 in Table 4 of this section is greater than the minimum output current requirement. Thus, if the test method's calculated load current for a given voltage bus is smaller than the minimum output current requirement, use the minimum output current to load the bus. Record this load current in any test report.


(vi) Efficiency calculation. Calculate and record the efficiency at each loading point by dividing the UUT's measured active output power at that loading condition by the active AC input power measured at that loading condition.


(A) Calculate and record average efficiency of the UUT as the arithmetic mean of the efficiency values calculated at Loading Conditions 1, 2, 3, and 4 in Table 4 of this section.


(B) If, when tested, a UUT cannot sustain the output current at one or more of the loading conditions as specified in Table 4, the average active-mode efficiency is calculated as the average of the loading conditions for which it can sustain output.


(C) If the UUT can only sustain one output current at any of the output busses, test it at the loading condition that allows for the maximum output power on that bus (*i.e.,* the highest output current possible at the highest output voltage on that bus).


(vii) Power consumption calculation. The power consumption of Loading Condition 5 (no-load) is equal to the active AC input power at that loading condition.


(2) Off-mode Measurement—If the UUT incorporates manual on-off switches, place the UUT in off-mode, and measure and record its power consumption at Loading Condition 5 in Table 4 of this section. The measurement of the off-mode energy consumption must conform to the requirements specified in section (6)(b)(1) of this appendix, except that all manual on-off switches must be placed in the “off” position for the off-mode measurement. The UUT is considered stable if, over 5 minutes with samples taken at least once every second, the AC input power does not drift from the maximum value observed by more than 1 percent or 50 milliwatts, whichever is greater. Measure the off-mode power consumption of a multiple-voltage adaptive external power supply twice—once at the highest nameplate output voltage and once at the lowest.



---

[N] [87 FR 51221, Aug. 19, 2022]






